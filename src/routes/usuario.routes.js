const { application } = require('express');
const express = require('express');
const router = express.Router();
const controlador = require("../controllers/usuarioController");
const subirImagenRegistro = require('../middlewares/imgRegistroMid');
const validacionRegistro = require('../middlewares/validacionRegistroMid')

// Formulario de login

router.get("/login", controlador.login) ;

// Formulario de registro

router.get("/registro", controlador.registro) ;

// Proceso de registro

router.post("/registro", subirImagenRegistro.single('subirImagenRegistro'), validacionRegistro,  controlador.procesoRegistro) ;

module.exports = router