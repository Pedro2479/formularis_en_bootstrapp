const form = document.getElementById('modalLRForm');



function validar(){
    var modalEmail = document.getElementById('modalMail');  
  

	if(modalMail.value == "") {
		modalMail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Es campo es obligatorio";
      
    }else if(!validar_email(modalMail.value)){
		modalMail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "El email no cumple el formato";
	
    } if(modalPassword.value == "") {
		modalPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Es campo es obligatorio";
		
	}if(modalPassword.value != modalRPassword.value ) {
		modalRPassword.classList.add("is-invalid");
		document.getElementById("errorRPassword").textContent = "Los campos no coinciden";
		
	} if(modalProvince.value == "") {
		modalProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "La provincia es obligatoria";
		
	}


   
}

function validarLogin(){
    var modalEmail = document.getElementById('modalMail');  
  

	if(modalLMail.value == "") {
		modalLMail.classList.add("is-invalid");
		document.getElementById("errorLMail").textContent = "Es campo es obligatorio";
      
    }else if(!validar_email(modalLMail.value)){
	   modalLMail.classList.add("is-invalid");
		document.getElementById("errorLMail").textContent = "El email no cumple el formato";
	
    } if(loginPassword.value == "") {
		loginPassword.classList.add("is-invalid");
		document.getElementById("errorLoginPassword").textContent = "Es campo es obligatorio";
		
    }
}



  form.addEventListener('blur', (event) => {
       event.preventDefault();
        if(event.target.value!='') event.target.classList.remove('is-invalid');
	
    }, true);
    

    function validar_email(email) {
        var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email) ? true : false;
    }
    



