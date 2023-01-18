var current_page = 1;
let pagesIndex, searchIndex, results, filtered, post_type, searchedResults;

const searchResults = document.getElementById("site-results");
const resultNumber = document.getElementById("results-number");
const typeTotal = document.getElementById("typeTotal");
let rows = 5;
const inputVal = document.getElementById("q");
const loadMoreBtn = document.getElementById("load-more");
const url = new URL(window.location);
const body = document.querySelector("body");
const filterArrow = document.getElementById("filter-arrow");
const filterBox = document.getElementById("filter-box");
const resultsNumberDiv = document.getElementById("results-number-div");
const focusableElements = "button:not([disabled]), [href], input, text, p, li";
const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");
const innerModal = document.getElementById("inner-modal");
const firstFocusableElement = innerModal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal

let lastFocusableElement;

/**
 * Initializes the search index
 */
async function initSearchIndex() {
  lunr.tokenizer.separator = /\s+/
  try {
    const response = await fetch("/index.json");

    pagesIndex = await response.json();

    replaceValue("type", "engagement", "report");
    replaceValue("type", "roadmap", "report");
    replaceValue("type", "section", "other");

    searchIndex = lunr(function () {
      this.pipeline.remove(lunr.stemmer);
      this.searchPipeline.remove(lunr.stemmer);
      this.field("title");
      this.field("description");
      this.field("date");
      this.field("type");
      this.field("archived");
      this.field("content");
      this.field("translationKey");
      this.ref("href");
      pagesIndex.forEach((page) => {
        this.add(page)
      });
    });
  } catch (e) {
    console.log(e);
  }
  if (!inputVal.value) inputVal.value = getQueryVariable();

  results = searchSite(getQueryVariable());
  keepFocus();

  renderSearchResult(results);
  renderFilterButtons();
}


function showMobileFilters() {
  filterArrow.classList.toggle("active");
  filterBox.classList.toggle("active");
  resultsNumberDiv.classList.toggle("active");
}

/**
 * Trapping focus for the modal when open
 */

function keepFocus() {
  document.addEventListener("keydown", function (e) {
    let isTabPressed = e.key === "Tab" || e.keyCode === 9;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        e.preventDefault();
      }
    } else {
      // if tab key is pressed

      //if the load more button is pressed and new results are generated, the focus will be on the first new result
      loadMoreBtn.addEventListener("click", () => {
        searchResults.childNodes[rows - 5].getElementsByTagName("a")[0].focus();
        lastFocusableElement = loadMoreBtn;
      });

      // if there are search results but the button is disabled,
      loadMoreBtn.disabled == true
        ? (lastFocusableElement =
            searchResults.lastElementChild.getElementsByTagName("a")[0])
        : (lastFocusableElement = loadMoreBtn);
      //if there are no results at all
      if (
        filterBox.lastElementChild.getElementsByTagName("button").length <= 1
      ) {
        lastFocusableElement =
          filterBox.lastElementChild.getElementsByTagName("button")[0];
      }
      //if there are no results for that specific tab but there are for others
      else if (
        filterBox.lastElementChild.getElementsByTagName("button").length > 1 &&
        searchResults.childNodes.length === 0
      ) {
        lastFocusableElement =
          filterBox.lastElementChild.getElementsByTagName("button")[
            filterBox.lastElementChild.getElementsByTagName("button").length - 1
          ];
      }
      if (document.activeElement === lastFocusableElement) {
        // add focus for the first focusable element
        firstFocusableElement.focus();
        e.preventDefault();
      }
    }
  });

  firstFocusableElement.focus();
}

/**
 * Filters out null descriptions
 */
function removeNull(items) {
  let arr = [];
  for (var prop in items) {
    if (
      items[prop].description !== null &&
      items[prop].archived !== true
    ) {
      arr.push(items[prop]);
    }
  }

  return arr;
}
/**
 * Suggestions from outreach team to change some of the "type" names
 */
function replaceValue(field, oldValue, newValue) {
  for (var k = 0; k < pagesIndex.length; ++k) {
    if (oldValue == pagesIndex[k][field]) {
      pagesIndex[k][field] = newValue;
    }
  }
  return pagesIndex;
}

