// A simple HTTP file server
//   Sends the same file upon connection

// Require node internal modules
var http = require('http');
var fs   = require('fs');

// Setup input parameters
var port     = process.argv[2];
var file_loc = process.argv[3];

// Open stream
var stream = fs.createReadStream(file_loc);

// Start listen server
var server = http.createServer(function (req, res) {
  // Pipe the stream upon request as reponse
  stream.pipe(res);
}); server.listen(port);

// From the solution:
// next line under createServer:
// res.writeHead(200, { 'content-type': 'text/plain' });
// (this sends a response header to the request, i.e.
// 200 is a 3-digit HTTP status code, like 404.
// other param is human-readable statusMessage
