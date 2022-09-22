const { application } = require('express');
const express = require('express');
const router = express.Router();
const controlador = require("../controllers/mainController");

router.get("/", controlador.home);

router.get("/producto", controlador.producto);

router.get("/carrito", controlador.carrito);

router.get("/editar", controlador.editar);

module.exports = router

