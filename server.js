var app     = require( './mainApp' );
var http    = require( 'http' );


//  Get port from environment and store in Express
var port = process.env.PORT || 3000;
app.set( 'port', port );

//  Create HTTP server
var server = http.createServer( app );

//  Listen on provided port
server.listen( port );
server.on( 'error', onError );
server.on( 'listening', onListening );

function onError( error ){
    if( error.syscall !== 'listen' ){
        throw error;
    }

    var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

    //  Handle specific listen error with friendly messages
    switch( error.code ){
        case 'EACCES':
            console.error( bind + ' requires elevated privileges' );
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error( bind + ' is already in user' );
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening( ){
    console.log( 'Server listening on port : ', port );
}

//  404 response
function send404Response( response ){
    response.writeHead(404, {"Content-Type": "text/plain"} );
    response.write( "Error 404: Page not found!" );
    response.end();
}
