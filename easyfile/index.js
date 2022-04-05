
//https://nodejs.org/api/fs.html#filehandlereadoptions

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
/*TODO: Not Production ready!
function deleteFile(dirname, fileName) {
    //look if file exists
    if(exists(dirname, fileName)){
        console.error("File don't exist in this directory!");
        var output = "File don't exist in this directory!";
        return output;
        //break funcion
    }
    fs.unlink(path.join(dirname, fileName), function(err) {
        if (err) {
            return console.error(err);
        }
        var output = "File " + fileName + " was deleted.";
        return output;
    })
};
*/

//read file for a specific word
/* TODO: Not Production ready!
function readFor(dirname, fileName, searchedContent) {
    fs.readFile(path.join(dirname, fileName), 'utf8', function(err, data) {
        if (err) {
            return console.error(err);
        }
        var output = data.split(" ").indexOf(searchedContent);
        return output;
    })
};
*/

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
/*TODO: Not Production ready!
function copy(dirname, fileName, targetDirname, newFileName) {
    fs.copyFile(path.join(dirname, fileName), path.join(targetDirname, newFileName), function(err) {
        if (err) {
            return console.error(err);
        }
        var output = "File " + fileName + " was copied to " + targetDirname + " with the name " + newFileName + ".";
        return output;
    })
}
*/

//rename a file
function rename(dirname, fileName, newFileName) {
    //look if file exists
        if(exists(dirname, newFileName)){
            console.error("File already exist in this directory!");
            var output = "File already exist in this directory!";
            return output;
            //break funcion
        }
    fs.rename(path.join(dirname, fileName), path.join(dirname, newFileName), function(err) {
        if (err) {
            return console.error(err);
        }
        var output = "File " + fileName + " was renamed to " + newFileName + ".";
        return output;
    })
}

//get the full data of a file
/* TODO: Not Production ready!
function read(dirname, fileName) {
    fs.readFile(path.join(dirname, fileName), 'utf8', function(err, data) {
        if (err) {
            return console.error(err);
        }
        var output = data;
        return output;
    })
}
*/

//export all function as amodule
module.exports = {
    create: create,
    write: write,
    deleteFile: deleteFile,
    //readFor: readFor,
    exists: exists,
    //copy: copy,
    rename: rename,
    //read: read
};
