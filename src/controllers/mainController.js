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

};

module.exports = controlador
