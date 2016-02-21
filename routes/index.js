var express = require( 'express' );
var router = express.Router();

var request = require('superagent');

var str = '';

// Get home Page
router.get( '/', function( reg, result, next ){

    result.render( 'index', {
                            title:  'Xpense | Home',
                            userName:   'Weclome!'
                            });
});

module.exports = router;
