const fs = require('fs')
const path = require('path')

const usuariosFilePath = path.join(__dirname, '../database/usuariosDataBase.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

const controlador = {

    login: function (req, res) {
        res.render("login") 
    },

    registro: function (req, res) {
        res.render("registro")
    },
};

module.exports = controlador