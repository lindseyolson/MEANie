var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var index = require( '../modules/routes/index' );
var peeps = require( '../modules/routes/peeps' );

app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded({extended: true} ) );
app.use( '/', index );
app.use( '/peeps', peeps );


app.listen(8080, 'localhost', function(){
  console.log( 'listening on 8080' );
});
