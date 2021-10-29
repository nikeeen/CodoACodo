// nombres: nombre
// apellido: apellido
// dirección: direccion
// altura: numeropuerta
// piso: piso
// numero de DNI: dni

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
    if(nombre.value.length <6){
        alertas += `El nombre no es valido <br>` 
        entrar=true
    }
    if(!regexEmail.test(mail.value)){
        alertas += `El email no es valido <br>` 
        entrar=true
    }
    if(entrar){
        parrafo.innerHTML = alertas
    }else{
        parrafo.innerHTML = "Enviado"
    }
})

