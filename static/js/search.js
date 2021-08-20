
// import {jsonResponse} from './init-search';
var current_page = 1;
var records_per_page = 6;
let pagesIndex, searchIndex, results, searchTerm;
const searchResults = document.getElementById("site-results");
const resultNumber = document.getElementById("results-number");
const pagination_element = document.getElementById('pagination');
let rows = 5;
// const pagination_element = document.getElementById("page");
async function initSearchIndex() {
  
  try {
    const response = await fetch("/index.json");

    pagesIndex = await response.json();
    
    

    searchIndex = lunr(function () {
      this.field("title");
      this.field("description");
      this.ref("href");
      pagesIndex.forEach((page) => this.add(page));
    });

    

    // console.log('SEARCH', searchIndex)

    
  } catch (e) {
    console.log(e);
  }
  searchTerm = getQueryVariable("q")
  // let results = searchIndex.search(searchTerm);
  console.log('searchTerm', searchTerm)
  
  results = searchSite(searchTerm)

  // changePage(1);
  DisplayList(results, searchResults, rows, current_page);
  SetupPagination(results, pagination_element, rows)

  resultNumber.innerHTML = `Showing ${results.length} results`
}

initSearchIndex();

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}

function changePage(page) {
  var btn_next = document.getElementById("btn_next");
  var btn_prev = document.getElementById("btn_prev");
  var page_span = document.getElementById("page");
  let resultList = '';
  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();
  for (var i = (page - 1) * records_per_page; i < (page * records_per_page) && i < results.length; i++) {
    resultList += `<li>
      <div class="rendered-list">
        <div><a href='${results[i].href}'>${results[i].title}</a></div>
        <div>${results[i].description}</div>
        <div>${results[i].type}</div> 
      </div>
    </li>`
  }
  searchResults.innerHTML = resultList;
  page_span.innerHTML = page + "/" + numPages();
  if (page == 1) {
    btn_prev.style.visibility = "hidden";
  } else {
    btn_prev.style.visibility = "visible";
  }

  if (page == numPages()) {
      btn_next.style.visibility = "hidden";
  } else {
      btn_next.style.visibility = "visible";
  }
  // document.location = document.location.pathname + `search/?q=${searchTerm}/#page/${page}`
  // document.location = document.location.pathname + `search/?q=${searchTerm}/#page/${page}`
  // console.log('document.location.pathname', document.location.pathname);
}

function DisplayList (items, wrapper, rows_per_page, page) {
  wrapper.innerHTML = "";
	page--;

  let start = rows_per_page * page;
	let end = start + rows_per_page;
	let paginatedItems = items.slice(start, end);
  let resultList = '';

  for (let i = 0; i < paginatedItems.length; i++) {
    resultList += `<li>
    <div class="rendered-list">
      <div><a href='${paginatedItems[i].href}'>${paginatedItems[i].title}</a></div>
      <div>${paginatedItems[i].description}</div>
      <div>${paginatedItems[i].type}</div> 
    </div>
  </li>`
  }

  wrapper.innerHTML = resultList;
}

function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, items) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(items, searchResults, rows, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

function PaginationButton (page, items) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(items, searchResults, rows, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}
// function renderSearchResults(results) {
//   searchResults.innerHTML = results.map((result) => {
//     return `
//     <li>
//       <div class="rendered-list">
//         <div><a href='${result.href}'>${result.title}</a></div>
//         <div>${result.description}</div>
//         <div>${result.type}</div> 
//       </div>

//     </li>`
    
//   }).join("");
// }

function numPages()
{
    return Math.ceil(results.length / records_per_page);
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] === variable) {
          return decodeURIComponent(pair[1].replace(/\+/g, "%20"));
      }
  }
}

function searchSite(query) {

  const originalQuery = query;
  query = getLunrSearchQuery(query);
  let results = getSearchResults(query);

  return results.length
    ? results
    : query !== originalQuery
    ? getSearchResults(originalQuery)
    : [];
}

function getSearchResults(query) {
  return searchIndex.search(query).flatMap((hit) => {
    if (hit.ref == "undefined") return [];
    let pageMatch = pagesIndex.filter((page) => page.href === hit.ref)[0];
    pageMatch.score = hit.score;
    return [pageMatch];
  });
}

function getLunrSearchQuery(query) {
  const searchTerms = query.split(" ");
  if (searchTerms.length === 1) {
    return query;
  }
  query = "";
  for (const term of searchTerms) {
    query += `+${term} `;
  }
  return query.trim();
}