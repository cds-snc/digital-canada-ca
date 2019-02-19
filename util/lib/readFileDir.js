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

module.exports = { readFileDir }