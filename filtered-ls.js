let fs = require("fs");
let path = require("path");

let dir = process.argv[2];
let filterStr = "." + process.argv[3];

fs.readdir(dir, (err, file) => {
    if (err) {
        console.log(err);
    }
    file.map((el) => (path.extname(el) === filterStr ? console.log(el) : null));
});