// Writes the current date and 24 hour time to each connection
//   made via the first input parameter listen port

// Core node net module
var net = require('net');

// Port to listen to
var port = process.argv[2];

// Global date object
var date = new Date();

// If number is single digit then add 0 padding to front
//   @param  the number to add padding to
//   @return  the input with 0 padding if required
function zeroPad(num) {
  if (num < 10)
    return '0'+num;

  return num;
}

// Makes the required date format as specified by excercise
//   @warn  requires global date object
function makeDateData() {
  var date_data = date.getFullYear();
  date_data += '-';
  date_data += zeroPad(date.getMonth()+1);
  date_data += '-';
  date_data += zeroPad(date.getDate());
  date_data += ' ';
  date_data += date.getHours();
  date_data += ':';
  date_data += date.getMinutes();
  date_data += '\n';

  return date_data;
}

// Make the server and listen to port
//   Writes date/time upon socket connection and then close socket
var server = net.createServer(function (socket) {
  // socket.write(date);
  // socket.end();
  // Above simplified
  socket.end(makeDateData());
}); server.listen(port);
