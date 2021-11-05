const ejs = require("ejs");
const fs = require('fs');
const data = require('./data.json');



ejs.renderFile('template.ejs', data, { delimiter: '?' }, function (err, str) {
    if (err) throw err;
    fs.writeFile("index.html", str, function (err) {
        if (err) throw err;
    });
});

