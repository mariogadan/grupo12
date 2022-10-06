const fs = require('fs')
const path = require('path')

const cursosFilePath = path.join(__dirname, '../database/cursosDataBase.json');
const cursos = JSON.parse(fs.readFileSync(cursosFilePath, 'utf-8'));

const controlador = {    

    beta: function (req, res) {
        res.render("beta")
    },

    home: function (req, res) {
        const cursos = JSON.parse(fs.readFileSync(cursosFilePath, 'utf-8'));    
        res.render("homebeta", { cursos: cursos })
    },

    detalleCurso: function (req, res) {
        let idCurso = req.params.id
        let cursoBuscado = null

        for (let c of cursos) {
            if (idCurso == c.id) {
                cursoBuscado = c;
                break
            }
        }

        if (cursoBuscado != null) {
            res.render("producto", { curso: cursoBuscado })
        } else {
            res.send("Error al encontrar curso")
        }
    },

    carrito: function (req, res) {
        res.render("carrito")
    },

    crear: function (req, res) {
        res.render("crear")
    },

    crearCurso: function (req, res) {
        let datosCurso = req.body;
        let idNuevoCurso = (cursos[cursos.length-1].id)+1;
        let imagenNuevoCurso = "qqqq.jpg"; //Revisar cuando apliquemos multer//

        let nuevoCurso = {
            "id": idNuevoCurso,
            "nombreCurso": datosCurso.nombreCurso,
            "descripcion": datosCurso.descripcion,
            "fechaInicio": datosCurso.fechaInicio,
            "fechaFin": datosCurso.fechaFin,
            "precio": parseInt(datosCurso.precio),
            "imagenCurso": imagenNuevoCurso
            //"imagenCurso": req.file.filename
        }

        cursos.push(nuevoCurso);
        fs.writeFileSync(cursosFilePath,JSON.stringify(cursos, null, " "), "utf-8");

        res.redirect("/");
    },

    editar: function (req, res) {
        let idCurso = req.params.id
        let cursoBuscado = null

        for (let c of cursos) {
            if (idCurso == c.id) {
                cursoBuscado = c;
                break
            }
        }

        if (cursoBuscado != null) {
            res.render("editar", { curso: cursoBuscado })
        }
    },

    editarCurso: function (req, res) {
        let idCurso = req.params.id;
        let datosCurso = req.body;

        for (let o of cursos) {
            if (o.id == idCurso) {
                o.nombreCurso = datosCurso.nombreCurso,
                o.descripcion = datosCurso.descripcion,
                o.fechaInicio = datosCurso.fechaInicio,
                o.fechaFin = datosCurso.fechaFin,
                o.precio = parseInt(datosCurso.precio);
                //o.imagenCurso = req.file.filename
                break
            }
        }

        fs.writeFileSync(cursosFilePath,JSON.stringify(cursos, null, " "), "utf-8");

        res.redirect("/");
    },

    borrarCurso: function (req, res) {
        let idCursoABorrar = req.params.id;

        let nuevaListaDeCursos = cursos.filter(function(c){
            return c.id!=idCursoABorrar;
        })
    }
}
module.exports = controlador