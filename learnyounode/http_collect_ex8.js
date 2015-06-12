// Make a get request from url in first parameter and print
//   the entire data response
var http = require('http');

var request = http.get(process.argv[2], function(response) {
  response.setEncoding('utf8');
  var entire_data = '';
  response.on('data', function (data) {
    entire_data += data;
  });
  // response.on("error", function(e) {
  //   console.error(e);
  // });
  response.on('end', function(end) {
    console.log(entire_data.length);
    console.log(entire_data);
  });
});

// from the solution (using bl module):
// http.get... response) {
// response.pipe(bl(function (err, data) {
//   if (err)
//      return console.error(err);
//   data = data.toString();
//   console.log(data.length);
//   console.log(data);
// }))
// })
