const { validationResult } = require('express-validator'); 
const bcryptjs = require('bcryptjs'); 

const db = require("../database/models");

const controlador = {
    

    login: (req, res) => {
        res.render("login")
    },

    registro: (req, res) => {
        res.render("registro")
    },

    procesoLogin: function (req, res) {

        let errores = validationResult(req);

        if (errores.isEmpty()) {
            db.usuario.findOne({ where: { email: req.body.email } })
                .then(function (usuario) {
                    if (usuario == null) {
                        return res.render("login",
                            { errores: [{ msg: "Credenciales inválidas" }] });
                    } else {
                        let validaPass = bcryptjs.compare(req.body.password, usuario.clave)
                            .then(function (validaPass) {
                                if (validaPass) {
                                    req.session.usuarioLogueado = usuario;
                                    res.redirect("/");
                                } else {
                                    return res.render("login", {
                                        errores: [{ msg: "Credenciales inválidas" }]
                                    });
                                }
                            });
                    }
                });
        } else {
            return res.render("login", {
                errores: errores.array(),
                old: req.body
            })
        }
    },

    procesoRegistro: function (req, res) {

        let errores = validationResult(req);

        if (errores.isEmpty()) {

            let usuario = req.body;

            let avatar = "imagen vacia";

            if (req.file) {
                avatar = req.file.filename
            };

            db.usuario.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                clave: bcryptjs.hashSync(req.body.password, 10),
                imagen: avatar,
                admin: 0, // req.body.admin
                superadmin: 0, // req.body.superadmin,
                idAcademia: 1 // req.body.idAcademia
            });
            res.redirect('/')
        }
        else {
            res.render("registro", {
                errores: errores.array(),
                old: req.body
            });
        }
    },

    perfilUsuario: function (req, res) {
        db.usuario.findByPk(req.params.id)
        .then(function(usuario){
            return res.render("perfil", {usuario:usuario, usuarioLogueado: req.session.usuarioLogueado})
        })
    }

};

module.exports = controlador

