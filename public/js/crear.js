window.addEventListener('load', function () {

  let formulario = document.getElementById('formulario')

  let crearCargaImagen = document.getElementById('crearCargaImagen')

  


  /******** Captura de etiquetas y estilos ********/

  let nombreCurso = document.getElementById('nombreCurso')

  nombreCurso.addEventListener('click', function () {
    nombreCurso.style.backgroundColor = "#BCB0DE"
    nombreCurso.style.color = "black"
  })


  let descripcionCurso = document.getElementById('descripcionCurso')

  descripcionCurso.addEventListener('click', function () {
    descripcionCurso.style.backgroundColor = "#BCB0DE"
    descripcionCurso.style.color = "black"
  })



  let fechaInicioCurso = document.getElementById('fechaInicioCurso')

  fechaInicioCurso.addEventListener('click', function () {
    fechaInicioCurso.style.backgroundColor = "#BCB0DE"
    fechaInicioCurso.style.color = "black"
  })



  let precioCurso = document.getElementById('precioCurso')

  precioCurso.addEventListener('click', function () {
    precioCurso.style.backgroundColor = "#BCB0DE"
    precioCurso.style.color = "black"
  })



  let vacantesTotales = document.getElementById('vacantesTotales')

  vacantesTotales.addEventListener('click', function () {
    vacantesTotales.style.backgroundColor = "#BCB0DE"
    vacantesTotales.style.color = "black"
  })



  let idAdmin = document.getElementById('idAdmin')

  idAdmin.addEventListener('click', function () {
    idAdmin.style.backgroundColor = "#BCB0DE"
    idAdmin.style.color = "black"
  })



    /* VALIDACIONES */

  formulario.addEventListener('submit', function (e) {

    let errores = []

      if (nombreCurso.value == ""){
        errores.push('El campo de nombre de curso no puede estar vacío')
  
      }  
      
      if ((nombreCurso.value).length < 10 || (nombreCurso.value).length > 50) {
         errores.push('El nombre del curso no puede contener menos de 10 caracteres ni mas de 50 caracteres')
      }

      if (descripcionCurso.value == ""){
        errores.push('El campo de descripción de curso no puede estar vacío')
  
      }  


      // Validacion para img
      let extImg = /(.jpg|.jpeg|.png|.gif)$/i;

      if (crearCargaImagen.value == "" || !extImg.exec(crearCargaImagen.value)){
        errores.push('Por favor agregar una imagen de curso con extensión .jpeg , .jpg , .png , .gif')
  
      }
      //

      
      if ((descripcionCurso.value).length < 10 && (descripcionCurso.value) > 115 ) {
         errores.push('El campo de descripción de curso debe contener menos de 115 caracteres')
      }

    
      if (precioCurso.value == ""){
        errores.push('El campo de precio no puede estar vacío')
  
      }  
    
      if ((precioCurso.value).length < 5 || (precioCurso.value).length > 6 ) {
         errores.push('El campo de precio debe contener 6 dígitos como máximo')
      }

      if (vacantesTotales.value == ""){
        errores.push('El campo de vacantes no puede estar vacío')
  
      }  
      
      if (vacantesTotales.value > 50) {
         errores.push('Las vacantes no pueden superar las 50')
      }


      console.log(errores)

    if (errores.length > 0){

      e.preventDefault();

      let ulErrores = document.querySelector('div.errores ul')

      ulErrores.innerHTML=""

      for (let er of errores){

        ulErrores.innerHTML += "<li>" + er + "</li>"
      }
    }


  })


})