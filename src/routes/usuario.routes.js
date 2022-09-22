const { application } = require('express');
const express = require('express');
const router = express.Router();
const controlador = require("../controllers/usuarioController");

router.get("/login", controlador.login);

router.get("/registro", controlador.registro);

module.exports = router