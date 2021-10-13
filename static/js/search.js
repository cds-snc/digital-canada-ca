
var current_page = 1;
let pagesIndex, searchIndex, results, filtered, post_type;

const searchResults = document.getElementById("site-results");
const resultNumber = document.getElementById("results-number");
const relevantBtn = document.getElementById("relevant");
const recentBtn = document.getElementById("recent");
const typeTotal = document.getElementById("typeTotal")
let rows = 5;
const inputVal = document.getElementById("q");
const loadMoreBtn = document.getElementById("load-more");
const url = new URL(window.location);
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
      this.field("type");
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
  


  
  let keysForDel = [];
  url.searchParams.forEach((v, k) => {
    keysForDel.push(k);
  });
  keysForDel.forEach(k => {
    url.searchParams.delete(k);
  })
  window.history.pushState({}, '', location.origin)
  results = searchSite(getQueryVariable())
  renderSearchResult(results)
  // renderSearchResult(pagesIndex)
  renderCheckBoxFilter()
  
})
loadMoreBtn.addEventListener('click', () => {
  current_page++;
  rows += 5;
  renderSearchResult(results)
  
})

function keyUp(ev) {

  url.searchParams.set('q', ev.target.value);
  window.history.pushState({}, '', url);
  
  results = searchSite(getQueryVariable());
  renderSearchResult(results)
  
  renderCheckBoxFilter()
  
}

window.onpopstate = function() {
  
  inputVal.value = getQueryVariable();
  results = searchSite(getQueryVariable());

  renderSearchResult(results);
  renderCheckBoxFilter()
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

window.addEventListener('keyup', function(){
  // let typesArray = [];

  // let ind = searchIndex.search(getQueryVariable()).flatMap((hit) => {
  //   if (hit.ref == "undefined") return [];
  //   let pageMatch = pagesIndex.filter((page) => page.href === hit.ref)[0];
  //   pageMatch.score = hit.score;
  //   return [pageMatch];
  // });
  // for (let i = 0; i < ind.length; i++) {
  //   typesArray.push(ind[i].type)
  // }

  // const occurences = typesArray.reduce(function (acc, curr){
  //   return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  // }, {});
  // let btn = document.getElementsByClassName("content-types");

  //   for (var i = 0; i < btn.length; i++) {
      
  //     if (btn[i].id in occurences) {
  //       btn[i].children[0].textContent = `(${occurences[btn[i].id]})`
        
  //       btn[i].classList.remove("hide-div")
  //     } else {
        
  //       btn[i].classList.add("hide-div")
  //     }
  //   }
})




function returnOccurences() {
  // let typesArray = [];
  // for (let i = 0; i < results.length; i++) {
  //   typesArray.push(results[i].type)
  // }

  // const occurences = typesArray.reduce(function (acc, curr){
  //   return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  // }, {});


  // return occurences;

  let typesArray = [];

  let ind = searchIndex.search(getQueryVariable()).flatMap((hit) => {
    if (hit.ref == "undefined") return [];
    let pageMatch = pagesIndex.filter((page) => page.href === hit.ref)[0];
    pageMatch.score = hit.score;
    return [pageMatch];
  });
  for (let i = 0; i < ind.length; i++) {
    typesArray.push(ind[i].type)
  }

  const occurences = typesArray.reduce(function (acc, curr){
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {});
  let btn = document.getElementsByClassName("content-types");

    for (var i = 0; i < btn.length; i++) {
      
      if (btn[i].id in occurences) {
        btn[i].children[0].textContent = `(${occurences[btn[i].id]})`
        
        btn[i].classList.remove("hide-div")
      } else {
        
        btn[i].classList.add("hide-div")
      }
    }

    return occurences
}


const renderCheckBoxFilter = () => {
  let totalItems = ""
  
  let counter = 0;
  
  if (counter === colours.length || counter > colours.length) { counter = 0; }
  

  for (const [key, value] of Object.entries(returnOccurences())) {

    
    totalItems += `
    
    <button id=${key} class="content-types" onClick="checkboxClicked(this)" name=${key}>${capitalizeFirstLetter(key)}<span id="filter-value-id" style="background-color:${renderFilterValueColour(key)}; margin-left: 1rem;">(${value})</span> </button>

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
  console.log('items', items);
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
  let results = getSearchResults(url.searchParams.getAll('post_type'), query);

  return results.length
    ? results
    : query !== originalQuery
    ? getSearchResults(originalQuery)
    : [];
}


function getSearchResults(type, query) {
  let searchedResults;
  let filteredResults;
  searchedResults = searchIndex.search(query).flatMap((hit) => {
    if (hit.ref == "undefined") return [];
    let pageMatch = pagesIndex.filter((page) => page.href === hit.ref)[0];
    if (pageMatch) pageMatch.score = hit.score;

    return [pageMatch]
    
    
  })
  if (type.length === 0 || type === undefined) {
    filteredResults = searchedResults
  } else {
    filteredResults = searchedResults.filter(function(content){
      return type.indexOf(content.type) != -1;
    })
  }
  
  return filteredResults;

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
  post_type = url.searchParams.getAll('post_type')
  
  if (post_type.includes(val.name)) {
    post_type = url.searchParams.getAll('post_type').filter(type => type !== val.name)
    post_type.length > 0 ? deletePostType(post_type) : url.searchParams.delete('post_type');
    window.history.pushState({}, '', url); 
  } else {
    url.searchParams.append('post_type', val.name);
    window.history.pushState({}, '', url);
    
  }
  // renderSearchResult(getType())  
  results = searchSite(getQueryVariable())
  renderSearchResult(results)
  // renderSearchResult(searchSite(getQueryVariable()))
  // getType(url.searchParams.getAll('post_type'))
  // searchAndFilter(url.searchParams.getAll('post_type'), getQueryVariable())


}


function deletePostType(postType) {
  url.searchParams.delete('post_type');
  for (const type of postType) {
    url.searchParams.append('post_type', type);
  }
}





function getType(type) {
  // post_type = url.searchParams.getAll('post_type')

  
  // results = searchSite(getQueryVariable()).filter(function(content){
  //   return post_type.indexOf(content.type) != -1;
  // });
  results = searchSite(getQueryVariable()).filter(function(content){
    return type.indexOf(content.type) != -1;
  });
  
  
  // let searchInd = [];
  
// for (let filteredTypes in type) {
//   searchIndex.search(`type: ${type[filteredTypes]}`).flatMap((hit) => {
//     if (hit.ref == "undefined") return [];
//     let pageMatch = pagesIndex.filter((page) => page.href === hit.ref)[0];
//     if (pageMatch) pageMatch.score = hit.score;
//     searchInd.push(pageMatch);
//     return [pageMatch];
//   })
// }

// results = searchInd
// console.log('second res', results)

// console.log('searchInd', searchInd)

  renderSearchResult(type == 0 || type == undefined ? searchSite(getQueryVariable()) : results)

  // return post_type == 0 || post_type == undefined ? searchSite(getQueryVariable()) : results;

  // renderSearchResult(results);
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