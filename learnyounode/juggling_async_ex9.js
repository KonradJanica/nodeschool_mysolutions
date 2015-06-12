// Make a get request using the urls in the first 3 input
//   parameters and return the entire data in order of
//   input. I.e. Asynchoronous get requests followed by
//   a synchoronous ordererd print
var http = require('http');

// @param input_url, the url to http.get
// @param index, the order of calls (to allow
//               printing in correct positions
// @return Cat all data from given url (get)
function getData(input_url, index, callback) {
  http.get(input_url, function(response) {
    response.setEncoding('utf8');
    var entire_data = '';
    response.on('data', function (data) {
      entire_data += data;
    });
    // response.on("error", function(e) {
    //   console.error(e);
    // });
    response.on('end', function(end) {
      callback(entire_data, index);
    });
  });
}

// The driver for getData
//   Makes an array of data (in order)
function processUrls(urls, callback) {
  var data_array = [];
  var done_count = 0;
  for (var x = 0; x < urls.length; ++x) {
      getData(urls[x], x, function(entire_data, index) {
        data_array[index] = entire_data;
        ++done_count;
        if (done_count === urls.length)
          callback(data_array);
      });
  }
}

// Prints an array separated by new line
var urls = process.argv.splice(2);
processUrls(urls, function(data_array) {
  data_array.forEach(function(val) {
    console.log(val);
  });
});
