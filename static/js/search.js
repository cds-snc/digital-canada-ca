
var current_page = 1;
let pagesIndex, searchIndex, results, searchTerm, filtered, filRes, pageRes, checkbox, checkLabel, checkValue;

const searchResults = document.getElementById("site-results");
const cb = document.getElementById("cb");
const resultNumber = document.getElementById("results-number");
const dropdownBtn = document.getElementById("dropdownbtn");
const relevantBtn = document.getElementById("relevant");
const recentBtn = document.getElementById("recent");
const pagination_element = document.getElementById("pagination");
const typeTotal = document.getElementById("typeTotal")
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
let checkDiv;
// checkDiv.id = 'checkDiv'
let theDiv = document.querySelector('#typeTotal')
const colours = ['#FFCC33', '#066169', '#AB2328', '#004986', '#115740', '#E87722'];


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
  if (!inputVal.value) inputVal.value = getQueryVariable();
  results = searchSite(getQueryVariable());
  // results = pagesIndex;
  

  renderSearchResult(results);
  // typesArrayLabels(results)
  renderCheckBoxFilter();

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
  
  inputVal.value = ""
  renderSearchResult(pagesIndex)
  typesArrayLabels(pagesIndex)

  
  let keysForDel = [];
  url.searchParams.forEach((v, k) => {
    keysForDel.push(k);
  });
  keysForDel.forEach(k => {
    url.searchParams.delete(k);
  })
  window.history.pushState({}, '', location.origin)
  
})
loadMoreBtn.addEventListener('click', () => {
  current_page++;
  rows += 5;
  renderSearchResult(renderResults())
  
})

function keyUp(ev) {

  url.searchParams.set('q', ev.target.value);
  window.history.pushState({}, '', url);
  results = searchSite(getQueryVariable());
  renderSearchResult(results)
  // typesArrayLabels(results)
  
  if (filtered) {
    renderSearchResult(getFilteredSearch(getQueryVariable()).filter(filterUndefined));
  }



}

