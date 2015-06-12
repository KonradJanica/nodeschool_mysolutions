// (Asynchoronous) Prints the line count of first input parameter
//   Is similar to cat file | wc -l
//   @warn  no error catching (on file not found)
//   @warn  incorrect result for files ending with \n (new line)
var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function doneReading(err, file) {
  // line_array = buffer.toString().split('\n')
  var line_array = file.split('\n');
  var count = 0;
  line_array.forEach(function(val, index, arr) {
    ++count;
  });
  --count; //1 less \n at end
  console.log(count);
});
