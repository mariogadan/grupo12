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

};

module.exports = controlador

