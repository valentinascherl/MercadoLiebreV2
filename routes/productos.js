var express = require('express');
var router = express.Router();
let productosController = require('../controllers/productosController')

/* GET users listing. */
router.get('/', productosController.productos);

module.exports = router;
