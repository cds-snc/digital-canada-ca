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

    searchIndex = lunr(function () {
      this.field("title");
      this.field("author");
      this.field("description");
      this.ref("href");
      pagesIndex.forEach((page) => this.add(page));
    });
  } catch (e) {
    console.log(e);
  }
}

function searchBoxFocused() {
  document.querySelector(".search-container").classList.add("focused");
  document
    .getElementById("search")
    .addEventListener("focusout", () => searchBoxFocusOut());
}

function searchBoxFocusOut() {
  document.querySelector(".search-container").classList.remove("focused");
}

initSearchIndex();

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("search-form") != null) {
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("focus", () => searchBoxFocused());
    searchInput.addEventListener("keydown", (event) => {
      if (event.keyCode == 13) handleSearchQuery(event);
    });
    document
      .querySelector(".search-error")
      .addEventListener("animationend", removeAnimation);
    document
      .querySelector(".fa-search")
      .addEventListener("click", (event) => handleSearchQuery(event));
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
  

  const searchResults = document.getElementById('results')
  const pTag = document.getElementById('test');

  let resultList = ''
  for (var result of results) {
    resultList += '<li><h2>' + result.title + '</h2>'
    resultList += '<p>' + result.author + '...</p></li>'
    // pTag.innerHTML = result.author
  }
//   results.map((hit) => {
//     pTag.innerHTML = hit.author;
//     resultList += '<li><h2>' + result.title + '</h2>'
//     resultList += '<p>' + result.author + '...</p></li>'
//   })

  searchResults.innerHTML = resultList;
  // var target = document.querySelector(".main-inner");

  // while (target.firstChild) {
  //   target.removeChild(target.firstChild);
  // }

  // var title = document.createElement("h1");
  // title.id = "search-results";
  // title.className = "list-title";

  // if (results.length == 0) title.textContent = `No results found for “${query}”`;
  // else if (results.length == 1)
  //   title.textContent = `Found one result for “${query}”`;
  // else title.textContent = `Found ${results.length} results for “${query}”`;
  // target.appendChild(title);
  // document.title = title.textContent;

  // var template = document.getElementById("search-result");

  // for (var result of results) {
  //   var element = template.content.cloneNode(true);
  //   element.querySelector(".summary-title").textContent = result.title;
  //   target.appendChild(element);
  //   console.log(result.title);
  // }



  if (!results.length) {
    displayErrorMessage("Your search returned no results");
    return;
  }
}

function displayErrorMessage(message) {
  document.querySelector(".search-error-message").innerHTML = message;
  document.querySelector(".search-container").classList.remove("focused");
  document.querySelector(".search-error").classList.remove("hide-element");
  document.querySelector(".search-error").classList.add("fade");
}

function removeAnimation() {
  this.classList.remove("fade");
  this.classList.add("hide-element");
  document.querySelector(".search-container").classList.add("focused");
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
