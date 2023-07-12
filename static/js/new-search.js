let myPagesIndex;

async function initNewSearch() {
    try {
        const response = await fetch("/new-index.json");
        myPagesIndex = await response.json();
        console.log('mypagesindex', myPagesIndex)
    } catch (e) {
        console.log(e);
    }
    
}

initNewSearch();