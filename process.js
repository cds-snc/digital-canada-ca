const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const getFileInfo = file => {
  const name = path.parse(file).name; // hello
  const ext = path.parse(file).ext;

  return { name, ext };
};

const saveFile = (dirname, filename) => {

  const filePath = `${dirname}/${filename}`;
  const targetPath = `${dirname}`
  const fileInfo = getFileInfo(filePath);

  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath);
  }

  if (!fileInfo.ext || fileInfo.ext === ".svg") {
    return
  }

  //const name = filename.slice(0, -1).join(".");
  sharp(filePath)
    .resize({
      width: 800,
      height: 800,
      fit: "inside",
      position: "entropy",
      withoutEnlargement: true
    })
    .toFormat('jpeg')
    .toBuffer(function(err, buffer) {
      fs.writeFile(`${targetPath}/${fileInfo.name}.jpg`, buffer, function(err) {
        if (err) {
          console.log(err);
          return;
        }
      });
    });
};

function moveFiles(dirname, target) {
  fs.readdir(dirname, function (err, filenames) {
    if (err) {
      console.log("Error reading files");
      return;
    }
    if (filenames.length > 0) {

      filenames.forEach((file) => {
        console.log(file)
        saveFile(dirname, file)
      })

    } else {
      process.exit();
    }
  });
}

moveFiles("static/img/cds/");
