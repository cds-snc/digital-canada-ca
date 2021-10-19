var current_page = 1;
let pagesIndex, searchIndex, results, filtered, post_type, searchedResults;

const searchResults = document.getElementById("site-results");
const resultNumber = document.getElementById("results-number");
const relevantBtn = document.getElementById("relevant");
const recentBtn = document.getElementById("recent");
const typeTotal = document.getElementById("typeTotal");
let rows = 5;
const inputVal = document.getElementById("q");
const loadMoreBtn = document.getElementById("load-more");
const url = new URL(window.location);
const colours = [
  "#FFCC33",
  "#066169",
  "#AB2328",
  "#004986",
  "#115740",
  "#E87722",
];
const body = document.querySelector("body");
const filterArrow = document.getElementById("filter-arrow");
const filterBox = document.getElementById("filter-box");
const resultsNumberDiv = document.getElementById("results-number-div");
let allResults;

/**
 * Initializes the search index
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
  results = removeNull(searchSite(getQueryVariable()));
  allResults = results;

  renderSearchResult(results);
  renderCheckBoxFilter();
}

function showMobileFilters() {
  filterArrow.classList.toggle("active");
  filterBox.classList.toggle("active");
  resultsNumberDiv.classList.toggle("active");
}

/**
 * Filters out null descriptions
 */
function removeNull(items) {
  let arr = [];
  for (var prop in items) {
    if (items[prop].description !== null) {
      arr.push(items[prop]);
    }
  }

  return arr;
}

function initSearchSite() {
  document.addEventListener("DOMContentLoaded", function () {
    initSearchIndex();
    let txt = document.getElementById("q");

    txt.addEventListener("input", keyUp);
  });
}

initSearchSite();

const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  modal_container.classList.add("show-modal-container");
  body.style.overflow = "hidden";

  url.searchParams.set("q", "");
  window.history.pushState({}, "", url);
  document.getElementById("js-mobileNav").classList.remove("active");
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show-modal-container");

  inputVal.value = "";
  rows = 5

  body.style.overflow = "auto";
  let keysForDel = [];
  url.searchParams.forEach((v, k) => {
    keysForDel.push(k);
  });
  keysForDel.forEach((k) => {
    url.searchParams.delete(k);
  });
  window.history.pushState({}, "", location.origin);
  results = searchSite(getQueryVariable());
  renderSearchResult(removeNull(results));
  renderCheckBoxFilter();
  
});
loadMoreBtn.addEventListener("click", () => {
  current_page++;
  rows += 5;
  renderSearchResult(removeNull(results));
});

function keyUp(ev) {
  url.searchParams.set("q", ev.target.value);
  window.history.pushState({}, "", url);

  results = searchSite(getQueryVariable());
  renderSearchResult(removeNull(results));

  renderCheckBoxFilter();
}

window.onpopstate = function () {
  inputVal.value = getQueryVariable();
  results = searchSite(getQueryVariable());

  renderSearchResult(removeNull(results));
  renderCheckBoxFilter();
};

/**
 * Renders the number of times a word appears in the search filter box
 * @param $items
 */

function returnOccurences() {
  let typesArray = [];

  let ind = searchIndex.search(getQueryVariable()).flatMap((hit) => {
    if (hit.ref == "undefined") return [];
    let pageMatch = pagesIndex.filter((page) => page.href === hit.ref)[0];
    pageMatch.score = hit.score;
    return [pageMatch];
  });
  ind = removeNull(ind);
  for (let i = 0; i < ind.length; i++) {
    typesArray.push(ind[i].type);
  }

  const occurences = typesArray.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});

  let btn = document.getElementsByClassName("content-types");

  for (var i = 0; i < btn.length; i++) {
    if (btn[i].id in occurences) {
      btn[i].children[0].textContent = `(${occurences[btn[i].id]})`;

      btn[i].classList.remove("hide-div");
    } else {
      btn[i].classList.add("hide-div");
    }
  }

  return occurences;
}

function buttonBorderColour() {
  let btns = document.getElementsByClassName("content-types");
  let allResultsBtn = document.getElementById("results");
  post_type = url.searchParams.getAll("post_type");

  for (const val of btns) {
    post_type.includes(val.name)
      ? (val.style.borderBottom = `3px solid ${renderFilterValueColour(val.name)}`)
      : (val.style.borderBottom = "none");
  }
  post_type.length > 0
    ? (allResultsBtn.style.borderBottom = "none")
    : (allResultsBtn.style.borderBottom = `3px solid ${renderFilterValueColour(allResultsBtn.name)}`);
}

