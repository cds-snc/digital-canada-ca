let myPagesIndex, results;
var current_page = 1;
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
let miniSearch = new MiniSearch({idField: 'index', fields: ['title', 'description']})




async function initNewSearch() {
    
    try {
        const response = await fetch("/index.json");
        myPagesIndex = await response.json();
        
        // console.log('mypagesindex', myPagesIndex)
        replaceValue("type", "engagement", "report");
        replaceValue("type", "roadmap", "report");
        replaceValue("type", "section", "other");
        replaceValue("type", "product-suite", "products")
        
        
    } catch (e) {
        // console.log(e);
    }
    // console.log('mypagesindex', myPagesIndex)
    // const blogsById = myPagesIndex.reduce((byId, post) => {
    //     console.log("byId",byId)
    //     byId[post.id] = post
    //     return byId
    // })
    // console.log('blogsById', blogsById)
    renderSearchResults(myPagesIndex)
    miniSearch.addAll(myPagesIndex)
    renderFilterButtons()

    
    
    
    // console.log('hello')
    
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
            products: "Products",
            guides: "Guides"
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
            products: "Produits",
            guides: "Guides"
          },
        },
      },
    });
  }

function initSearchSite() {
    document.addEventListener("DOMContentLoaded", function(){
        initNewSearch();
        initTranslations()
        console.log('trans is:', i18next.t('accessibility'))


    })
}

initSearchSite();

open.addEventListener("click", () => {
    modal_container.classList.add("show-modal-container");
    body.style.overflow = "hidden";

//   url.searchParams.set("q", "");
//   window.history.pushState({}, "", url);
//   document.getElementById("js-mobileNav").classList.remove("active");
//   inputVal.focus();
})



function renderSearchResults(items) {
    let start = 0;
    let end = start + rows;
    let paginatedItems = items.slice(start, end);
    items.length <= 5 || paginatedItems.length === items.length ? (loadMoreBtn.disabled = true) : (loadMoreBtn.disabled = false);
    // console.log(paginatedItems)
    let resultList = "";

    for (let i = 0; i <paginatedItems.length; i++) {
        resultList += `<li>
            <div class="rendered-list">
                <div style="margin: 1rem 0 1rem 0">
                    <a href='${paginatedItems[i].href}' target="_blank" class="render-list-title" aria-label='${paginatedItems[i].title}'>
                        ${paginatedItems[i].title}
                    </a>    
                </div>
                <div>${paginatedItems[i].description}</div>
            </div>
        </li>`;
    }
    searchResults.innerHTML = resultList;
    resultNumber.innerHTML = `${items.length}`
}

close.addEventListener("click", () => {
    modal_container.classList.remove("show-modal-container");
    inputVal.value = ""
    // getSearchResult("")
    rows = 5

    body.style.overflow = "auto"
    // let keysForDel = [];
    // url.searchParams.forEach((v, k) => {
    //     keysForDel.push(k);
    // });
    // keysForDel.forEach((k) => {
    //     url.searchParams.delete(k);
    // });
    // window.history.pushState({}, "", location.origin + location.pathname);
    // searchedResults = results;
    // results = searchSite(getQueryVariable());
    renderSearchResults(myPagesIndex);
    // renderFilterButtons();
})

loadMoreBtn.addEventListener("click", () => {
    current_page++;
    rows += 5;
})


inputVal.addEventListener("input", updateValue);

function updateValue(e) {
    // console.log(e.target.value);
    let val = e.target.value
    renderSearchResults(getSearchResult(val))
    
    // if (val.length > 1){
    //     getSearchResult(val)
    // } else {
    //     renderSearchResults(myPagesIndex)
    // }
    
}

function getSearchResult(query) {
    console.log('input val is', inputVal.value)
    if (query.length > 1) {
        let autoSuggest = miniSearch.autoSuggest(query, {fuzzy: 0.1, boost:{title: 5}}).map(function (result){
            return result
        })
        let suggestedResults = autoSuggest.map(function(res){
            return miniSearch.search(res.suggestion).map(({id}) => myPagesIndex[id])[0]
        })
        console.log(suggestedResults)
        // renderSearchResults(suggestedResults)
        return suggestedResults
    } else {
        // renderSearchResults(myPagesIndex)
        return myPagesIndex
    }

    
}

function returnOccurences() {
    let ind = getSearchResult(inputVal.value)
    ind = removeNull(ind)
    console.log(ind)
    const occurences = ind.map((x) => x.type).reduce(function (acc, curr){
        return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {})

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

const renderFilterButtons = () => {
    let totalItems = "";
    for (const [key, value] of Object.entries(returnOccurences())) {
        console.log(key, value)
        totalItems += `
        
        <button id=${key} class="content-types" onClick="checkboxClicked(this)" name=${key}>${i18next.t(key)}
            <span class="filter-number-${key}" style="background-colour:${renderFilterValueColour(key)}; margin-left: 1.5rem; padding: 0 0.2rem 0 0.2rem;">(${value})</span>
        </button>
        `;

        renderFilterValueColour(key);
    }
    // typeTotal.innerHTML = totalItems

    typeTotal.innerHTML = 
    `<button id="results" onClick="renderAllResults()" class="content-types" name="results">${i18next.t("all_results")}
    <span style="background-colour: #F5CC33; margin-left: 1.5rem; color: black; padding: 0 0.2rem 0 0.2rem;">${removeNull(myPagesIndex).length}</span></button>
    ` + totalItems;

    // renderButtonBorderColour();
}

function renderButtonBorderColour() {
    let btns = document.getElementsByClassName("content-types");
    let allResultsBtn = document.getElementById("results");
}

function renderAllResults() {
    renderSearchResults(myPagesIndex)
    renderFilterButtons();
}

const colourFilter = {
    other: "#066169",
    blog: "#e788aa",
    page: "#AB2328",
    accessibility: "#004986",
    report: "#AE5817",
    results: "#F5CC33",
    products: "#6b3c19",
    guides: "#6b3c19"
    // job_post: "#6b3c19",

  };
function renderFilterValueColour(param) {
    for (const [key, value] of Object.entries(colourFilter)) {
      if (param == key) {
        return value;
      }
    }
}

function replaceValue(field, oldValue, newValue) {
    for (var k = 0; k < myPagesIndex.length; ++k) {
        if (oldValue == myPagesIndex[k][field]){
            myPagesIndex[k][field] = newValue
        }
    }
    return myPagesIndex
}

function removeNull(items) {
    let arr = [];
    for (var prop in items) {
        if (
            items[prop].description !== null && items[prop].archived !== true
        ) {
            arr.push(items[prop])
        }
    }
    return arr;
}

function checkboxClicked(val) {
    
}