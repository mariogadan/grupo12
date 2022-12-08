const  application = require('express');
const express = require('express');
const router = express.Router();
const subirImagenRegistro = require('../middlewares/imgRegistroMid');
const validacionRegistro = require('../middlewares/validacionRegistroMid');
const validacionLogin = require('../middlewares/validacionLoginMid');
const controlador = require("../controllers/usuarioController");

// Login

router.get("/login", controlador.login);
router.post("/login", validacionLogin, controlador.procesoLogin);

// Formulario de registro

router.get("/registro", controlador.registro);

// Proceso de registro

router.post("/registro", subirImagenRegistro.single('subirImagenRegistro'), validacionRegistro, controlador.procesoRegistro);

// Perfil de usuario

router.get("/perfil/:id", controlador.perfilUsuario);

module.exports = router