const renderCheckBoxFilter = () => {
  let totalItems = "";

  let counter = 0;

  if (counter === colours.length || counter > colours.length) {
    counter = 0;
  }

  for (const [key, value] of Object.entries(returnOccurences())) {
    totalItems += `
    
    <button id=${key} class="content-types"  onClick="checkboxClicked(this)" name=${key}>${capitalizeFirstLetter(key)}
      <span style="background-color:${renderFilterValueColour(key)}; margin-left: 1.5rem;">(${value})</span>
    </button>

    `;
    counter++;
    renderFilterValueColour(key);
  }

  typeTotal.innerHTML =
    `<button id="results" onClick="renderAllResults()" class="content-types" name="results">All Results<span style="background-color: #A3442F; margin-left: 1.5rem;">(${
      removeNull(searchedResults).length
    })</span></button>` + totalItems;

  buttonBorderColour();
};

function renderAllResults() {
  url.searchParams.delete("post_type");
  window.history.pushState({}, "", url);
  renderSearchResult(removeNull(searchedResults));
  renderCheckBoxFilter();
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Renders the search results
 * @param $items
 */
function renderSearchResult(items) {

  let start = 0;
  let end = start + rows;

  let paginatedItems = items.slice(start, end);
  paginatedItems.length < 5
    ? loadMoreBtn.classList.add("hide-btn")
    : loadMoreBtn.classList.remove("hide-btn");

  let resultList = "";

  for (let i = 0; i < paginatedItems.length; i++) {
    resultList += `<li>
    <div class="rendered-list">
      <div>
        <a href='${paginatedItems[i].href}' target="_blank" class="render-list-title" aria-label='${paginatedItems[i].title}'>
          <h3>${paginatedItems[i].title}<h3>
        </a>
      </div>
      <div style="padding: 0 1rem 0 1rem; background-color: ${renderFilterValueColour(paginatedItems[i].type)}">
        ${paginatedItems[i].type.toUpperCase()}
      </div> 
      <div>${paginatedItems[i].description}</div>
      
    </div>
  </li>`;
  }

  searchResults.innerHTML = resultList;
  resultNumber.innerHTML = ` ${items.length} `;
}

/**
 * Gets the query that was entered by the user from url
 * @param $variable
 * @returns {decodeURIComponent} removes any special character and just returns the words
 */

function getQueryVariable() {
  if (location.search.slice(1).split("&")[0].split("=")[1] == undefined) {
    return "";
  } else {
    return decodeURIComponent(
      location.search.slice(1).split("&")[0].split("=")[1].replace(/\+/g, "%20")
    );
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
  let results = getSearchResults(url.searchParams.getAll("post_type"), query);

  return results.length
    ? results
    : query !== originalQuery
    ? getSearchResults(originalQuery)
    : [];
}

function getSearchResults(type, query) {
  let filteredResults;
  searchedResults = searchIndex.search(query).flatMap((hit) => {
    if (hit.ref == "undefined") return [];
    let pageMatch = pagesIndex.filter((page) => page.href === hit.ref)[0];
    if (pageMatch) pageMatch.score = hit.score;

    return [pageMatch];
  });

  if (type.length === 0 || type === undefined) {
    filteredResults = searchedResults;
  } else {
    filteredResults = searchedResults.filter(function (content) {
      return type.indexOf(content.type) != -1;
    });
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

function checkboxClicked(val) {
  post_type = url.searchParams.getAll("post_type");

  if (post_type.includes(val.name)) {
    post_type = url.searchParams
      .getAll("post_type")
      .filter((type) => type !== val.name);

    post_type.length > 0
      ? deletePostType(post_type)
      : url.searchParams.delete("post_type");

    window.history.pushState({}, "", url);
    val.style.borderBottom = "none";
  } else {
    url.searchParams.append("post_type", val.name);
    window.history.pushState({}, "", url);
    val.style.borderBottom = `3px solid ${renderFilterValueColour(val.name)}`;
  }
  results = searchSite(getQueryVariable());
  renderSearchResult(removeNull(results));
  renderCheckBoxFilter();
}

function deletePostType(postType) {
  url.searchParams.delete("post_type");
  for (const type of postType) {
    url.searchParams.append("post_type", type);
  }
}

window.location.href.indexOf("?q=") != -1
  ? document
      .getElementById("modal_container")
      .classList.add("show-modal-container")
  : document
      .getElementById("modal_container")
      .classList.remove("show-modal-container");

const colourFilter = {
  section: "#8A6A29",
  blog: "#066169",
  page: "#AB2328",
  a11y: "#004986",
  engagement: "#115740",
  roadmap: "#AE5817",
  results: "#A3442F",
};
function renderFilterValueColour(param) {
  for (const [key, value] of Object.entries(colourFilter)) {
    if (param == key) {
      return value;
    }
  }
}