window.onpopstate = function() {
  
  inputVal.value = getQueryVariable();
  results = searchSite(getQueryVariable());

  renderSearchResult(results);
  typesArrayLabels(results);
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

// function contentNumberLabel(items) {
//   var array = [];
//   for (let i = 0; i < items.length; i++) {
//     array.push(items[i].type);
//   }
//   var map = array.reduce(function (obj, b) {
//     obj[b] = ++obj[b] || 1;
//     return obj;
//   }, {});


//   for (const [key, value] of Object.entries(map)) {
    
//     if (document.getElementById(key).id == key) {
//       document.getElementById(key).innerHTML = `<span>(${value})</span>`;
//     } 
//   }
// }




var val = {
  a: {},

  get occ() {
    return this.a;
  },
  set occ(value) {
    this.a = value
  }
}

window.addEventListener('keyup', function(){
  let typesArray = [];
  for (let i = 0; i < results.length; i++) {
    typesArray.push(results[i].type)
  }

  const occurences = typesArray.reduce(function (acc, curr){
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {});
  let checkDiv = document.getElementsByClassName("checkbox-div");

    for (var i = 0; i < document.getElementsByClassName("checkbox-div").length; i++) {
      if (checkDiv[i].id in occurences) {
        checkDiv[i].children[1].children[0].textContent = occurences[checkDiv[i].id]
        checkDiv[i].classList.remove("hide-div")
      } else {
        checkDiv[i].children[1].children[0].textContent = 0;
        checkDiv[i].classList.add("hide-div")
      }
    }
})



function typesArrayLabels(items) {
  let typesArray = [];
  for (let i = 0; i < items.length; i++) {
    typesArray.push(items[i].type)
  }

  const occurences = typesArray.reduce(function (acc, curr){
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {});

  

  
  let totalItems = ""
  
  let counter = 0;
  
  if (counter === colours.length || counter > colours.length) { counter = 0; }

  for (const [key, value] of Object.entries(occurences)) {
    
    totalItems += `
      <input type="checkbox" id=${key} name=${key} style="display: none;"  onClick="checkboxClicked(this)">
      <label class="content-types" for=${key}>${capitalizeFirstLetter(key)} <span id="filter-value-id" style="background-color:${renderFilterValueColour(key)}; margin-left: 2rem;">(${value})</span></label>
      
    `
    counter++;
    
    renderFilterValueColour(key);
    


  }
  typeTotal.innerHTML = totalItems

  
}

function returnOccurences() {
  let typesArray = [];
  for (let i = 0; i < results.length; i++) {
    typesArray.push(results[i].type)
  }

  const occurences = typesArray.reduce(function (acc, curr){
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {});

  return occurences;
}


const renderCheckBoxFilter = () => {
  let totalItems = ""
  
  let counter = 0;
  
  if (counter === colours.length || counter > colours.length) { counter = 0; }

  for (const [key, value] of Object.entries(returnOccurences())) {
    // <input type="checkbox" id=${key} name=${key} style="display: none;" onClick="checkboxClicked(this)">

    
    totalItems += `
    <div id=${key} class="checkbox-div" onClick="checkboxClicked(this)">
    <input type="checkbox" id=${key} name=${key} style="display: none;" >
    <label class="content-types" for=${key}>${capitalizeFirstLetter(key)} <span id="filter-value-id" style="background-color:${renderFilterValueColour(key)}; margin-left: 2rem;">(${value})</span></label> 
    </div>
      
      
    `
    counter++;
    
    renderFilterValueColour(key);
    


  }
  typeTotal.innerHTML = totalItems
}



function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Renders the search results
 * @param $items
 */
function renderSearchResult(items) {
  let page = current_page;
  page--;
  
  let start = 0;
  let end = start + rows;

  let paginatedItems = items.slice(start, end);

  
  let resultList = "";

  for (let i = 0; i < paginatedItems.length; i++) {
    resultList += `<li>
    <div class="rendered-list">
      <div><a href='${paginatedItems[i].href}' target="_blank" class="render-list-title">${paginatedItems[i].title}</a></div>
      <div>${paginatedItems[i].description}</div>
      <div style="padding: 0 1rem 0 1rem; background-color: ${renderFilterValueColour(paginatedItems[i].type)}">${paginatedItems[i].type.toUpperCase()}</div> 
    </div>
  </li>`;
  }

  searchResults.innerHTML = resultList;
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
  // console.log('searchres', results)

  return results.length
    ? results
    : query !== originalQuery
    ? getSearchResults(originalQuery)
    : [];
}


function getSearchResults(query) {
  return query ? searchIndex.search(query).flatMap((hit) => {
    // console.log('hit', hit);
    if (hit.ref == "undefined") return [];
    let pageMatch = pagesIndex.filter((page) => page.href === hit.ref)[0];
    // console.log('pm', pageMatch)
    pageMatch.score = hit.score;
    return [pageMatch];
  }) : pagesIndex;

}

function getFilteredSearch(query) {
  return searchIndex.search(query).flatMap((hit) => {
    if (hit.ref == "undefined") return [];
    let pageMatch = filtered.filter((page) => page.href === hit.ref)[0];
    if (pageMatch) pageMatch.score = hit.score;
    return [pageMatch];
  });
}

function filterUndefined(item) {
  if (item !== undefined) {
    return true;
  }
  return false;
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
  const sorted = renderResults().sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
  // url.searchParams.append('sort', 'recent');
    
  // window.history.pushState({}, '', url); 
  return sorted;
}

/**
 * Sorts results by hit score (most relevant) 
 * @returns {sorted} returns sorted results byt hit score
 */

function sortByHitScore() {
  const sortScore = renderResults().sort(function (a, b) {
    return b.score - a.score;
  });
  // url.searchParams.append('sort', 'relevance');
    
  // window.history.pushState({}, '', url);  
  return sortScore;
}

function checkboxClicked(val) {
  console.log('valu', val)
  
  if (val.checked) {
    // typesArray.push(val.name);
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
  
  filtered = searchSite(getQueryVariable()).filter(function(content){
    return type.indexOf(content.type) != -1;
  });
  
  renderSearchResult(renderResults());
}

if(window.location.href.indexOf('?q=') != -1) {
  document.getElementById("modal_container").classList.add('show-modal-container');
} else {
  document.getElementById("modal_container").classList.remove('show-modal-container');
}

function renderResults() {
  let result = filtered == 0 || filtered == undefined ? results : filtered
  return result;
}


const colourFilter = {"section": "#FFCC33", "blog": "#066169", "page": "#AB2328", "a11y": "#004986", "engagement": "#115740", "roadmap": "#E87722"};
function renderFilterValueColour(param) {
  
  for (const [key, value] of Object.entries(colourFilter)) {
    if (param == key) {
      
      return value
    }
  }
}