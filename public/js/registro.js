window.addEventListener('load', function(){

    let formularioDeRegistro = document.querySelector('.formulario'); 

// CREO VARIABLES Y HAGO LAS VALIDACIONES

    formularioDeRegistro.addEventListener('submit', function(e){
        
        let erroresArray = [];

        let campoNombre = document.getElementById('nombre');      

        if(campoNombre.value == '' || campoNombre.value.length < 3){
            erroresArray.push('El campo Nombre debe estar completo.');
        }

        let campoApellido = document.getElementById('apellido'); 

        if(campoApellido.value == '' || campoApellido.value.length < 3){
            erroresArray.push('El campo Apellido debe estar completo.');
        }

        let campoNombreUsuario = document.getElementById('nombreUsuario'); 
        
        if(campoNombreUsuario.value == ''){
            // alert('El campo Nombre de Usuario debe estar completo.');
            erroresArray.push('El campo Nombre de Usuario debe estar completo.');
        } else if(campoNombreUsuario.value.length < 3){
            // alert('El campo Nombre de Usuario debe tener al menos 3 caracteres.');
            erroresArray.push('El campo Nombre de Usuario debe tener al menos 3 caracteres.');
            }

        let campoCorreo = document.getElementById('correo'); 

        if(campoCorreo.value.search("@") == -1){
            // alert('El campo Correo electrónico debe tener el simbolo @.');
            erroresArray.push('El correo electrónico ingresado no es válido.');
        }

        let campoPassword = document.getElementById('password'); // let campoPassword = document.getElementId('password');
        let passCheck = /^[A-Za-z]\w{7,15}$/;
        
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