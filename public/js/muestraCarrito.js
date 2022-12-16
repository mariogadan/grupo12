window.addEventListener('load', function () {

 /*
    let cursoCarrito = document.getElementById('cursoCarrito');

    let imagenCursoCarrito = document.getElementById('imagen-curso'); */

    let cursoCaja = document.getElementById('cursoCaja');

    let nombreCursoCarrito = document.getElementById('nombreCursoCarrito');

    let precioCursoCarrito = document.getElementById('precioCursoCarrito');

    let cursosAgregados = JSON.parse(localStorage.getItem("carrito"));

cursosAgregados.forEach((c) => {

    let cursoEnCarrito = document.createElement("div");
    cursoEnCarrito.className = "cursoEnCarrito";
    cursoEnCarrito.innerHTML = `
    <h2 class="nombreCursoEnCarrito"> ${c.nombre} </h2>
    <h3 class="precioCursoEnCarrito"> ${c.precio} </h3>
    `
    cursoCaja.append(cursoEnCarrito);

    })

})
