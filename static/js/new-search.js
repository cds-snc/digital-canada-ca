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
    
    
    // console.log('hello')
    
}

function initSearchSite() {
    document.addEventListener("DOMContentLoaded", function(){
        initNewSearch();

    })
}

initNewSearch();

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
    console.log(val)
    if (val.length > 1){
        getSearchResult(val)
    } else {
        renderSearchResults(myPagesIndex)
    }
    
}

function getSearchResult(query) {
    let autoSuggest = miniSearch.autoSuggest(query, {fuzzy: 0.1, boost:{title: 5}}).map(function (result){
        return result
    })
    let suggestedResults = autoSuggest.map(function(res){
        return miniSearch.search(res.suggestion).map(({id}) => myPagesIndex[id])[0]
    })
    console.log(suggestedResults.length)
    renderSearchResults(suggestedResults)
    
}