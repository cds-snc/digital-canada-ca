const path = require("path");
const { timestamp } = require('./lib/timestamp');
const yaml = require("node-yaml");
const { saveImage } = require("./lib/saveImage");
const fileName = "../data/team.yml";
const currentYml = yaml.readSync(fileName, "utf-8");
const ymlData = currentYml;

let processed = 0;

const makeImage = (el, index, node) => {
    if (el.processed) return;
    const prefixPath = path.join(__dirname, `../static`);
    const src = el['image-name'];
    const srcPath = `${prefixPath}/${src}`;
    ymlData[node][index]["image-name"] = src.replace(".png", ".jpg");
    ymlData[node][index]["processed"] = timestamp();
    saveImage(srcPath, `${prefixPath}/img/cds`, ".jpg", 500, 500);
    processed++
}

const process = (el, index, node) => {
    makeImage(el, index, node)
}

// update key contacts
currentYml.exec.forEach((el, index) => {
    process(el, index, "exec")
});

// update full team
currentYml.team.forEach((el, index) => {
    process(el, index, "team")
});

if (processed >= 1) {
    console.log("update yml document");
    yaml.writeSync(fileName, ymlData);
} else {
    console.log("no team images to update");
}