var mongoose = require ('mongoose');

const lacreSchema = new mongoose.Schema({
	"numero": {type: String},
	"processo": {type: String}
})

const Lacre = mongoose.model('Lacre', lacreSchema, 'lacres');

module.exports = Lacre;