const fs = require('fs')
const path = require('path')
const cursosFilePath = path.join(__dirname, '../database/cursosDataBase.json');
const cursos = JSON.parse(fs.readFileSync(cursosFilePath, 'utf-8'));
const moment = require("moment");

let db = require("../database/models");

const controlador = {
    
    home: function (req, res) {
        db.curso.findAll()
        .then(function(curso){
            return res.render("homebeta", {curso:curso})
        }
        )
    },

    cursos: function (req, res) {
        db.curso.findAll()
        .then(function(curso){
            return res.render("cursos", {curso:curso})
        }
        )
    },

    detalleCurso: function (req, res) {

        db.curso.findByPk(req.params.id)
        .then(function(curso){
            return res.render("producto", {curso:curso})
        })
 },

    carrito: function (req, res) {
        res.render("carrito")
    },

    crear: function (req, res) {

        db.tipoCurso.findAll()
        .then(function(tipoCurso){
            return res.render("crear", {tipoCurso:tipoCurso})
        })
        
    },

    crearCurso: function (req, res) {

        db.curso.create(
            {
                nombre: req.body.nombre,
                precio: req.body.precio,
                fechaCreacion: moment().format("YYYY/MM/DD"), //Usamos la librería Moment para que tome la fecha de creación en el formato correcto para nuestra base de datos.
                fechaBaja: null,
                imagen: req.file.filename,
                fechaInicioCurso: req.body.fechaInicioCurso,
                descripcion: req.body.descripcion,
                vacantesTotales: req.body.vacantesTotales,
                idTipoCurso: req.body.tipoCurso,
                idAdmin: req.body.idAdmin, //Una vez que tengamos el controller de Usuarios conectado a la base de datos, deberíamos crear un middleware para verificar con Session que somos administradores y eso lo tome el formulario.
            }
        );

        res.redirect("/");
    },

    editar: function (req, res) {

        let pedidoCurso = db.curso.findByPk(req.params.id);

        let pedidoTipoCurso = db.tipoCurso.findAll();

        Promise.all([pedidoCurso, pedidoTipoCurso])
        .then(function([curso, tipoCurso]) {
            res.render("editar", {curso:curso, tipoCurso:tipoCurso})
        })
    },

    editarCurso: function (req, res) {
        
        if (!req.file){ 
            db.curso.update(
                {
                    nombre: req.body.nombre,
                    precio: req.body.precio,
                    fechaBaja: null,
                    fechaInicioCurso: req.body.fechaInicioCurso,
                    descripcion: req.body.descripcion,
                    vacantesTotales: req.body.vacantesTotales,
                    idTipoCurso: req.body.tipoCurso,
                    idAdmin: req.body.idAdmin, //Una vez que tengamos el controller de Usuarios conectado a la base de datos, deberíamos crear un middleware para verificar con Session que somos administradores y eso lo tome el formulario.
                }
        )}
        
        else {
            db.curso.update(
                {
                    nombre: req.body.nombre,
                    precio: req.body.precio,
                    fechaBaja: null,
                    imagen: req.file.filename,
                    fechaInicioCurso: req.body.fechaInicioCurso,
                    descripcion: req.body.descripcion,
                    vacantesTotales: req.body.vacantesTotales,
                    idTipoCurso: req.body.tipoCurso,
                    idAdmin: req.body.idAdmin, //Una vez que tengamos el controller de Usuarios conectado a la base de datos, deberíamos crear un middleware para verificar con Session que somos administradores y eso lo tome el formulario.
                }
        )
        }
        res.redirect("/detalle/" + req.params.id);
    },

    borrarCurso: function (req, res) {
        let idCursoABorrar = req.params.id;

        let nuevaListaDeCursos = cursos.filter(function(c){
            return c.id!=idCursoABorrar;
        })

        fs.writeFileSync(cursosFilePath,JSON.stringify(nuevaListaDeCursos, null, " "),'utf-8');

		res.redirect('/');
    }
}
module.exports = controlador