function initSearchSite() {
  document.addEventListener("DOMContentLoaded", function () {
    initSearchIndex();
    initTranslations();
    let txt = document.getElementById("q");

    txt.addEventListener("input", keyUp);
  });
}

function initTranslations() {
  i18next.init({
    lng: document.querySelector("html").lang,
    debug: false,
    resources: {
      en: {
        translation: {
          accessibility: "Accessibility",
          all_results: "All Results",
          blog: "Blog",
          other: "Other",
          report: "Report",
          job_post: "Job Posting",
        },
      },
      fr: {
        translation: {
          accessibility: "Accessibilité",
          all_results: "Tous les résultats",
          blog: "Blogue",
          other: "Autre",
          report: "Rapport",
          job_post: "Offre d'emploi",
        },
      },
    },
  });
}

initSearchSite();

/**
 * Event listeners to open and close the search modal
 */

open.addEventListener("click", () => {
  modal_container.classList.add("show-modal-container");
  body.style.overflow = "hidden";

  url.searchParams.set("q", "");
  window.history.pushState({}, "", url);
  document.getElementById("js-mobileNav").classList.remove("active");
  inputVal.focus();
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show-modal-container");

  inputVal.value = "";
  rows = 5;

  body.style.overflow = "auto";
  let keysForDel = [];
  url.searchParams.forEach((v, k) => {
    keysForDel.push(k);
  });
  keysForDel.forEach((k) => {
    url.searchParams.delete(k);
  });
  window.history.pushState({}, "", location.origin + location.pathname);
  searchedResults = results;
  results = searchSite(getQueryVariable());
  renderSearchResult(results);
  renderFilterButtons();
});
loadMoreBtn.addEventListener("click", () => {
  current_page++;
  rows += 5;
  renderSearchResult(searchSite(getQueryVariable()));
});

function keyUp(ev) {
  url.searchParams.set("q", ev.target.value);
  window.history.pushState({}, "", url);

  renderSearchResult(searchSite(getQueryVariable()));
  renderFilterButtons();
}

/**
 * Returns the number of results by filter type if the user searches, by default shows all results by type.

 */

