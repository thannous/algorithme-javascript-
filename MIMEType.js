

var N = parseInt(readline()); // Number of elements which make up the association table.
var Q = parseInt(readline()); // Number Q of file names to be analyzed.

var associationTab = {};
for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    var EXT = inputs[0]; // file extension
    var MT = inputs[1]; // MIME type.
    if(EXT.length <= 50)
        associationTab[EXT] = MT;
}

var parser = function(filename){
    var extFilename = "";
    if(filename.indexOf(".") > 0){
       idx = filename.lastIndexOf(".");
        extFilename = filename.slice(idx+1).toLowerCase();
    }
    if(extFilename.length <= 10)
        return extFilename;
    else return "";
}

for (var i = 0; i < Q; i++) {
    var find = false;
    var FNAME = readline(); // One file name per line.
    printErr("FNAME : "+  FNAME )

    var extFilename = parser(FNAME);
    printErr("extFilename : "+  extFilename )
    if(extFilename){
        for ( var ext in associationTab) {
            if (extFilename == ext.toLowerCase()) {
                print(associationTab[ext]);
                find = true
                break;
            }
        }
        if (!find){
            print('UNKNOWN');
        }
    }else{
        print('UNKNOWN');
    }


}


// Write an action using print()
// To debug: printErr('Debug messages...');

 // For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.