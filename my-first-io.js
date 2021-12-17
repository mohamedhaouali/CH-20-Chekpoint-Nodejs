const fs = require("fs");
//read file
const file = fs.readFileSync(process.argv[2], "utf-8");

let linenumber = 0;
for (let i = 0; i < file.length - 1; i++) {
    if (file[i] === "\n") {
        linenumber++;
    }
}
console.log(linenumber);