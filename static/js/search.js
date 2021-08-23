
// import {jsonResponse} from './init-search';
var current_page = 1;
var records_per_page = 6;
let pagesIndex, searchIndex, results, searchTerm;
const searchResults = document.getElementById("site-results");
const resultNumber = document.getElementById("results-number");
const dropdownBtn = document.getElementById("dropdownbtn");
const relevantBtn = document.getElementById("relevant");
const recentBtn = document.getElementById("recent");
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
      this.field("date");
      this.ref("href");
      pagesIndex.forEach((page) => this.add(page));
    });

    

    

    
  } catch (e) {
    console.log(e);
  }
  searchTerm = getQueryVariable("q")

  
  results = searchSite(searchTerm)
  console.log(results)

  renderSearchResults(results, searchResults, rows, current_page);
  // renderSearchResult(results, current_page);
  // renderPagination(results);
  renderPagination(results, pagination_element, rows)

  resultNumber.innerHTML = `Showing ${results.length} results`
}

initSearchIndex();

// function renderSearchResult(items, page) {
//   page--;

//   let start = rows * page;
//   let end = start * rows;
//   let paginatedItems = items.slice(start, end);
//   let resultList = '';

//   for (let i = 0; i < paginatedItems.length; i++) {
//     resultList += `<li>
//     <div class="rendered-list">
//       <div><a href='${paginatedItems[i].href}'>${paginatedItems[i].title}</a></div>
//       <div>${paginatedItems[i].description}</div>
//       <div>${paginatedItems[i].type}</div> 
//     </div>
//   </li>`
//   }

//   searchResults.innerHTML = resultList

// }

// function renderSearchResults (items, wrapper, rows_per_page, page) {
//   wrapper.innerHTML = "";
// 	page--;

//   let start = rows_per_page * page;
// 	let end = start + rows_per_page;
// 	let paginatedItems = items.slice(start, end);
//   let resultList = '';

//   for (let i = 0; i < paginatedItems.length; i++) {
//     resultList += `<li>
//     <div class="rendered-list">
//       <div><a href='${paginatedItems[i].href}'>${paginatedItems[i].title}</a></div>
//       <div>${paginatedItems[i].description}</div>
//       <div>${paginatedItems[i].type}</div> 
//     </div>
//   </li>`
//   }

//   wrapper.innerHTML = resultList;
  
//   // document.location = document.location.search + `#/page/${page + 1}`
// }

// function renderPagination(items) {
//   let page_count = Math.ceil(items.length / rows);
//   for (let i = 1; i < page_count + 1; i++) {
//     let btn = createPaginationButtons(i, items);
//     pagination_element.appendChild(btn);
//   }

// }

function renderPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = createPaginationButtons(i, items);
		wrapper.appendChild(btn);
	}
}

function createPaginationButtons (page, items) {
	let button = document.createElement('button');
  // console.log('page', page);
  
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		renderSearchResults(items, searchResults, rows, current_page);
    // renderSearchResult(items, page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
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
function sortedResult() {
  const sorted = results.sort(function(a, b){
    return new Date(b.date) - new Date(a.date);
  })
  return sorted;
}
function dropdownClicked() {
  document.getElementById("myDropdown").classList.toggle("show");
  let resultList = '';
  // let paginatedItems = results.slice(start, end);
  //if most recent clicked, change text, else other one
  // add event listener
  relevantBtn.addEventListener('click', function () {
    console.log(relevantBtn.innerText);
  })

  recentBtn.addEventListener('click', function() {
    dropdownBtn.innerText = recentBtn.innerText
    for (let i = 0; i < sortedResult().length; i++) {
      resultList += `<li>
      <div class="rendered-list">
        <div><a href='${sortedResult()[i].href}'>${sortedResult()[i].title}</a></div>
        <div>${sortedResult()[i].description}</div>
        <div>${sortedResult()[i].type}</div> 
        <div>${sortedResult()[i].date}</div> 
      </div>
    </li>`
    }

    searchResults.innerHTML = resultList
  })
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}