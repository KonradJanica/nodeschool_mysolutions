// A HTTP server that servers JSON data when it receives a
//   get request to the certain paths.
//   @path  '/api/parsetime'  returns hour: %d, minute %d, second: %d
//   @path  '/api/unixtime'   returns unixtime: %ul

// require core node modules
var http = require('http');
var url  = require('url');

// The listen port from the first parameter
var port = process.argv[2];

// A date output format object
var date_formatter = {
  // parsetime property
  "/api/parsetime": function(parsed_url) {
    // Get date from url query
    var date = new Date(parsed_url.query.iso);
    // Parse date in json format specified
    return {
      hour:   date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  },
  // unix property
  "/api/unixtime": function(parsed_url) {
    // Get date from url query
    var date = new Date(parsed_url.query.iso);
    // Parse date in json format specified
    return {
      unixtime: date.getTime()
    };
  }
};

var server = http.createServer(function (req, res) {
  // Parse url
  var parsed_url = url.parse(req.url, true);
  var pathname = parsed_url.pathname;
  // Branch pathname
  var d_format_func = date_formatter[pathname];
  // Check if pathname is valid
  if (d_format_func) {
    // write head and json response and finish connection
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(d_format_func(parsed_url)));
  }
}); server.listen(port);

// Official solution uses an if to check for correct pathname
//   I feel my object selecter is cleaner
// However the official solution did have an else check branching
//   from d_format_func that writesHead 404 and ends as error
//   handling. (This program still passes the official test)
