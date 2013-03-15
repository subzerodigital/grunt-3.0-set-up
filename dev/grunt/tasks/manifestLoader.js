/****************************************
 * global exports required
 * 
 * load menifest file and read js/css includes 
 * return array of files
 */
exports.readManifest = function(manifest, pathPrefix) {

    var files = [];

    // Default to empty string
    pathPrefix = pathPrefix || '';

    // node.js FileSystem library
    var fs = require('fs');

    var array = fs.readFileSync(manifest).toString().split("\n");

    for (var i = 0; i < array.length; i++) {

        var file = array[i];
        
        //remove newlines returns
        file = file.replace(/\r$/, '');

        if (file.trim() !== "" && file.match(/^#/) === null) {

            // Append the "base path" for static assets, relative to this grunt.js file.
            files.push(pathPrefix + file);
        }

    }

    // console.log("Parsed manifest files for " + manifest + ":");
    // console.log(files);

    return files;
};