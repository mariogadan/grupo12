
const path = require('path'); 
const multer = require('multer')

const storage = multer.diskStorage ({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../../public/img/imagenesRegistro'));
    },
    filename: function(req, file, cb) {
        let imageName = Date.now() + path.extname(file.originalname);
        cb(null, imageName);
    }
});

const subirImagenRegistro = multer({storage: storage}); 

module.exports = subirImagenRegistro