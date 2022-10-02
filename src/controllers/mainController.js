const fs = require('fs')
const path = require('path')

const cursos = require('../database/cursosDataBase.json')

const controlador = {
    home: function (req, res) {
    res.render("home", {cursos: cursos})
},

    producto: function (req, res) {
        let idCurso = req.params.id
        let cursoBuscado = null

        for (let c of cursos){
            if( idCurso == c.id){
                cursoBuscado = c;
                break
            }
        }

        if (cursoBuscado!=null){
            res.render("productobeta", {curso: cursoBuscado})
        } else {
            res.send("Error al encontrar curso")
        }

    
},

    carrito: function (req, res) {
        res.render("carrito")
},

editar: function (req, res) {
    res.render("editar")
},

productobeta: function (req, res) {
    res.render("productobeta");
}

};

module.exports = controlador

