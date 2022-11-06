const fs = require('fs')
const path = require('path')
//const bcrypt = require('bcryptj');
//let passEncriptada = bcrypt.hashSync('password',10);  

const usuariosFilePath = path.join(__dirname, '../database/usuariosDataBase.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));
const { validationResult } = require('express-validator')

const controlador = {

   login: function (req, res) {
      res.render("login");
    },

    registro: function (req, res) {
        res.render("registro");
    },


    procesoLogin: function (req,res) {
        let usuarioALoguearse;
        for (let i=0; i<usuarios.length;i++){
          if(usuarios[i].email == req.body.email){
              if(req.body.password==usuarios[i].password){
                  usuarioALoguearse = usuarios[i];
                  req.session.usuarioLogueado = usuarioALoguearse;
                   res.render("homebeta");  
                 
              }
              else{
                res.render('login',{ errores: [
                    {msg:'Credenciales Invalidas'}
                ]});
              }
          } else{
            res.render('login',{ errores: [
                {msg:'Credenciales Invalidas'}
            ]});
          }
          
        }
},

    procesoRegistro: function (req, res) {

        let errores = validationResult(req);

        if (errores.isEmpty()) {
            
            let usuario = req.body;
            let idNuevoUsuario = (usuarios[usuarios.length - 1].id) + 1;

            let avatar = "imagen vacia"

            if (req.file){
                avatar = req.file.filename
            }

            let nuevoUsuario = {
                "id": idNuevoUsuario,
                "nombre": usuario.nombre,
                "apellido": usuario.apellido,
                "nombreUsuario": usuario.nombreUsuario,
                "email": usuario.email,
                "password": usuario.password,
                "fechaNacimiento": usuario.dia + "/" + usuario.mes + "/" + usuario.anio,
                "avatar": avatar,
                
            }

            usuarios.push(nuevoUsuario);
            fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, " "), "utf-8");

            res.redirect('/')
        } else {
            res.render("registro", { errores: errores.array(),   
                                         old: req.body });
               }
 
    }
};

module.exports = controlador

