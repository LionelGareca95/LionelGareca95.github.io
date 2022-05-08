const form = document.querySelector('form')

	form.nombre.addEventListener('blur', ev => {
		//Entre 3 y 15 
		const string = ev.target.value
		let msj = '';//Por defecto el mensaje es vacio -> se entiende que esta correcta la validacion

		if(string.length < 3){ //Si algo es incorrecto cambio el valor del msj por lo que quiera mostrar
			msj = 'Debes escribir al menos 3 caracteres'

		}else if(string.length > 15){
			msj = 'Debes escribir menos de 15 caracteres'

		}

		ev.target.setCustomValidity(msj) 
		ev.target.parentElement.querySelector(".errMsj").innerText = msj
		//Si la msj sigue "" -> validacion OK
		//Si msj tiene texto -> validacion ERROR

		
		if(msj === ""){
			ev.target.classList.add('valid')
			ev.target.classList.remove('invalid')
		}else{
			ev.target.classList.add('invalid')
			ev.target.classList.remove('valid')
		}
	/*
		const classAdd = (msj === "") ? 'valid' : 'invalid'
		const classRemove = (msj === "") ? 'invalid' : 'valid'
		ev.target.classList.add(classAdd)
		ev.target.classList.remove(classRemove)
	*/
	})

    /*--------------------------------------------------------------------------------------------*/

	form.message.addEventListener('blur', ev => {
		//Entre 3 y 15 
		const string = ev.target.value
		let msj = '';//Por defecto el mensaje es vacio -> se entiende que esta correcta la validacion

		if(string.length < 3){ //Si algo es incorrecto cambio el valor del msj por lo que quiera mostrar
			msj = 'Debes escribir al menos 3 caracteres'

		}else if(string.length > 80){
			msj = 'Debes escribir menos de 80 caracteres'

		}

		ev.target.setCustomValidity(msj) 
		ev.target.parentElement.querySelector(".errMsj").innerText = msj
		//Si la msj sigue "" -> validacion OK
		//Si msj tiene texto -> validacion ERROR

		
		if(msj === ""){
			ev.target.classList.add('valid')
			ev.target.classList.remove('invalid')
		}else{
			ev.target.classList.add('invalid')
			ev.target.classList.remove('valid')
		}
	/*
		const classAdd = (msj === "") ? 'valid' : 'invalid'
		const classRemove = (msj === "") ? 'invalid' : 'valid'
		ev.target.classList.add(classAdd)
		ev.target.classList.remove(classRemove)
	*/
	})