// const fs = require('fs') // VUELA
// const path = require('path') // VUELA

// const cursosFilePath = path.join(__dirname, '../database/cursosDataBase.json'); // VUELA
// const cursos = JSON.parse(fs.readFileSync(cursosFilePath, 'utf-8')); // VUELA

// const usuariosFilePath = path.join(__dirname, '../database/usuariosDataBase.json'); // VUELA
// const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8')); //VUELA 

const { validationResult } = require('express-validator'); // QUEDA
const bcryptjs = require('bcryptjs'); // QUEDA

let db = require("../database/models"); // NUEVO
// const { create } = require('domain'); // ESTO APARECIÓ SOLO (??)

const controlador = {
    
    /*
    login: function (req, res) {
        res.render("login");
    },
    */
     
    // LOGIN - NUEVO - INICIO
    login: function (req, res) {
        db.usuario.findAll()
        .then(function(usuario){
            return res.render("login", {usuario:usuario})
        })
    },
    // LOGIN - NUEVO - FIN 
    
    /*
    registro: function (req, res) {
        res.render("registro");
    },
    */
    
    // REGISTRO - NUEVO - INICIO
    registro: function (req, res) {
        db.usuario.findAll()
        .then(function(usuario){
            return res.render("registro", {usuario:usuario})
        })
    },
    // REGISTRO - NUEVO - FIN 


    procesoLogin: function (req, res) {
        
        let errores = validationResult(req);
        let usuarioALoguearse;

        if (errores.isEmpty()) {
            for (let i = 0; i < usuarios.length; i++) {
                if ((req.body.email == usuarios[i].email && bcryptjs.compareSync(req.body.password, usuarios[i].password)))
                {usuarioALoguearse = usuarios[i];
                break};
            }
            if (usuarioALoguearse == undefined) {
                return res.render("login", {
                    errores: [{ msg: "Credenciales inválidas" }]
                })

            }
            else {
                req.session.usuarioLogueado = usuarioALoguearse;
                res.redirect("/")
            }
        } else {
            return res.render("login", {
                errores: errores.array(),
                old: req.body
            })
        }
    },
    
    /*
    //  este es el metodo procesoRegistro como lo teniamos antes - inicio
    
    procesoRegistro: function (req, res) {

        let errores = validationResult(req);

        if (errores.isEmpty()) {

            let usuario = req.body;
            let idNuevoUsuario = (usuarios[usuarios.length - 1].id) + 1;

            let avatar = "imagen vacia";

            if (req.file) {
                avatar = req.file.filename
            };
            let nuevoUsuario = {
                "id": idNuevoUsuario,
                "nombre": usuario.nombre,
                "apellido": usuario.apellido,
                "nombreUsuario": usuario.nombreUsuario,
                "email": usuario.email,
                "password": bcryptjs.hashSync(req.body.password, 10),
                "fechaNacimiento": usuario.dia + "/" + usuario.mes + "/" + usuario.anio,
                "avatar": avatar,

            };

            usuarios.push(nuevoUsuario);
            fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, " "), "utf-8");

            res.redirect('/')
        }
        else {
            res.render("registro", {
                errores: errores.array(),
                old: req.body
            });
        }
    }
    //  este es el metodo procesoRegistro como lo teniamos antes - fin   
    */ 

    // es es el metodo procesoRegistro nuev - inicio
    
    procesoRegistro: function (req, res) {

         let errores = validationResult(req);

        if (errores.isEmpty()) {

            let usuario = req.body;
        
            let avatar = "imagen vacia";

            if (req.file) {
                avatar = req.file.filename
            };
            //console.log(req.body)
            db.usuario.create({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            clave: bcryptjs.hashSync(req.body.password, 10),
            imagen: avatar,
            admin: 1, // req.body.admin
            superadmin: 0, // req.body.superadmin,
            idAcademia: 1 // req.body.idAcademia
            });
            console.log('ya sali de create()')
            res.redirect('/')
        }
        else {
            res.render("registro", {
                errores: errores.array(),
                old: req.body
            });
        }
    }
    // es es el metodo procesoRegistro nuev - fin
    
};

module.exports = controlador

