var mongoose = require('mongoose');
var Lacre   = require('../models/lacreModel');

var sendJsonResponse = function(res, status, content){
    res.status(status);
    res.json(content);
}


module.exports.salvar = function(req, res){

    var lacre = new Lacre();
   
    lacre.numero = req.body.numero;
    lacre.processo = req.body.processo;

    
    promise = lacre.save();

    promise
    .then(data => {
        sendJsonResponse(res, 200, data);
    })

    .catch(err => {
        sendJsonResponse(res, 400, err);
    })        
    
}

module.exports.contar = function(req, res){

    Lacre.count({}, (err, count) => {
        if (err) {
            sendJsonResponse(res, 400, err);
        }

        sendJsonResponse(res, 200, count);
    })
    
}



module.exports.buscar = function(req, res){

    let numero = req.body.numero;
    
    var query = Lacre.find({numero: numero});

    query.exec(function (err, data) { 
        if(err){
            sendJsonResponse(res, 400, err);
        }else{
            sendJsonResponse(res, 200, data);
        }
            
    });

}