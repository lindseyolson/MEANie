var express = require( 'express' );
var router = express.Router();
var bodyParser = require( 'body-parser' );
var mongoose = require( 'mongoose' );
// 27017 is default mongo port

router.use( bodyParser.urlencoded( { extended: true } ) );
router.use( bodyParser.json() );

mongoose.connect( 'localhost:/27017/meanie' );


var peepsSchema = new  mongoose.Schema({
  name: String,
  location: String
});
var peepsModel = mongoose.model( 'peepsModel', peepsSchema );

router.get( '/', function( req, res ){
  // get and send back all the things
  peepsModel.find().then( function( response ){
  res.send( response );
  });
});

router.post( '/', function( req, res ){
  console.log( 'req.body.name: ' + req.body.name );
  // retrieved the req.body
  // putting it into an object to be saved in the db
  var recordToAdd = {
    name:req.body.name,
    location:req.body.location
  };
  // create new record
  var newRecord = peepsModel( recordToAdd );
  newRecord.save();
  res.send('hello');

});

// delete router
router.delete('/:id', function (req, res){
  var id = req.params.id;
  peepsModel.remove({_id: id}).then(function(err){
    if(!err){
      res.send('OK');

    } else {
      res.send('error');
    }
  });
});
module.exports = router;
