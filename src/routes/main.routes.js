const { application } = require('express');
const express = require('express');
const router = express.Router();
const controlador = require("../controllers/mainController");
const path = require('path');
const subirImagen = require('../middlewares/multerMid');

router.get("/cursos", controlador.cursos);  
router.get("/", controlador.home);
router.get("/crear", controlador.crear);
router.post("/crear",subirImagen.single('crearCargaImagen'), controlador.crearCurso);

router.get('/detalle/:id', controlador.detalleCurso);

router.get("/editar/:id", controlador.editar);
router.put("/editar/:id", subirImagen.single('editarCargaImagen'), controlador.editarCurso);  
router.delete("/editar/:id", controlador.borrarCurso); 

router.get("/carrito", controlador.carrito);


module.exports = router

