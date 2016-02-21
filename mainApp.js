var express         = require( 'express' );
var path            = require( 'path' );
var cookieParser    = require( 'cookie-parser' );
var bodyParser      = require( 'body-parser' );

//  Set route paths
var home    = require( './routes/index' );
var main    = require( './routes/main' );
var send    = require( './routes/send' );

var app = express();

//  Vew engine setup
app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', 'ejs' );

app.use( express.static(path.join(__dirname, 'public' )));
app.use( '/', home );
app.use( '/main', main );

app.use( '/send', send );

module.exports = app;
