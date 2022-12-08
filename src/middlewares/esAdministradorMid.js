function esAdministradorMid (req, res, next) {
    let usuario = req.session.usuarioLogueado
    if (usuario == undefined) {
        res.send ("¡No estás logueado!")
    }
    else {if (usuario.admin != 1) {
        res.send ("No tenés permiso para acceder a esta ruta.")
     }
     else {next()}}
} 

module.exports = esAdministradorMid;