var nombre = document.getElementById("tfNombre");
var apellido = document.getElementById("tfApellidos");
var correo = document.getElementById("tfCorreo");
var telefono = document.getElementById("tfTelefono");
var asunto = document.getElementById("tfAsunto");
var mensaje = document.getElementById("tfMensaje");
var error = document.getElementById("error");

function validarFormulario(){

    if(nombre.value === null || nombre.value === ""){
        alert("Ingresa tu nombre")

    } 

    if(apellido.value === null || apellido.value === ""){
        alert("Ingresa tu apellido")

    } 

    if(correo.value === null || correo.value === ""){
        alert("Ingresa tu mail")

    } 

    if(telefono.value === null || telefono.value === ""){
        alert("Ingresa tu teléfono")

    } 

    if(asunto.value === null || asunto.value === ""){
        alert("Ingresa el asunto para ayudarnos a ayudarte")

    } 

    if(mensaje.value === null || mensaje.value === ""){
        alert("No estás mandando ningún mensaje")

    } 


    return false;


}