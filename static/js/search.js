
let pagesIndex, searchIndex;
const searchResults = document.getElementById("site-results");
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
  let results = searchIndex.search(searchTerm);
  console.log('results', results)
  searchResults.innerHTML = results.map((result) => {
    return `
    <li>
      <p><a href='${result.href}'>${result.title}</a></p>
      <p>${result.description}</p>
    </li>`
    
  }).join("");

  
}





initSearchIndex();

// console.log('search', searchIndex)
// console.log('pages', pagesIndex)

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

// function searchSite(query) {

//   const originalQuery = query;
//   query = getLunrSearchQuery(query);
//   let results = getSearchResults(query);

//   return results.length
//     ? results
//     : query !== originalQuery
//     ? getSearchResults(originalQuery)
//     : [];
// }

// function getSearchResults(indexSearch, query) {
//   return indexSearch.search(query).flatMap((hit) => {
//     if (hit.ref == "undefined") return [];
//     let pageMatch = pagesIndex.filter((page) => page.href === hit.ref)[0];
//     pageMatch.score = hit.score;
//     return [pageMatch];
//   });
// }

// function getLunrSearchQuery(query) {
//   const searchTerms = query.split(" ");
//   if (searchTerms.length === 1) {
//     return query;
//   }
//   query = "";
//   for (const term of searchTerms) {
//     query += `+${term} `;
//   }
//   return query.trim();
// }

// var resultPages = results.map(function (match) {
//   return pages[match.ref];
// });

// console.log(searchIndex);
// console.log('results', results);


// function handleSearchQuery(event) {
//   event.preventDefault();
//   const query = document.getElementById("search").value.trim().toLowerCase();
  
//   
//   console.log("query", getQueryVariable("q"));
//   if (!query) {
//     displayErrorMessage("Please enter a search term");
//     return;
//   }
//   const results = searchSite(query);

  // searchResults.innerHTML = results.map((result) => {
  //   return `
  //   <li>
  //     <p><a href='${result.href}'>${result.title}</a></p>
  //     <p>${result.description}</p>
  //   </li>`
    
  // }).join("");

  
//   // window.location.href = "/search/"

//   console.log('res', results);




  
  
  

//   if (!results.length) {
//     displayErrorMessage("Your search returned no results");
//     return;
//   }
// }

