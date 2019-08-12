var mongoose = require ('mongoose');


const itemSchema = new mongoose.Schema({
    "lacre" :   {type: String},
	"processo": {type: String},
	"posicao":  {type: String},
	"grupo":    {type: String},
    'path':   {type: String}
});

const Item = mongoose.model('Item', itemSchema, 'itens');

module.exports = Item;