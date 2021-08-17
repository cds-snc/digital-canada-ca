// window.addEventListener("DOMContentLoaded", function (event) {

// });

let pagesIndex, searchIndex;
const MAX_SUMMARY_LENGTH = 100;
const SENTENCE_BOUNDARY_REGEX = /\b\.\s/gm;
const WORD_REGEX = /\b(\w*)[\W|\s|\b]?/gm;
async function initSearchIndex() {
  
  try {
    const response = await fetch("/index.json");

    pagesIndex = await response.json();

    // console.log('response', pagesIndex);

    searchIndex = lunr(function () {
      this.field("title");
      this.field("description");
      this.ref("href");
      pagesIndex.forEach((page) => this.add(page));
    });
    
  } catch (e) {
    console.log(e);
  }
}


initSearchIndex();

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("search-form") != null) {
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("keydown", (event) => {
      if (event.keyCode == 13) handleSearchQuery(event);
    });
    document
      .querySelector(".fa-search")
      .addEventListener("click", (event) => handleSearchQuery(event));
    document
      .querySelectorAll(".clear-search-results")
      .forEach((button) =>
        button.addEventListener("click", () => handleClearSearchButtonClicked())
      )
  }
});

function handleSearchQuery(event) {
  event.preventDefault();
  const query = document.getElementById("search").value.trim().toLowerCase();
  
  if (!query) {
    displayErrorMessage("Please enter a search term");
    return;
  }
  const results = searchSite(query);
  results.sort(function(a,b){
    return new Date(b.date) - new Date(a.date);
  } )


  
  
  

  if (!results.length) {
    displayErrorMessage("Your search returned no results");
    return;
  }
}



function clearSearchResults() {
  const results = document.getElementById('search-result');
  while (results.firstChild) results.removeChild(results.firstChild);

}
function handleClearSearchButtonClicked() {
  clearSearchResults();
  document.getElementById("search").value = "";
}





function displayErrorMessage(message) {
  document.querySelector(".search-error-message").innerHTML = message;
  document.querySelector(".search-container").classList.remove("focused");
  document.querySelector(".search-error").classList.remove("hide-element");
  document.querySelector(".search-error").classList.add("fade");
}



function searchSite(query) {
  
  const originalQuery = query;
  query = getLunrSearchQuery(query);
  let results = getSearchResults(query);
  console.log('results', results);

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
