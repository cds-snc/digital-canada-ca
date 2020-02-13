const path = require("path");
const fs = require("fs");
const fmEditor = require("front-matter-editor");
const { getFileInfo } = require("./lib/getFileInfo");
const { timestamp } = require("./lib/timestamp");
const { saveImage } = require("./lib/saveImage");
const { readFileDir } = require("./lib/readFileDir");

// read + edit front matter data
const frontMatter = (
  dirName,
  fileName,
  ext,
  paths = { large, thumb }
  // paths = { large, medium, thumb }
) => {
  const filePath = path.join(`${dirName}/${fileName}`);
  const destPath = path.join(dirName);
  let imageInfo;
  let saveFile = true;

  fmEditor.saveFile = fmEditor.save;
  fmEditor.read(filePath).data((data, matter) => {
    if (data.processed) {
      // console.log("processed => ", data.processed)
      imageInfo = { processed: data.processed };
      saveFile = false;
      return;
    }

    imageInfo = getFileInfo(data.image);

    if (!imageInfo) return;

    const useExt = ext ? ext : imageInfo.ext;

    // update markdown data
    data.image = `/${paths.large}/${imageInfo.name}${useExt}`;
    data.thumb = `/${paths.thumb}/${imageInfo.name}${useExt}`;
    // data.medium = `/${paths.medium}/${imageInfo.name}${useExt}`;
    data.processed = timestamp();
    matter.data = data;
  });

  if (saveFile) {
    fmEditor.save(destPath, { postfix: "" }, (err, data) => {
      if (err) {
        console.log("failed to save front matter data", err);
      }

      console.log(`saved ${destPath}`);
    });
  }

  return imageInfo;
};

const start = (lang, markdownDir) => {
  const prefixPath = path.join(__dirname, `../static`);

  const imagePath = "img/cds";
  const sourceImagePath = `${prefixPath}/${imagePath}`;
  const largeImagePath = `${imagePath}`;
  const thumbImagePath = `${imagePath}/thumbnails`;
  // const mediumImagePath = `${imagePath}/medium`;

  readFileDir(markdownDir, (dirName, fileName) => {
    // console.log(`read ${dirName}/${fileName}`);

    const imageInfo = frontMatter(dirName, fileName, ".jpg", {
      large: largeImagePath,
      medium: mediumImagePath,
      thumb: thumbImagePath
    });

    if (!imageInfo) {
      console.log(`failed to read image data ${dirName} ${fileName}`);
      return;
    }

    let imagePath = `${sourceImagePath}/${imageInfo.name}${imageInfo.ext}`;
    let imagePathPng = `${sourceImagePath}/${imageInfo.name}.png`;

    try {
      if (fs.existsSync(imagePathPng)) {
        imagePath = imagePathPng;
      }
    } catch (err) {
      console.log(".png not found");
    }

    // save a large version of the image
    saveImage(imagePath, `${prefixPath}/${largeImagePath}`, ".jpg");

    // save a thumbnail version of the image
    saveImage(imagePath, `${prefixPath}/${thumbImagePath}`, ".jpg", 300, 300);

    // save a mediumImagePath version of the image
    // saveImage(imagePath, `${prefixPath}/${mediumImagePath}`, ".jpg", 740, 410);
  });
};

// kickoff
start("en", path.join(__dirname, "../content/en/blog/posts"));
start("fr", path.join(__dirname, "../content/fr/blog/posts"));

//process.exit()
