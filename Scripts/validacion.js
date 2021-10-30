const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const direccion = document.getElementById("direccion")
const numeropuerta = document.getElementById("numeropuerta")
const piso = document.getElementById("piso")
const dni = document.getElementById("dni")
const form = document.getElementById("form")
const parrafo = document.getElementById("alertas")

form.addEventListener("submit", e=> {
    e.preventDefault()
    let alertas =""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <4){
        alertas += `- El nombre no es válido, tiene que tener más de 3 caracteres <br>` 
        entrar=true
    }
    if(apellido.value.length <4){
        alertas += `- El apellido no es válido, tiene que tener más de 3 caracteres <br>` 
        entrar=true
    }
    if(direccion.value.length <4){
        alertas += `- La dirección no es válida, tiene que tener más de 3 caracteres <br>` 
        entrar=true
    }
    if(numeropuerta.value <0){
        alertas += `- La altura no es correcta, debe indicar un número positivo <br>` 
        entrar=true
    }
    if(!regexEmail.test(mail.value)){
        alertas += `- El email no es valido <br>` 
        entrar=true
    }
    if(dni.value.length <7){
        alertas += `- El DNI debe tener más de 7 dígitos <br>` 
        entrar=true
    }
    if(piso.value.length >3){
        alertas += `- El piso es incorrecto<br>` 
        entrar=true
    }
    if(entrar){
        parrafo.innerHTML = alertas
    }else{
        parrafo.innerHTML = "Enviado"
    }
})


