// A HTTP server that receives requests and converts
//   them to upper-case and then returns it to the client

// Internal node require
var http = require('http');
// External module (As suggested by excercise)
//   Allows to create a transform stream using a
//   single function that takes a chunk of data and
//   returns a chunk of data.
var map  = require('through2-map');

// Setup port from first input parameter
var port = process.argv[2];

// A chunk of data to convert to an upper case stream
var chunkToUpper = map(function (chunk) {
  return chunk.toString().toUpperCase();
});

// Create listen server
var server = http.createServer(function (req, res) {
  // Pipe the request chunk through the converter
  //   to then pipe it into response
  req.pipe(chunkToUpper).pipe(res);
}); server.listen(port);

// From the solution:
// before req.pipe(ch... etc. :
// if (req.method != 'POST')
//   return res.end('send me a POST\n')
// 
// Although my solution passed, I wasnt testing for
// GET/POST/etc. request types whereas it was specified
// to only accept POST
