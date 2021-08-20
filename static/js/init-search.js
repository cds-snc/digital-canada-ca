let pagesIndex;

const fetchIndex = async () => {
    const response = await fetch("/index.json");
    return response;
}

const result = async () => {
    const result = await fetchIndex();
    return result.json()
}

result().then((jsonResponse) => pagesIndex = jsonResponse)
console.log("page", pagesIndex);
// const jsonResponse = result();
// export {jsonResponse}

// (async () => {
//     const jsonResponse = await result();
//     export { jsonResponse }
    
    
// })()
