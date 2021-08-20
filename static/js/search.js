
// import {jsonResponse} from './init-search';
var current_page = 1;
var records_per_page = 6;
let pagesIndex, searchIndex;
const searchResults = document.getElementById("site-results");
const resultNumber = document.getElementById("results-number");
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
  var searchTerm = getQueryVariable("q")
  // let results = searchIndex.search(searchTerm);
  
  const results = searchSite(searchTerm)

  renderSearchResults(results)


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


function renderSearchResults(results) {
  searchResults.innerHTML = results.map((result) => {
    return `
    <li>
      <div class="rendered-list">
        <div><a href='${result.href}'>${result.title}</a></div>
        <div>${result.description}</div>
        <div>${result.type}</div> 
      </div>

    </li>`
    
  }).join("");
}


function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  console.log('query', query)
  var vars = query.split("&");
  console.log('vars', vars)
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