$.ajax({
    url: 'http://api.reimaginebanking.com/customers/56c96f247742719f0e4dd538/accounts?key=9bb2ac5a95d30884f1c5eefebf12ca52',
    success: function(results){
        console.log( results );
        accounts = results;
        for( index in results ){
            console.log( results[index] );
            //  Fix to Card
            $(".accounts").append("<li class=collection-item><h5>"
            + results[index].type
            + "</h5>Balance : <span class=balance" +index+ ">" + results[index].balance + "</span></li>");

        }
    }
});
