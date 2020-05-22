const fs = require('fs');
var path = require('path');

//Lee el archivo JSON
function readJSONfile() {
    return JSON.parse(fs.readFileSync(productosController.archivo, 'utf-8'));
}
// Guarda el json de productos
function saveJSONfile(productos) {
    fs.writeFileSync(productosController.archivo, JSON.stringify(productos, null, ' '));
}
function searchById(id){
    let archivoJson = readJSONfile();
    let productos = null;
    archivoJson.forEach((prod, i) => {
      if (prod["id"] == id) {
         productos = prod;
      }
    });
    return productos; // si no lo encuentra devuelve null
}




let productosController = {
    archivo: path.join(__dirname, '..') + '/productos.json',
    productos: function(req, res) {
        return res.render('productos');
   }

}


module.exports = productosController;