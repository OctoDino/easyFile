// `read.js` => Test file for `read`, `get` and `readFor` a file

//Import the `easyfile` module
var easyfile = require('../easyfile/index.js');

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//fully read the content of a file
var output = easyfile.read(__dirname, 'test.txt');

if(output == null){ //check if the file has a content
    //Do something with the file
}else{
    console.log(output);
    //Do something with the output
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//get a specific Object from the file (works only for JSON!)
var object = "user-data"; //Output will be now the content of user-data when it exists!
var output = easyfile.get(__dirname, 'data.json', object);

if(output == null){ //check if the file has the object
    //Do something with the file
}else{
    console.log(output);
    //Do something with the output
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//read for a specific word
var word = "Hello World!"; //Output will be now the content of the file when it contains the word!
var output = easyfile.readFor(__dirname, 'test.txt', word);

if(output == null){ //check if the file has the searched word
    console.log("The file doesn't contain the word!");
    //Do something with the file
}else{
    console.log("The file contains the word!");
    console.log(output);
    //Do something with the output
}