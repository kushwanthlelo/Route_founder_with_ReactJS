var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/aero_route_finder_react', {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, '###########  connection error: ###########'));
db.once('open', function() {
  console.log("******* Connected to Database::MongoDB  *******");
});
module.exports=db;