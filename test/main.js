//import index.js from easyfile folder as module
var easyfile = require('../easyfile/index.js');

//write file
//when file don't exist it will be created!
easyfile.write('test/test.txt', 'Hello World!');

//readFile
var output = easyfile.read('test/test.txt');
console.log(output);

//create file
easyfile.create('test/test.json');

//rename a file
easyfile.rename('test/test.json', 'test/test2.json');

//read for a specific word
output = easyfile.readFor('test/test2.json', 'Hello');
console.log(output);

//delete a file
easyfile.deleteFile('test/test2.json');

//look if a file exist
output = easyfile.exists('test/test2.json');
console.log(output);