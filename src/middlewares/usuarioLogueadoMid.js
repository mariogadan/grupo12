function usuarioLogueadoMid (req, res, next) {
    res.locals.estaLogueado = false;
    if (req.session.usuarioLogueado != undefined) {
        res.locals.estaLogueado = true
        res.locals.user = req.session.usuarioLogueado
    }
    next();
}

module.exports = usuarioLogueadoMid;