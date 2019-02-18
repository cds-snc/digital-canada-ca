const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const fmEditor = require('front-matter-editor');
const { getFileInfo } = require('./lib/getFileInfo');

const timestamp = () => {
  return new Date().valueOf();
}

// read + edit front matter data
const frontMatter = (dirName, fileName, ext, paths = { large, thumb }) => {
  const filePath = path.join(`${dirName}/${fileName}`);
  const destPath = path.join(dirName);
  let imageInfo;

  fmEditor.read(filePath)
    .data((data, matter) => {
      if (data.processed) {
        console.log("processed => ", data.processed)
        imageInfo = { processed: data.processed };
        return;
      }

      imageInfo = getFileInfo(data.image);

      if (!imageInfo) return;

      const useExt = ext ? ext : imageInfo.ext;

      // update markdown data
      data.image = `${paths.large}/${imageInfo.name}${useExt}`;
      data.thumb = `${paths.thumb}${imageInfo.name}${useExt}`;
      data.processed = timestamp();
      matter.data = data;
    })
    .save(destPath, { postfix: '' }, (err, data) => {
      if (err) {
        console.log("failed to save front matter data", err);
      }
    });

  return imageInfo;
}



// save and resize image + update file ext
const saveImage = (filePath, targetPath, useExt = ".jpg", width = 800, height = 800) => {
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
      fit: "inside",
      position: "entropy",
      withoutEnlargement: true

    })
    .toFormat('jpeg')
    .toFile(imageName, (err) => {
      if (err) {
        console.log("error saving file", err);
        return;
      }

      console.log(`image created ${imageName}`)
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

const start = (lang, markdownDir) => {

  const prefixPath = `../public/${lang}`;
  const imagePath = 'img/cds';
  const sourceImagePath = `${prefixPath}/${imagePath}`;
  const largeImagePath = `${imagePath}/blog`;
  const thumbImagePath = `${imagePath}/blog/thumb`;

  readFileDir(markdownDir, (dirName, fileName) => {

    console.log(`read ${dirName}/${fileName}`);

    const imageInfo = frontMatter(dirName, fileName, '.jpg', { large: largeImagePath, thumb: thumbImagePath });

    if (!imageInfo) {
      console.log(`failed to read image data ${dirName} ${fileName}`)
      return
    }

    const imagePath = `${sourceImagePath}/${imageInfo.name}${imageInfo.ext}`;

    // save a large version of the image
    saveImage(imagePath, `${prefixPath}/${largeImagePath}`, '.jpg')

    // save a thumbnail version of the image
    saveImage(imagePath, `${prefixPath}/${thumbImagePath}`, '.jpg', 300, 300)
  })
}

// kickoff 
start('en', '../content/en/blog/posts');
start('fr', '../content/en/blog/posts');