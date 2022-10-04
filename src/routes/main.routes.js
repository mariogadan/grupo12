const { application } = require('express');
const express = require('express');
const router = express.Router();
const controlador = require("../controllers/mainController");
router.get("/beta", controlador.beta);
router.get("/", controlador.home);
router.get("/crear", controlador.crear);
router.post("/crear", controlador.crearCurso);

router.get('/:id', controlador.detalleCurso);
router.delete("/:id", controlador.borrarCurso);

router.get("/editar/:id", controlador.editar);
router.put("/editar/:id", controlador.editarCurso);

router.get("/carrito", controlador.carrito);


module.exports = router

