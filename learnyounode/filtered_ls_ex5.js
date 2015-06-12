// Prints a list of files in the first input parameter directory that
//   match the file extension in the second input parameter
// Is similar to ls | grep .$(EXT) (except file must end with $(EXT))
var fs = require('fs');
var path = require('path');

var dir_path = process.argv[2];
var filter = process.argv[3];

// Make a list of files in given directory that match the filter extension
//   @param  dir_path  the given directory to filter
//   @param  filer     the extension filter (only include these files)
fs.readdir(dir_path, function doneReadDir(err, list) {
  if (err) throw err;
  var filtered_list = [];
  list.forEach(function(val, index) {
    if (fileExtCmp(filter, path.extname(val))) {
      // list.splice(index, 1);
      console.log(val);
    }
  });
});

// Compare file name strings to each other
//   @param  ext            the file name extension (from filter)
//   @param  file_with_dot  the actual file name extension
//                          with a dot prefix
//   @return  true  when names match (excluding prefix dot)
function fileExtCmp(ext, file_with_dot) {
  var len = file_with_dot.length - 1;
  if (ext.length != len)
    return false;

  for (x = 0; x < len; ++x) {
    if (ext[x] != file_with_dot[x+1])
      return false;
  }
  return true;
}
