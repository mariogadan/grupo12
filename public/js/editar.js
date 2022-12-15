window.addEventListener('load', function () {

    let formulario = document.querySelector('.formulario');

    let editarCargaImagen = document.querySelector('.editarCargaImagen');

    let descripcionCurso = document.querySelector('.descripcionCurso');

    descripcionCurso.addEventListener('click', function () {
        descripcionCurso.style.backgroundColor = "#BCB0DE"
        descripcionCurso.style.color = "black"
    });

    let fechaInicioCurso = document.querySelector('.fechaInicioCurso');

    fechaInicioCurso.addEventListener('click', function () {
        fechaInicioCurso.style.backgroundColor = "#BCB0DE"
        fechaInicioCurso.style.color = "black"
    });

    let precioCurso = document.querySelector('.precioCurso');

    precioCurso.addEventListener('click', function () {
        precioCurso.style.backgroundColor = "#BCB0DE"
        precioCurso.style.color = "black"
    });

    let vacantesTotales = document.querySelector('.vacantesTotales');

    vacantesTotales.addEventListener('click', function () {
        vacantesTotales.style.backgroundColor = "#BCB0DE"
        vacantesTotales.style.color = "black"
    });

    let idAdmin = document.querySelector('.idAdmin');

    idAdmin.addEventListener('click', function () {
        idAdmin.style.backgroundColor = "#BCB0DE"
        idAdmin.style.color = "black"
    });

})
