var mongoose = require('mongoose');
var Item   = require('../models/item_model')
const fs = require('fs');
var Jimp = require('jimp');

var sendJsonResponse = function(res, status, content){
    res.status(status);
    res.json(content);
}


module.exports.salvar = function(req, res){

    var item = new Item();
    //caminho para o arquivo de imagem

    item.lacre      = req.body.lacre;
	item.processo   = req.body.processo;
	item.posicao    = req.body.posicao;
	item.grupo      = req.body.grupo;

    Jimp.read(req.body.path)
        .then(image => {
            image.getBase64Async('image/jpeg')
            .then(base64 => {

                item.imagem = base64;

                promise = item.save();

                promise
                .then(data => {
                    sendJsonResponse(res, 200, data);
                })

                .catch(err => {
                    sendJsonResponse(res, 400, err);
                })
              
            })
    
        .catch(err => {
            sendJsonResponse(res, 400, err);
        });

    })
    
}


module.exports.salvarBase64 = function(req, res){

    var item = new Item();
    //caminho para o arquivo de imagem

    item.lacre      = req.body.lacre;
	item.processo   = req.body.processo;
	item.posicao    = req.body.posicao;
    item.grupo      = req.body.grupo;
    item.path       = req.body.path;

    promise = item.save();

    promise
    .then(data => {
        sendJsonResponse(res, 200, data);
    })

    .catch(err => {
        sendJsonResponse(res, 400, err);
    })
    
}



module.exports.buscar = function(req, res){

    var query = Item.find({});

    query.exec(function (err, data) { 
        if(err){
            sendJsonResponse(res, 400, err);
        }else{
            sendJsonResponse(res, 200, data);
        }
            
    });

}

module.exports.contar = function(req, res){

    Item.count({}, (err, count) => {
        if (err) {
            sendJsonResponse(res, 400, err);
        }

        sendJsonResponse(res, 200, count);
    })
    
}