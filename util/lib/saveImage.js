const fs = require("fs");
const sharp = require("sharp");
const { getFileInfo } = require("./getFileInfo");

// save and resize image + update file ext
const saveImage = (filePath, targetPath, useExt = ".jpg", width = 1200, height = 1200) => {
    const imageInfo = getFileInfo(filePath);
  
    if (!fs.existsSync(targetPath)) {
      fs.mkdirSync(targetPath, { recursive: true });
    }
  
    if (!imageInfo.ext || imageInfo.ext === ".svg") {
      return
    }
  
    const imageName = `${targetPath}/${imageInfo.name}${useExt}`
  
    sharp(filePath)
      .resize({
        width,
        height,
        fit: "cover",
        position: "centre",
        withoutEnlargement: true
  
      })
      .toFormat('jpeg')
      .toBuffer(function (err, buffer) {
        fs.writeFile(imageName, buffer, function (err) {
          if (err) {
            console.log(err);
            return;
          }
        });
      });
  };
  
  // read a directory of files + handle result via a callback
  function readFileDir(dirname, cb) {
    fs.readdir(dirname, (err, filenames) => {
      if (err) {
        console.log("error reading files");
        return;
      }
      if (filenames.length > 0) {
  
        filenames.forEach((file) => {
          cb(dirname, file)
        })
  
      } else {
        console.log("done reading files")
      }
    });
  }


module.exports = { saveImage }