const { body } = require('express-validator')

const validacionCrearCurso = [

    body('nombreCurso').notEmpty().withMessage('Completar el nombre del curso').isLength({min:10, max:50}).withMessage('El nombre del curso no puede superar los 50 caracteres'),
    body('descripcionCurso').notEmpty().withMessage('Completar la descripción del curso').isLength({min:10, max:115}).withMessage('La descripción del curso no puede superar los 115 caracteres'),
    body('precio').notEmpty().withMessage('Completar el precio del curso').isInt({min:5 , max:6}).withMessage('El precio del curso debe contener entre 5 y 6 dígitos'),
    body('vacantesTotales').notEmpty().withMessage('Completar el precio del curso').isInt().withMessage('Debe ser un número').isLength({max:50}).withMessage('Las vacantes no pueden superar las 50'), 
                                                                                                 
]


module.exports = validacionCrearCurso

/* 
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
*/