
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
const params = new URLSearchParams(location.search);
const loadMoreBtn = document.getElementById("load-more");


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

  // generateItems(current_page, results);
  
  
  // contentNumberLabel(results);

  // dropdownBtn.innerText = relevantBtn.innerText;
  
  

}



function initSearchSite() {
  document.addEventListener('DOMContentLoaded', function() {
    initSearchIndex();
    let txt = document.getElementById("q");

    txt.addEventListener('input', keyUp);
    
  })
}

initSearchSite()
const theSearch = new URLSearchParams(window.location.search);

const open = document.getElementById("open")
const modal_container = document.getElementById("modal_container")
const close = document.getElementById("close")



open.addEventListener('click', () => {
  modal_container.classList.add('show-modal-container');
  
  
  
  window.history.pushState({}, '', `${location.origin}?q=`)

  
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
  
  
  params.set('', ev.target.value);

  window.history.pushState({}, '', `${location.origin}?q=${ev.target.value}`)


  results = searchSite(location.search.slice(1).split("&")[0].split("=")[1]);
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
    console.log(key, value);
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
  resultNumber.innerHTML = `Showing ${results.length} results`;
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
  // resultNumber.innerHTML = `Showing ${results.length} results`;
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
    return location.search.slice(1).split("&")[0].split("=")[1];
  }
  // let params = new URLSearchParams(location.search);
  // let q = params.get("q");

  // if (!q) {
  //   return ""
  // } else {
  //   return q
  // }

  
  // var query = window.location.search.substring(1);
  // var vars = query.split("&");
  // for (var i = 0; i < vars.length; i++) {
  //   var pair = vars[i].split("=");
  //   if (pair[0] === variable) {
  //     return decodeURIComponent(pair[1].replace(/\+/g, "%20"));
  //   }
  // }
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

function handleData() {
  pagination_element.innerHTML = ''
  if (typesArray.length !== 0) {
    getType(typesArray);
    // var filtered = results.filter(function(content){
    //   return typesArray.indexOf(content.type) != -1;
    // });
  
    // results = filtered;
    // renderSearchResult(results);

  } else {
    location.reload()
  }
  
  
}

function checkboxClicked(val) {
  if (val.checked) {
    typesArray.push(val.name)
  } else {
    if (typesArray.indexOf(val.name) > -1) {
      typesArray.splice(typesArray.indexOf(val.name), 1)
    }
  }
  console.log(typesArray);

}

function getType(type) {

// there is an issue where if say you check one thing and search, and then check another and search, the second check does not get rendered
//this is likely because we've already changed results.
  var filtered = results.filter(function(content){
    return type.indexOf(content.type) != -1;
  });
  console.log(filtered.length);
  resultNumber.innerHTML = `Showing ${filtered.length} results`;
  // results = filtered;
  renderSearchResult(filtered);
  

  
}

window.addEventListener('popstate', (event) => {
  console.log('popped');
})

// console.log(window.location.href)
if(window.location.href.indexOf('?q=') != -1) {
  document.getElementById("modal_container").classList.add('show-modal-container');
} else {
  document.getElementById("modal_container").classList.remove('show-modal-container');
}