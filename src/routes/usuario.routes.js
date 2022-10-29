const { application } = require('express');
const express = require('express');
const router = express.Router();
const controlador = require("../controllers/usuarioController");
const { body } = require('express-validator')

const validacionRegistro = [
    body('nombre').notEmpty().withMessage('Completar nombre'),
    body('apellido').notEmpty().withMessage('Completar apellido'),
    body('nombreUsuario').notEmpty().withMessage('Completar nombre de usuario'),
    body('email').isEmail().withMessage('Completar email'),
];

// Login
router.get("/login", controlador.login);


// Formulario registro

router.get("/registro", controlador.registro);

// Proceso registro
router.post("/registro", validacionRegistro, controlador.procesoRegistro);


module.exports = router