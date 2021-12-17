const filterFn = require("./mymodule");

var dir = process.argv[2];
var filterStr = process.argv[3];

filterFn(dir, filterStr, (err, list) => {
    if (err) {
        console.error(err);
    }
    list.map((el) => console.log(el));
});