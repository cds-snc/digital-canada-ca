// window.addEventListener("DOMContentLoaded", function (event) {

// });

let pagesIndex, searchIndex;
const MAX_SUMMARY_LENGTH = 100;
const SENTENCE_BOUNDARY_REGEX = /\b\.\s/gm;
const WORD_REGEX = /\b(\w*)[\W|\s|\b]?/gm;
async function initSearchIndex() {
  document.getElementById('search-result').classList.add("hide-element");
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

  // console.log(results);
  // const lang = document.querySelector('html').getAttribute('lang');

  document.getElementById("blog-list").classList.add("hide-element");
  document.getElementById('search-result').classList.remove("hide-element")
  
  // var template = document.getElementById('blog-div');
  // var searchResults = document.getElementById('search-result');

  // searchResults.innerHTML = results.map((item) => {
  //   return `<li class="post" id="search-blog-list"><div class="row post-container"> <div class="text-container"> <div class="text"> <h2>${item.title} </h2></div></div></div> </li>`
  // })  



  // for (var result of results) {
  //   var element = template.content.cloneNode(true);
    
    
  //   element.getElementById('title-url').href = result.href
  //   element.getElementById('title-heading').textContent = result.title;
  //   element.getElementById('id-photo-container').innerHTML = `<div class="photo" role="img" aria-label='${result["image-alt"]["image-alt"]}' style="background-image: url(${result.thumb})"></div>`
  //   element.getElementById('date-container').innerHTML = formatDate(result.date, lang);
  //   element.getElementById('author-container').textContent = result.author;
  //   element.getElementById('summary-contaier').textContent = truncateString(result.description, 250);
  //   element.getElementById('read-more-link').href = result.href

  //   searchResults.appendChild(element)
    
    
  // }
  
  

  if (!results.length) {
    displayErrorMessage("Your search returned no results");
    return;
  }

  renderSearchResults(results);
}

function renderSearchResults(results) {
  
  showSearchResults(results);
  // clearSearchResults();
}

function showSearchResults(results) {
  var template = document.getElementById('blog-div');
  var searchResults = document.getElementById('search-result');
  const lang = document.querySelector('html').getAttribute('lang');
    searchResults.innerHTML = results.map((result) => {
      return `  
      <li class="post" id="search-blog-list">
      <div class="row post-container">
        <div class="photo-container" id="id-photo-container">
          <div class="photo" id="id-photo-container" aria-label='${result["image-alt"]}' style="background-image: url(${result.thumb})"></div>
        </div>
        <div class="text-container">
          <div class="text">
            <div class="title" id="title-div">
              <a href='${result.href}'>
                <h2 id="title-heading">${result.title}</h2>
              </a>
            </div>
            <div class="date" id="date-container">${formatDate(result.date, lang)}</div>
            <div class="author" id="author-container">${result.author}</div>
            <div class="summary" id="summary-contaier">${truncateString(result.description, 250)}</div>
            <div class="readmore">
              <a href="${result.href}" aria-label='${getTrans(lang)}'> ${getTrans(lang)}
                <i class='fas fa-arrow-circle-right'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>`
  }).join("");

  // for (var result of results) {
  //   var element = template.content.cloneNode(true);
    
    
  //   element.getElementById('title-url').href = result.href
  //   element.getElementById('title-heading').textContent = result.title;
  //   element.getElementById('id-photo-container').innerHTML = `<div class="photo" role="img" aria-label='${result["image-alt"]["image-alt"]}' style="background-image: url(${result.thumb})"></div>`
  //   element.getElementById('date-container').innerHTML = formatDate(result.date, lang);
  //   element.getElementById('author-container').textContent = result.author;
  //   element.getElementById('summary-contaier').textContent = truncateString(result.description, 250);
  //   element.getElementById('read-more-link').href = result.href

  //   searchResults.appendChild(element)
    
    
  // }


}

function getTrans(lang){
  if (lang === 'en') {
    return "Read Full Post"
  } else  {
    return "Lire le billet"
  }
}

function truncateString(str, num) {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}

function clearSearchResults() {
  const results = document.getElementById('search-result');
  while (results.firstChild) results.removeChild(results.firstChild);

}
function handleClearSearchButtonClicked() {
  hideSearchResults();
  clearSearchResults();
  document.getElementById("search").value = "";
}

function hideSearchResults() {
  document.getElementById("blog-list").classList.remove("hide-element");
  document.getElementById('search-result').classList.add("hide-element")
}



function formatDate(date, locale) {

  const dateFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }
  const theDate = new Date(date);
  

  const _formattedDate = theDate.toLocaleString(locale, dateFormatOptions);
  
  
  const _formattedDateLong = theDate.toLocaleString(locale, {...dateFormatOptions, month: 'long'});
  const parts = _formattedDate.split(' ');
  const year = parts[2];
  

  if (locale === 'en') {
    const shortMonth = parts[0].replace(/\W/g, '');
    const longMonth = _formattedDateLong.split(' ')[0].replace(/\W/g, '');
    const day = parts[1];
    if (longMonth === shortMonth) {
      return `${shortMonth}\u00a0${day}\u00a0${year}`;
    }
    return `${shortMonth}.\u00a0${day}\u00a0${year}`;
  } else if (locale === 'fr') {
    const shortMonth = parts[1].replace(/\W/g, '');
    const longMonth = _formattedDateLong.split(' ')[1].replace(/\W/g, '');
    const day = parts[0];
    if (longMonth === shortMonth) {
      return `${day}\u00a0${longMonth}\u00a0${year}`;
    }
    return `${day}\u00a0${longMonth}\u00a0${year}`;
  }
  return _formattedDate;

  
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
