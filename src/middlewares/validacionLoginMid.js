const { body } = require('express-validator');

const validacionLogin = [
    body('email').isEmail().withMessage('Email inválido'),
    body('password').isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres')
    ];


module.exports = validacionLogin;