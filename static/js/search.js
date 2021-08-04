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
      this.field("date");
      this.field("image");
      this.field("image-alt");
      this.field("translationKey");
      this.field("thumb");
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
  // console.log(results)

  document.getElementById("blog-list").classList.add("hide-element");

  var searchResults = document.getElementById("search-result");
  var list = document.getElementById("search-blog-list");
  var heading = document.getElementById("title-heading");
  var headingDiv = document.getElementById("title-div");

 

  // searchResults.innerHTML = results.map((item) => {
  //   return "<li class='post'>" + "<div class='row post-container'>" + "<div class='text-container'>"  + "<div class='text'>" + "<div class='title'>" +  "<h2>" + item.title + "</h2>" + "</div>" + "</div>" + "</div>" + "</div>" + "</li>"
  // }).join("")
  var target = document.getElementById('main-inner');
  var template = document.getElementById('blog-div');
  const imgURL = 'https://de2an9clyit2x.cloudfront.net/small_katka_pavlickova_131100_unsplash_min_3c6c37adef.jpg';
  const img = "url(" + imgURL + ")"
  for (var result of results) {
    console.log(result["image-alt"]["image-alt"]);
    var element = template.content.cloneNode(true);
    element.getElementById('title-url').href = result.href
    element.getElementById('title-heading').textContent = result.title;
    element.getElementById('id-photo-container').innerHTML = `<div class="photo" role="img" aria-label='${result["image-alt"]["image-alt"]}' style="background-image: url(${result.thumb})"></div>`

    

    target.appendChild(element)
  }

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
