const path = require("path");
const yaml = require("node-yaml");
const { saveImage } = require("./lib/saveImage");
const fileName = "../data/team.yml";
const d = yaml.readSync(fileName, "utf-8");
const ymlData = d;

const makeImage = (el, index, node) => {
    const prefixPath = path.join(__dirname, `../static`);
    const src = el['image-name'];
    const srcPath = `${prefixPath}/${src}`;
    ymlData[node][index]["image-name"] = src.replace(".png", ".jpg");
    saveImage(srcPath, `${prefixPath}/img/cds`, ".jpg", 500, 500)
}

const process = (el, index, node) => {
    makeImage(el, index, node)
}

// update key contacts
d.exec.forEach((el, index) => {
    process(el, index, "exec")
});

// update full team
d.team.forEach((el, index) => {
    process(el, index, "team")
});

yaml.writeSync(fileName, ymlData);