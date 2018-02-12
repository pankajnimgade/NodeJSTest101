var fileSystem = require('fs');

fileSystem.writeFileSync("text.txt", "A sample Text file");
console.log(fileSystem.readFileSync("text.txt").toString());
