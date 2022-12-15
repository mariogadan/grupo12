const  application  = require('express');
const express = require('express');
const router = express.Router();
const controlador = require("../controllers/mainController");
const path = require('path');
const subirImagen = require('../middlewares/multerMid');
const esAdministradorMid = require("../middlewares/esAdministradorMid");
const crearCursoMid = require("../middlewares/crearCursoMid")

router.get("/cursos", controlador.cursos);  
router.get("/", controlador.home);
router.get("/crear", esAdministradorMid, controlador.crear);
router.post("/crear", subirImagen.single('crearCargaImagen'), crearCursoMid, controlador.crearCurso);

router.get('/detalle/:id', controlador.detalleCurso);

router.get("/editar/:id", esAdministradorMid, controlador.editar);
router.put("/editar/:id", subirImagen.single('editarCargaImagen'), crearCursoMid, controlador.editarCurso);  
router.delete("/editar/:id", esAdministradorMid, controlador.borrarCurso); 

router.get("/carrito", controlador.carrito);


module.exports = router

