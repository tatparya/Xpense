var express = require( 'express' );
var router = express.Router();

// Get home Page

router.get( '/', function( reg, res, next ){
    res.render( 'main' );
});

module.exports = router;
