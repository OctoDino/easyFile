//Include path libary
var path = require('path');
//Include fs libary
var fs = require('fs');

//Create new file
function create(dirname, fileName, fileContent) {
    if(fileContent == null){
        console.error("No file content given!");
        fileContent = "";
    }
    fs.writeFile(path.join(dirname, fileName), fileContent, function(err) {
            if (err) {
                return console.error(err);
            }
            var output = "File " + fileName + " was created.";
            return output;
        })
};

function write(dirname, fileName, fileContent) {
    if(fileContent == null){
        console.error("No file content given!");
        fileContent = "";
    }
    fs.writeFile(path.join(dirname, fileName), fileContent, function(err) {
        if (err) {
            return console.error(err);
        }
        var output = "File " + fileName + " was created.";
        return output;
    })
};

//Delete file
function deleteFile(dirname, fileName) {
    fs.unlink(path.join(dirname, fileName), function(err) {
        if (err) {
            return console.error(err);
        }
        var output = "File " + fileName + " was deleted.";
        return output;
    })
};

//read file for a specific word
function readFor(dirname, fileName, searchedContent) {
    fs.readFile(path.join(dirname, fileName), 'utf8', function(err, data) {
        if (err) {
            return console.error(err);
        }
        var output = data.split(" ").indexOf(searchedContent);
        return output;
    })
};

//look if file exists
function exists(dirname, fileName) {
    /*fs.exists(path.join(dirname, fileName), function(exists) {
        if (exists) {
            var output = true;
            return output;
        } else {
            var output = false;
            return output;
        }
    })
    */
    try {
        if (fs.existsSync(dirname + '/' + fileName)) {
          //file exists
          var output = true;
            return output;
        }else{
            var output = false;
            return output;
        }
      } catch(err) {
        console.error(err)
      }
}

//copy a file from dirname to targetDirname
function copy(dirname, fileName, targetDirname) {
    fs.copyFile(path.join(dirname, fileName), path.join(targetDirname, fileName), function(err) {
        if (err) {
            return console.error(err);
        }
        var output = "File " + fileName + " was copied.";
        return output;
    })
}

//rename a file
function rename(dirname, fileName, newFileName) {
    fs.rename(path.join(dirname, fileName), path.join(dirname, newFileName), function(err) {
        if (err) {
            return console.error(err);
        }
        var output = "File " + fileName + " was renamed to " + newFileName + ".";
        return output;
    })
}

//get the full data of a file
function read(dirname, fileName) {
    fs.readFile(path.join(dirname, fileName), 'utf8', function(err, data) {
        if (err) {
            return console.error(err);
        }
        var output = data;
        return output;
    })
}

//export all function as amodule
module.exports = {
    create: create,
    write: write,
    deleteFile: deleteFile,
    readFor: readFor,
    exists: exists,
    copy: copy,
    rename: rename,
    read: read
};