function returnOccurences() {
  let ind = queriedSearch(getQueryVariable());
  ind = removeNull(ind);

  const occurences = ind
    .map((x) => x.type)
    .reduce(function (acc, curr) {
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

/**
 * Renders bottom border colour of a selected filter
 *
 */
function renderButtonBorderColour() {
  let btns = document.getElementsByClassName("content-types");
  let allResultsBtn = document.getElementById("results");
  post_type = url.searchParams.getAll("post_type");

  for (const val of btns) {
    post_type.includes(val.name)
      ? (val.style.borderBottom = `3px solid ${renderFilterValueColour(
          val.name
        )}`)
      : (val.style.borderBottom = "none");
  }
  post_type.length > 0
    ? (allResultsBtn.style.borderBottom = "none")
    : (allResultsBtn.style.borderBottom = `3px solid ${renderFilterValueColour(
        allResultsBtn.name
      )}`);
}

/**
 * Renders the filter buttons
 */
const renderFilterButtons = () => {
  let totalItems = "";

  for (const [key, value] of Object.entries(returnOccurences())) {
    totalItems += `
    
    <button id=${key} class="content-types" onClick="checkboxClicked(this)" name=${key}>${i18next.t(
      key
    )}
      <span class="filter-number-${key}" style="background-color:${renderFilterValueColour(
      key
    )}; margin-left: 1.5rem; padding: 0 0.2rem 0 0.2rem;">(${value})</span>
    </button>

    `;
    renderFilterValueColour(key);
  }

  typeTotal.innerHTML =
    `<button id="results" onClick="renderAllResults()" class="content-types" name="results">${i18next.t(
      "all_results"
    )}<span style="background-color: #F5CC33; margin-left: 1.5rem; color: black; padding: 0 0.2rem 0 0.2rem;">(${
      removeNull(searchedResults).length
    })</span></button>` + totalItems;

  renderButtonBorderColour();
};

/**
 * Renders all results after user presses all results button
 */
function renderAllResults() {
  url.searchParams.delete("post_type");
  window.history.pushState({}, "", url);
  renderSearchResult(removeNull(searchedResults));
  renderFilterButtons();
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

  items.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  let paginatedItems = items.slice(start, end);
  items.length <= 5 || paginatedItems.length === items.length
    ? (loadMoreBtn.disabled = true)
    : (loadMoreBtn.disabled = false);

  let resultList = "";

  for (let i = 0; i < paginatedItems.length; i++) {
    resultList += `<li>
    <div class="rendered-list">
      <div style="margin: 1rem 0 1rem 0">
        <a href='${paginatedItems[i].href}' target="_blank" class="render-list-title" aria-label='${paginatedItems[i].title}'>
          ${paginatedItems[i].title}
        </a>
      </div>
      <div class="filter-number-${
        paginatedItems[i].type
      }" style="display: flex; align-items: stretch; line-height: 1.3em; padding: 0 0.5rem 0 0.5rem; background-color: ${renderFilterValueColour(
      paginatedItems[i].type
    )}; font-size: 2rem;">
        ${i18next.t(paginatedItems[i].type).toUpperCase()}
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
 * @returns {decodeURIComponent} removes any special character and just returns the words
 */

function getQueryVariable() {
  if (
    location.search.slice(1).split("&")[0].split("=")[1] == undefined ||
    location.search.slice(1).split("&")[0].split("=")[1] == ""
  ) {
    return "";
  } else {
    return decodeURIComponent(
      location.search
        .slice(1)
        .split("&")[0]
        .split("=")[1]
        .replace(/\+/g, "%20")
        .toLowerCase()
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
  let results = getSearchResults(url.searchParams.getAll("post_type"), query);

  return results.length
    ? results
    : query !== originalQuery
    ? getSearchResults(originalQuery)
    : [];
}

function queriedSearch(query_string) {
  return searchIndex
    .query(function (q) {
      // look for an exact match and apply a large positive boost
      q.term(lunr.tokenizer(query_string), { usePipeline: false, boost: 100 });

      // look for terms that match the beginning of this queryTerm and apply a medium boost
      q.term(query_string + "*", { usePipeline: false, boost: 10 });

      // look for terms that match with an edit distance of 1 and apply a small boost
      q.term(query_string, { usePipeline: false, editDistance: 1, boost: 1 });
    })
    .map(function (result) {
      return pagesIndex.filter(function (page) {
        return page.href === result.ref;
      })[0];
    });
}

/**
 * Takes the query and filter type and returns the search results
 * @param $variable
 * @returns {results}
 */
function getSearchResults(type, query_string) {
  let filteredResults;
  searchedResults = queriedSearch(query_string);

  if (type.length === 0 || type === undefined) {
    filteredResults = searchedResults;
  } else {
    filteredResults = searchedResults.filter(function (content) {
      return type.indexOf(content.type) != -1;
    });
  }

  return removeNull(filteredResults);
}

/**
 * Renders the results based on which filter was selected
 * @param $val
 */
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
  renderSearchResult(searchSite(getQueryVariable()));
  renderFilterButtons();
}

function deletePostType(postType) {
  url.searchParams.delete("post_type");
  for (const type of postType) {
    url.searchParams.append("post_type", type);
  }
}

/**
 * Presents modal if url has query search parameter
 */
if (window.location.href.indexOf("?q=") != -1) {
  document
    .getElementById("modal_container")
    .classList.add("show-modal-container");
  body.style.overflow = "hidden";
}

const colourFilter = {
  other: "#066169",
  blog: "#e788aa",
  page: "#AB2328",
  accessibility: "#004986",
  report: "#AE5817",
  results: "#F5CC33",
  job_post: "#6b3c19",
};
function renderFilterValueColour(param) {
  for (const [key, value] of Object.entries(colourFilter)) {
    if (param == key) {
      return value;
    }
  }
}
