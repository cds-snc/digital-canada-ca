
var current_page = 1;
let pagesIndex, searchIndex, results, searchTerm;
let typesArray = [];
const searchResults = document.getElementById("site-results");
const resultNumber = document.getElementById("results-number");
const dropdownBtn = document.getElementById("dropdownbtn");
const relevantBtn = document.getElementById("relevant");
const recentBtn = document.getElementById("recent");
const pagination_element = document.getElementById("pagination");
let rows = 5;
const typeCount = document.getElementById("type-count");
const check = document.getElementsByName("check");
const checkboxes = document.getElementsByClassName("checkboxes");
let searchQuery = location.search.slice(1).split("&")[0].split("=")[1]
const inputVal = document.getElementById("q");
// let params = new URLSearchParams(location.search);
const loadMoreBtn = document.getElementById("load-more");
let  params, post_type;
const url = new URL(window.location);


/**
 * Initializes the search index after user has searched
 */
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
  // searchTerm = getQueryVariable("q");

  results = searchSite(getQueryVariable());
  // results = searchSite("")

  renderSearchResult(results);
  
  if (!inputVal.value) inputVal.value = getQueryVariable();
  
  
  // contentNumberLabel(results);
}



function initSearchSite() {
  document.addEventListener('DOMContentLoaded', function() {
    initSearchIndex();
    let txt = document.getElementById("q");

    txt.addEventListener('input', keyUp);
    
  })
}

initSearchSite()

const open = document.getElementById("open")
const modal_container = document.getElementById("modal_container")
const close = document.getElementById("close")



open.addEventListener('click', () => {
  modal_container.classList.add('show-modal-container');
  
  // window.history.pushState({}, '', `${location.origin}?q=`)
  url.searchParams.set('q', '');
  window.history.pushState({}, '', url);


  
})

relevantBtn.addEventListener('click', () => {
  relevantBtn.classList.add('clicked');
  recentBtn.classList.remove('clicked');
  renderSearchResult(sortByHitScore());
});
recentBtn.addEventListener('click', () => {
  recentBtn.classList.add('clicked');
  relevantBtn.classList.remove('clicked');
  renderSearchResult(sortByDate());
})

close.addEventListener('click', () => {
  modal_container.classList.remove('show-modal-container');
  
  var uri = window.location.toString();
  
  inputVal.value = ""
  renderSearchResult(searchSite(""))
  

  if (uri.indexOf("?") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("?"))
    
    window.history.replaceState({}, document.title, clean_uri);
  }
})
loadMoreBtn.addEventListener('click', () => {
  current_page++;
  rows += 5;
  renderSearchResult(results)
})

function keyUp(ev) {
  
  
  // params.set('', ev.target.value);

  // window.history.pushState({}, '', `${location.origin}?q=${ev.target.value}`)
  url.searchParams.set('q', ev.target.value);
  window.history.pushState({}, '', url);

  
  // results = searchSite(location.search.slice(1).split("&")[0].split("=")[1]);
  results = searchSite(getQueryVariable());
  renderSearchResult(results)
  // contentNumberLabel(results)

}

window.onpopstate = function() {
  
  inputVal.value = getQueryVariable();
  results = searchSite(getQueryVariable());

  renderSearchResult(results);
  if(window.location.href.indexOf('?q=') != -1) {
    document.getElementById("modal_container").classList.add('show-modal-container');
  } else {
    document.getElementById("modal_container").classList.remove('show-modal-container');
  }
}

/**
 * Renders the number of times a word appears in the search filter box
 * @param $items
 */

function contentNumberLabel(items) {
  var array = [];
  for (let i = 0; i < items.length; i++) {
    array.push(items[i].type);
  }
  var map = array.reduce(function (obj, b) {
    obj[b] = ++obj[b] || 1;
    return obj;
  }, {});


  for (const [key, value] of Object.entries(map)) {
    
    if (document.getElementById(key).id == key) {
      document.getElementById(key).innerHTML = `<span>(${value})</span>`;
    }
  }
}

/**
 * Renders the search results
 * @param $items
 */
function renderSearchResult(items) {
  let page = current_page;
  page--;
  // resultNumber.innerHTML = `Showing ${results.length} results`;
  let start = 0;
  let end = start + rows;

  let paginatedItems = items.slice(start, end);

  
  let resultList = "";

  for (let i = 0; i < paginatedItems.length; i++) {
    resultList += `<li>
    <div class="rendered-list">
      <div><a href='${paginatedItems[i].href}' target="_blank" class="render-list-title">${paginatedItems[i].title}</a></div>
      <div>${paginatedItems[i].description}</div>
      <div>${paginatedItems[i].type}</div> 
    </div>
  </li>`;
  }

  searchResults.innerHTML = resultList;
  contentNumberLabel(items);
  resultNumber.innerHTML = `Showing ${items.length} results`;
}


/**
 * Gets the query that was entered by the user from url
 * @param $variable
 * @returns {decodeURIComponent} removes any special character and just returns the words
 */

function getQueryVariable() {
  
  if (location.search.slice(1).split("&")[0].split("=")[1] == undefined) {
    return ""
  } else {
    return decodeURIComponent(location.search.slice(1).split("&")[0].split("=")[1].replace(/\+/g, "%20"));
  }

}

/**
 * Takes the query that was entered by the user from getQueryVariable
 * @param $variable
 * @returns {results}
 */

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

/**
 * Creates Lunr search query to search through JSON object, 
 * @param $query
 * @returns {query} returns modified version of the query
 */

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

/**
 * Sorts results by date (most recent) 
 * @returns {sorted} returns sorted results by most recent date
 */
function sortByDate() {
  const sorted = results.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
  return sorted;
}

/**
 * Sorts results by hit score (most relevant) 
 * @returns {sorted} returns sorted results byt hit score
 */

function sortByHitScore() {
  const sortScore = results.sort(function (a, b) {
    return b.score - a.score;
  });
  return sortScore;
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// function handleData() {
//   pagination_element.innerHTML = ''
//   if (typesArray.length !== 0) {
//     getType(typesArray);

//   } else {
//     location.reload()
//   }
  
  
// }

function checkboxClicked(val) {
  if (val.checked) {
    typesArray.push(val.name);
    url.searchParams.append('post_type', val.name);
    
    window.history.pushState({}, '', url);  
  } else {
    post_type = url.searchParams.getAll('post_type').filter(type => type !== val.name)
    
    post_type.length > 0 ? deletePostType(post_type) : url.searchParams.delete('post_type');
    window.history.pushState({}, '', url); 
    
  }
  getType(url.searchParams.getAll('post_type'))

}

function deletePostType(postType) {
  url.searchParams.delete('post_type');
  for (const type of postType) {
    url.searchParams.append('post_type', type);
  }
}

function getType(type) {
  var filtered = results.filter(function(content){
    return type.indexOf(content.type) != -1;
  });
  console.log('filter', filtered);
  filtered == 0 ? renderSearchResult(results) : renderSearchResult(filtered)
}

if(window.location.href.indexOf('?q=') != -1) {
  document.getElementById("modal_container").classList.add('show-modal-container');
} else {
  document.getElementById("modal_container").classList.remove('show-modal-container');
}