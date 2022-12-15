window.addEventListener('load', function () {

    //Capturando los inputs//

    let botonCarrito = document.querySelector('.reserva')


    botonCarrito.addEventListener('click', function (e) {

        let carrito = []

        
        if( (e =! "") && (e == botonCarrito)){

        let nombreCurso = document.querySelector('.titulo-bienvenida')

        let imagenCurso = document.querySelector('.imagen-bienvenida')

        let precioCurso = document.querySelector('.fecha-precio')

        let idCurso = document.querySelector('.idCurso')



        carrito.push({
            id: idCurso.value,
            nombre: nombreCurso.value,
            img: imagenCurso.value,
            precio: precioCurso.value
        })

        console.log(carrito)
        
    } 

    })

})

/*

//     LOCALSTORGAE - SET ITEM     // 

function guardarCarritoLocal () {

localStorage.setItem('carrito', JSON.stringify(carrito))

}

*/