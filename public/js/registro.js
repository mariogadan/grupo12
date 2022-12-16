window.addEventListener('load', function(){

    let formularioDeRegistro = document.getElementById('formulario'); 

// VARIABLES Y ETIQUETAS

    let campoNombre = document.getElementById('campoNombre');
        
    campoNombre.addEventListener('click', function () {
        campoNombre.style.backgroundColor = "#BCB0DE";
        campoNombre.style.color = "black";
    })

    let campoApellido = document.getElementById('campoApellido'); 

    campoApellido.addEventListener('click', function () {
        campoApellido.style.backgroundColor = "#BCB0DE";
        campoApellido.style.color = "black";
    })

    let campoNombreUsuario = document.getElementById('campoNombreUsuario');
    
    campoNombreUsuario.addEventListener('click', function () {
        campoNombreUsuario.style.backgroundColor = "#BCB0DE";
        campoNombreUsuario.style.color = "black";
    })

    let campoCorreo = document.getElementById('campoCorreo');
    
    campoCorreo.addEventListener('click', function () {
        campoCorreo.style.backgroundColor = "#BCB0DE";
        campoCorreo.style.color = "black";
    })

    let campoPassword = document.getElementById('campoPassword'); // let campoPassword = document.getByElementId('password');
    let passCheck = /^[A-Za-z]\w{7,15}$/;

    campoPassword.addEventListener('click', function () {
        campoPassword.style.backgroundColor = "#BCB0DE";
        campoPassword.style.color = "black";
    })


// VALIDACIONES

    formularioDeRegistro.addEventListener('submit', function(e){
        
        let erroresArray = [];


        if(campoNombre.value == '' || campoNombre.value.length < 3){
            erroresArray.push('El campo Nombre debe estar completo.');
        }

        if(campoApellido.value == '' || campoApellido.value.length < 3){
            erroresArray.push('El campo Apellido debe estar completo.');
        }
        
        if(campoNombreUsuario.value == ''){
            // alert('El campo Nombre de Usuario debe estar completo.');
            erroresArray.push('El campo Nombre de Usuario debe estar completo.');
        } else if(campoNombreUsuario.value.length < 3){
            // alert('El campo Nombre de Usuario debe tener al menos 3 caracteres.');
            erroresArray.push('El campo Nombre de Usuario debe tener al menos 3 caracteres.');
            }

        if(campoCorreo.value.search("@") == -1){
            // alert('El campo Correo electrónico debe tener el simbolo @.');
            erroresArray.push('El correo electrónico ingresado no es válido.');
        }
        
        if(campoPassword.value.match(passCheck) == null){
            // alert('El campo Contraseña debe contener entre 8 y 16 caracteres alfanuméricos.');
            erroresArray.push('El campo Contraseña debe contener entre 8 y 16 caracteres alfanuméricos.');
        }


        // CHEQUEO SI HAY ERRORES EN EL ERRORESARRAY
        
        if(erroresArray.length > 0){
            e.preventDefault();

            let ulErrores = document.querySelector('div.errores1 ul');
            for(let i = 0; i < erroresArray.length; i++){
                ulErrores.innerHTML += "<li>" + erroresArray[i] + "</li>" 
            }
        }
    })
})