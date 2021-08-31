
var current_page = 1;
var records_per_page = 6;
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
var blog = document.getElementById("1");

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
  searchTerm = getQueryVariable("q");

  results = searchSite(searchTerm);

  renderSearchResult(results);
  renderPagination(results);
  numberOfTimes(results);

  dropdownBtn.innerText = relevantBtn.innerText;

}

initSearchIndex();

function numberOfTimes(items) {
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

function renderSearchResult(items) {
  let page = current_page;
  page--;

  let start = rows * page;
  let end = start + rows;
  let paginatedItems = items.slice(start, end);
  let resultList = "";

  for (let i = 0; i < paginatedItems.length; i++) {
    resultList += `<li>
    <div class="rendered-list">
      <div><a href='${paginatedItems[i].href}'>${paginatedItems[i].title}</a></div>
      <div>${paginatedItems[i].description}</div>
      <div>${paginatedItems[i].type}</div> 
    </div>
  </li>`;
  }

  searchResults.innerHTML = resultList;
  resultNumber.innerHTML = `Showing ${results.length} results`;
}

function renderPagination(items) {
  let page_count = Math.ceil(items.length / rows);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = createPaginationButtons(i, items);
    pagination_element.appendChild(btn);
  }
}

function createPaginationButtons(page, items) {
  let button = document.createElement("button");

  button.innerText = page;

  if (current_page == page) button.classList.add("active");

  button.addEventListener("click", function () {
    current_page = page;
    renderSearchResult(items);

    let current_btn = document.querySelector(".pagenumbers button.active");
    current_btn.classList.remove("active");

    button.classList.add("active");
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
  const sorted = results.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
  return sorted;
}

function sortByHitScore() {
  const sortScore = results.sort(function (a, b) {
    return b.score - a.score;
  });
  return sortScore;
}

function dropdownClicked() {
  document.getElementById("myDropdown").classList.toggle("show");

  relevantBtn.addEventListener("click", function () {
    dropdownBtn.innerText = relevantBtn.innerText;
    // if (history.pushState) {
    //   history.pushState(null, null, "#relevant");
    // } else {
    //   location.hash = "#relevant";
    // }
    renderSearchResult(sortByHitScore());
  });

  recentBtn.addEventListener("click", function () {
    dropdownBtn.innerText = recentBtn.innerText;
    // if (history.pushState) {
    //   history.pushState(null, null, "#recent");
    // } else {
    //   location.hash = "#recent";
    // }
    renderSearchResult(sortedResult());
  });
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
  getType(typesArray);
}

function checkboxClicked(val) {
  if (val.checked) {
    typesArray.push(val.name)
    // getType(val.name);
    // console.log(val.name)
  } else {
    if (typesArray.indexOf(val.name) > -1) {
      typesArray.splice(typesArray.indexOf(val.name), 1)
    }
  }
  console.log(typesArray);

}

function getType(type) {


  var filtered = results.filter(function(content){
    return type.indexOf(content.type) != -1;
  });

  results = filtered;
  renderSearchResult(results);
  renderPagination(results);

  
}
