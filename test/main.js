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
var isFile = easyfile.exists(__dirname, 'data.json');
console.log(isFile)
if(isFile){
    //read file for a specific word
    var index = easyfile.readFor(__dirname, 'data.json', '"name":');
    console.log(index)
}else{
    const test = {
        "name": "John",
        "age": 30,
        "cars": [
            "Ford",
            "BMW",
            "Fiat"
        ]
    }
    //create a new file
    easyfile.create(__dirname, 'data.json', test);
}
