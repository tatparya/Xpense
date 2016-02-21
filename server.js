var http = require('http');
var express = require ('express');
var app = express();
var port = process.env.PORT || 1337;

app.use( express.static( __dirname + '/Views' ) );

//app.use( express.static( __dirname + '/script' ) );

//  return Index file
app.get( '/', function( request, result ){
    result.sendFile( 'index.html' );
});

//  listen to port request
app.listen( port );

// http.createServer(function(request, response) {
//
//     // Send the HTTP header
//     // HTTP Status: 200 : OK
//     // Content Type: text/plain
//     response.writeHead(200, { 'content-Type':'text/plain' });
//     response.end( 'Hello World!!\n' );
// }).listen(port);

console.log( 'Server running at port ', port );
