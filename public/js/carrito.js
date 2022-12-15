window.addEventListener('load', function () {

    //Capturando los inputs desde la vista de PRODUCTO//

    let botonCarrito = document.querySelector('.reserva')

    let nombreCurso = document.querySelector('.titulo-bienvenida')

    let imagenCurso = document.querySelector('.imagen-bienvenida')

    let precioCurso = document.querySelector('.fecha-precio')

    let idCurso = document.querySelector('.idCurso')


    //Capturando los inputs desde la vista de CARRITO//

    let cursoCaja = document.querySelector('.cursoCaja')

    let cursoCarrito = document.querySelector('.cursoCarrito')

    let imagenCursoCarrito = document.querySelector('.imagen-curso')

    let nombreCursoCarrito = document.querySelector('.nombreCursoCarrito')

    let precioCursoCarrito = document.querySelector('.precioCursoCarrito')

   

    let carrito = []


    botonCarrito.addEventListener('click', function (e) {



        if (e.target.classList.contains('reserva')){

            carrito.push({                          // toma la info de la vista producto y crea el objeto curso que se va a mostrar en la vista de carrito
                id: idCurso.textContent,
                nombre: nombreCurso.textContent,
                img: imagenCurso.textContent,
                precio: precioCurso.textContent
            })
            console.log(nombreCurso.textContent)
        }

    }) 

})


/*

//     LOCALSTORGAE - SET ITEM     // 

function guardarCarritoLocal () {

localStorage.setItem('carrito', JSON.stringify(carrito))

}

*/