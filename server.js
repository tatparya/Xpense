var http = require('http');
var port = process.env.PORT || 1337;
http.createServer(function(request, response) {

    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { 'content-Type':'text/plain' });
    response.end( 'Hello World!!\n' );
}).listen(port);

console.log( 'Server running at port ', port );
