const { application } = require('express');
const express = require('express');
const router = express.Router();
const controlador = require("../controllers/usuarioController");
const subirImagenRegistro = require('../middlewares/imgRegistroMid');
const validacionRegistro = require('../middlewares/validacionRegistroMid')


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
router.post("/login" , controlador.procesoLogin) ;

// Formulario de registro

router.get("/registro",controlador.registro) ;

// Proceso de registro

router.post("/registro", subirImagenRegistro.single('subirImagenRegistro'), validacionRegistro,  controlador.procesoRegistro) ;

module.exports = router