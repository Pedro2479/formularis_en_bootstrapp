const forms = document.getElementById('formSearch');

function validarSearch(){
	var acumErrores = 0;

    var modalSearch = document.getElementById('search');  

    if(modalSearch.value == "") {
		modalSearch.classList.add("is-invalid");
		document.getElementById("errorSearch").textContent = "el campo on puede estar bacio";
	
	} else if(modalSearch.value.length <3) {
		modalSearch.classList.add("is-invalid");
		document.getElementById("errorSearch").textContent = "el campo deber tener ms de 3 caracteres";
	
	}
	if (acumErrores > 0){
        return false;
    }else{
		return true;
	}

}
forms.addEventListener('blur', (event) => {
   
    event.preventDefault();
	if(event.target.value!='') event.target.classList.remove('is-invalid');

}, true);

