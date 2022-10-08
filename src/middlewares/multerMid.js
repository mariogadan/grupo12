
const path = require('path'); // agrego esta linea, abajo usamos path y no estaba requerido
const multer = require('multer');

const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {   
     cb(null, path.join(__dirname,'../public/img'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName = Date.now() + path.extname(file.originalname);   // milisegundos y extensión de archivo original
     cb(null, imageName);      
    }
});

const subirImagen = multer({storage: multerDiskStorage}); 

module.exports = subirImagen