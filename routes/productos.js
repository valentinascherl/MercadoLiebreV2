var express = require('express');
var router = express.Router();
let productosController = require('../controllers/productosController')

/* GET users listing. */
router.get('/detail/:id/:category', productosController.detail);

module.exports = router;
