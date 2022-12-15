const moment = require("moment");
const fs = require("fs");
const path = require("path");

const db = require("../database/models");

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

    crearCurso: async function (req, res) {

 /*       if (req.file == null){
            req.file = "imagen vacia"
        }
*/

        await db.curso.create(
            {
                nombre: req.body.nombreCurso,
                precio: req.body.precio,
                fechaCreacion: moment().format("YYYY/MM/DD"), //Usamos la librería Moment para que tome la fecha de creación en el formato correcto para nuestra base de datos.
                fechaBaja: null,
                imagen: req.file.filename,
                fechaInicioCurso: req.body.fechaInicioCurso,
                descripcion: req.body.descripcion,
                vacantesTotales: req.body.vacantesTotales,
                idTipoCurso: req.body.tipoCurso,
                idAdmin: 1 //req.body.idAdmin , Una vez que tengamos el controller de Usuarios conectado a la base de datos, deberíamos crear un middleware para verificar con Session que somos administradores y eso lo tome el formulario.
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
                }, {
                    where: {
                        idCurso: req.params.id
                    }
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
                }, {
                    where: {
                        idCurso: req.params.id
                    }
                }
        )}
        res.redirect("/detalle/" + req.params.id);
    },

    borrarCurso: async function (req, res) {
        

       await db.curso.findByPk(req.params.id)
        .then(function(curso){

            let nombreImagen = curso.imagen;
            console.log(nombreImagen)
            fs.unlinkSync(path.join(__dirname, "../../public/img", nombreImagen))
            
        }); // Antes de borrar el curso de la base de datos, buscamos la foto que le corresponde y la borramos localmente de nuestra carpeta img.
        
       await db.curso.destroy({
            where: {
                idCurso: req.params.id
            }}) 

		res.redirect("/cursos");
    }
}
module.exports = controlador