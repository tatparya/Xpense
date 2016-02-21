var express = require( 'express' );
var router = express.Router();
//require the Twilio module and create a REST client
var twilio = require('twilio');
var client = new twilio.RestClient("AC48de05f81f0ab3bc7595270dad73c21d", "78017f6d86dc3f7d808c05682191b8b3");

var sendMessage = function(){
    client.messages.create({
    to:'+17328958251',
    from:'12018028077',
    body:'Your current savings progress is 37.5%! Keep motivated to reach your goals!'
}, function(error, message) {
    if (error) {
        console.log(error.message);
    }
});
}
// Get home Page

router.get( '/', function( reg, res, next ){
    sendMessage();

    res.render( 'main' );
});

module.exports = router;
