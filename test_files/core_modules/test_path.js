var path = require('path');

var websiteHome = "Desktop/Pankaj Nimgade//files/website/index.html"
var websiteAbout = "Desktop/Pankaj Nimgade//files/website/about.html"

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteHome));
console.log(path.basename(websiteHome));
console.log(path.extname(websiteHome));