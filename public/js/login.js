

    let formularioLogin = document.querySelector('.formulario1'); 
    
// VARIABLES Y ETIQUETAS

    let campoEmail = document.querySelector('#email');

    campoEmail.addEventListener('click', function () {
        campoEmail.style.backgroundColor = "#BCB0DE";
        campoEmail.style.color = "black";
    })

    let campoPassword = document.querySelector('#password'); 
   

    campoPassword.addEventListener('click', function () {
        campoPassword.style.backgroundColor = "#BCB0DE";
        campoPassword.style.color = "black";
        console.log(campoPassword);
    })

    // VALIDACIONES

    formularioLogin.addEventListener('submit', function(e){
        e.preventDefault();
        
        let erroresArray = [];
 
        if (campoEmail.value == ""){
            erroresArray.push('El campo de correo electrónico no puede estar vacío')
            
      
          } 
          if (campoPassword.value == ""){
            erroresArray.push('El campo de Contraseña  no puede estar vacío')
      
          } 

        if(campoEmail.value.search("@") == -1){
            // alert('El campo Correo electrónico debe tener el simbolo @.');
            erroresArray.push('El correo electrónico ingresado no es válido.');
        }
        
       console.log(erroresArray);
        // CHEQUEO SI HAY ERRORES EN EL ERRORESARRAY
     
        if(erroresArray.length > 0){
        

            let ulErrores = document.querySelector('div.errores1 ul');
            for(let i = 0; i < erroresArray.length; i++){
                ulErrores.innerHTML += "<li>" + erroresArray[i] + "</li>" 
                console.log("Hola");
            }
        }
    })
