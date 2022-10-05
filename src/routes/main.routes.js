const { application } = require('express');
const express = require('express');
const router = express.Router();
const controlador = require("../controllers/mainController");
const path = require('path');
// inicio apartado Multer
const multer = require('multer');
const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {   
     cb(null, path.join(__dirname,'../../public/img'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName = Date.now() + path.extname(file.originalname);   // milisegundos y extensión de archivo original
     cb(null, imageName);         
    }
});
const subirImagen = multer({storage: multerDiskStorage}); 
// fin apartado Multer

//router.get("/beta", controlador.beta);  CONSULTAR QUE VISTA ES LA QUE VA
router.get("/", controlador.home);
router.get("/crear", controlador.crear);
router.post("/crear", controlador.crearCurso);
//router.post("/crear",subirImagen.single('cargaImagen'),controlador.crearCurso); // middleware subirImagen chequear

router.get('/:id', controlador.detalleCurso);
router.delete("/:id", controlador.borrarCurso);

router.get("/editar/:id", controlador.editar);
router.put("/editar/:id", controlador.editarCurso);
//router.post("/editar/:id",subirImagen.single('cargaImagen'),controlador.editarCurso); // middleware subirImagen

router.get("/carrito", controlador.carrito);


module.exports = router

