var nombre = document.getElementById("tfNombre");
var apellido = document.getElementById("tfApellidos");
var correo = document.getElementById("tfCorreo");
var telefono = document.getElementById("tfTelefono");
var asunto = document.getElementById("tfAsunto");
var mensaje = document.getElementById("tfMensaje");
var error = document.getElementById("error");

function validarFormulario(){

    if(nombre.value === null || nombre.value === ""){
        alert("Olvidaste incluir tu nombreciillo")

    } 

    if(apellido.value === null || apellido.value === ""){
        alert("Necesitamos tu apellidillo")

    } 

    if(correo.value === null || correo.value === ""){
        alert("No podemos continuar sin tu correillo")

    } 

    if(telefono.value === null || telefono.value === ""){
        alert("¿Por qué no quieres brindarnos tu telefonillo?")

    } 

    if(asunto.value === null || asunto.value === ""){
        alert("¿Qué pasó con el asuntillo?")

    } 

    if(mensaje.value === null || mensaje.value === ""){
        alert("Pues sin mensajillo, no hay respuestilla")

    } 


    return false;


}