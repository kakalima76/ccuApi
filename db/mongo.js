var mongoose = require('mongoose');

mongoose.connect('mongodb://kakalima76:Ni244265@ds060478.mlab.com:60478/usuarios', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.log("conectado");
});

