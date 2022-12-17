const session = require("express-session")

let botonCerrarSesion = document.getElementById('botonCerrarSesion')

botonCerrarSesion.addEventListener('click', function(e){

    session_destroy()
})