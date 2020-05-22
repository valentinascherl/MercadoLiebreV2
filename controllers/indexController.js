const fs = require('fs');



let indexController = {
    index: function (req, res){
    res.render('index');
  }
}

module.exports = indexController;