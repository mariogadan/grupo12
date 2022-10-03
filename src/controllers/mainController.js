const controlador = {
    home: function (req, res) {
    res.render("home")
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
},

homebeta: function (req, res) {
    res.render("homebeta")
}



};

module.exports = controlador

