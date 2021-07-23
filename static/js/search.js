let pagesIndex, searchIndex;
const lunr = require('lunr');
async function initSearchIndex() {
    try {
        const response = await fetch("/index.json");
        pagesIndex = await response.json();
        searchIndex = lunr(function () {
            
        })

    } catch (e) {

    }
}