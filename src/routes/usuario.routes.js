const { application } = require('express');
const express = require('express');
const router = express.Router();
const controlador = require("../controllers/usuarioController");
const { body } = require('express-validator')
const subirImagenRegistro = require('../middlewares/imgRegistroMid');

const validacionRegistro = [
    body('nombre').notEmpty().withMessage('Completar nombre'),
    body('apellido').notEmpty().withMessage('Completar apellido'),
    body('nombreUsuario').notEmpty().withMessage('Completar nombre de usuario'),
    body('email')
        .notEmpty().withMessage('Completar email').bail()   // el bail() detiene las validaciones siguientes en caso de que no se cumpla la que tiene el bail(). Se usa  para hacer mas de una validacion,  
        .isEmail().withMessage('El formato del correo no es válido')  // en este caso si ya el campo esta vacio, no sigue con las validaciones siguientes, y si no esta vacio, valida que sea un mail (para este caso particular)
];

// Login

router.get("/login", controlador.login) ;

// Formulario registro

router.get("/registro", controlador.registro) ;

// Proceso registro

router.post("/registro", subirImagenRegistro.single('subirImagenRegistro') /*entre las ' ' va el name del imput del ejs ,*/, validacionRegistro,  controlador.procesoRegistro) ;

module.exports = router