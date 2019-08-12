var express = require('express');
var router = express.Router();
var item = require('../controllers/itemController');
var lacre = require('../controllers/lacreController')

/* GET home page. */
router.post('/', item.salvar);
router.get('/', item.buscar);
router.get('/contar', item.contar);
router.post('/base64', item.salvarBase64);


router.post('/lacre/buscar', lacre.buscar);
router.post('/lacre/salvar', lacre.salvar);



module.exports = router;
