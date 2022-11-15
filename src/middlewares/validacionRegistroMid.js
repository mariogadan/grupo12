 const { body } = require('express-validator');
const validacionRegistro = [
    body('nombre').notEmpty().withMessage('Completar nombre'),
    body('apellido').notEmpty().withMessage('Completar apellido'),
    body('nombreUsuario').notEmpty().withMessage('Completar nombre de usuario'),
    body('email')
        .notEmpty().withMessage('Completar email').bail()   // el bail() detiene las validaciones siguientes en caso de que no se cumpla la que tiene el bail(). Se usa  para hacer mas de una validacion,  
        .isEmail().withMessage('El formato del correo no es válido'), // en este caso si ya el campo esta vacio, no sigue con las validaciones siguientes, y si no esta vacio, valida que sea un mail (para este caso particular)
    body('password').isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres')
    ];

module.exports = validacionRegistro;