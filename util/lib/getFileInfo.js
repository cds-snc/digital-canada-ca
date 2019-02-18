const path = require("path");
// parse file details
const getFileInfo = fileName => {
    if (!fileName) return
    try {
        const name = path.parse(fileName).name; // hello
        const ext = path.parse(fileName).ext;

        return { name, ext };
    } catch (e) {
        console.log(`unable to get file info for ${fileName}`)
        console.log(e.message)
    }
};

module.exports = { getFileInfo }