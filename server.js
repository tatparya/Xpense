var http = require('http');
var express = require ('express');
var app = express();
var port = process.env.PORT || 1337;

var request = require( 'superagent' );

app.use( express.static( __dirname + '/views' ) );

//app.use( express.static( __dirname + '/script' ) );

//  return Index file
app.get( '/', function( request, result ){
    result.sendFile( 'index.html' );
});

//  Get Started

app.get( '/get-started', function(request, result ){
    result.sendFile( 'signup.html', {root: __dirname + '/views'} );
});

app.get( '/mainapp', function(request, result ){

    //  Get values from API
    result.sendFile( 'mainapp.html', {root: __dirname + '/views'} );

    });

//  Get all accounts
request.get( 'http://api.reimaginebanking.com/atms?lat=38.9283&lng=-77.1753&rad=1&key=9bb2ac5a95d30884f1c5eefebf12ca52' )
    .end( function( err, result ){
    //console.log( result.status );
    //console.log( result.body );
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
