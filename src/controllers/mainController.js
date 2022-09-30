const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/cursosDataBase.json');
const products =JSON.parse(fs.readFileSync(productsFilePnpath,"utf-8"));



const controlador = {
    home: function (req, res) {
    res.render("home", {productos:products});
},

    producto: function (req, res) {
    res.render("producto")
},

    carrito: function (req, res) {
        res.render("carrito")
},

editar: function (req, res) {
    res.render("editar")
},

productobeta: function (req, res) {
    res.render("productobeta")
}

};

module.exports = controlador

