window.addEventListener('load', function () {

    //Capturando el botón de la vista de PRODUCTO//

    let botonCarrito = document.getElementById('reserva');

    //Capturando los inputs desde la vista de CARRITO//

    let cursoCaja = document.getElementById('cursoCaja');

    let cursoCarrito = document.getElementById('cursoCarrito');

    let imagenCursoCarrito = document.getElementById('imagen-curso');

    let nombreCursoCarrito = document.getElementById('nombreCursoCarrito');

    let precioCursoCarrito = document.getElementById('precioCursoCarrito');

    botonCarrito.addEventListener('click', function (e) {

        let nombreCurso = document.getElementById('titulo-curso').innerHTML;

        let imagenCurso = document.getElementById('imagen-curso').src;

        let precioCurso = document.getElementById('precioCursoCarrito').innerHTML;

        let idCurso = document.getElementById('idCurso').innerHTML;

        let cursosAgregados = JSON.parse(localStorage.getItem("carrito"))

        if (cursosAgregados == undefined) {
            localStorage.setItem("carrito", JSON.stringify([{
                id: idCurso,
                nombre: nombreCurso,
                img: imagenCurso,
                precio: precioCurso
            }]))
        }

        else {

            cursosAgregados.push({
                nombre: nombreCurso,
                img: imagenCurso,
                precio: precioCurso
            })

            localStorage.setItem("carrito", JSON.stringify(cursosAgregados))
        }

        console.log(JSON.parse(localStorage.getItem("carrito")))

    })

})