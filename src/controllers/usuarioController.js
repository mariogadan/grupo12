const controlador = {

    login: function (req, res) {
        res.render("login")
    },

    registro: function (req, res) {
        res.render("registro")
    },
};

module.exports = controlador