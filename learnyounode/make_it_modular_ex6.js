// Demonstrates use of self made modules
// Prints a list of files in the first input parameter directory that
//   match the file extension in the second input parameter
// Is similar to ls | grep .$(EXT) (except file must end with $(EXT))
var new_module = require('my_module');

var dir_path = process.argv[2];
var filter = process.argv[3];

// (Synchoronus) Print list of files that match
//   @param  dir_path  the full path of the directory to scan
//   @param  filter    the extension name filter (only these files get printed)
//   @warn  .lsFilter  won't pass the test (just better coding convention)
new_module.lsFilter(dir_path, filter, function(err, filtered_list) {
  filtered_list.forEach(function(val) {
    console.log(val);
  });
});

