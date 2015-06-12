// Make a get request from url in first parameter and print
//   the first data response
var http = require('http');

var request = http.get(process.argv[2], function(response) {
  response.setEncoding("utf8");
  response.on("data", function (data) {
    console.log(data);
  });
  // response.on("error", function(e) {
  //   console.error(e);
  // });
  // response.on("end", function(end) {
  //   console.log(end);
  // });
});

// from the solution:
// response.setEncoding('utf8');
// response.on('data', console.log);
// response.on('error', console.error);
