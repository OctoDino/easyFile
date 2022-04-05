//import index.js from easyfile folder as module
var easyfile = require('../easyfile/index.js');
//import easyfile from '../easyfile/index.js';

//create a new file
//When file already exists, it will be overwritten!
easyfile.create(__dirname, 'test.txt', 'Hello World!-');

//write a file
//when the file does not exist, it will be created!
easyfile.write(__dirname, 'test.txt', 'Hello out there!');

//Complex Tests
//look if file exist
easyfile.create(__dirname, 'data.json', '{"name":"John Doe"}');
var isFile = easyfile.exists(__dirname, 'data.json');
console.log(isFile)
if(isFile){
    //rename file
    easyfile.rename(__dirname, 'data.json', 'data2.json');
}else{
    //Create file
    easyfile.create(__dirname, 'data.json', '{"name":"John Doe"}');
}
