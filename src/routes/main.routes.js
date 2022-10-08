const { application } = require('express');
const express = require('express');
const router = express.Router();
const controlador = require("../controllers/mainController");
const path = require('path');
const subirImagen = require('../middlewares/multerMid')

router.get("/cursos", controlador.cursos);  
router.get("/", controlador.home);
router.get("/crear", controlador.crear);
//router.post("/crear", subirImagen.single('crearCargaImagen'), controlador.crearCurso);
router.post("/producto/crear", subirImagen.single('crearCargaImagen'), controlador.crearCurso);// middleware controlador.crearCurso
//router.post("/producto/crear", subirImagen.single('crearCargaImagen'), (req, res) => {
//    console.log(req.file);})



router.get('/detalle/:id', controlador.detalleCurso);
router.delete("/:id", controlador.borrarCurso);

router.get("/editar/:id", controlador.editar);
router.put("/editar/:id", subirImagen.single('editarCargaImagen'), controlador.editarCurso);  // middleware subirImagen


router.get("/carrito", controlador.carrito);


module.exports = router

