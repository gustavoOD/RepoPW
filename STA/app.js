/*Aplicacion que me guarde datos en una table*/
var nombre;
var apellido;
var telefono;
var email;
var direccion;
var fecha;
var nota;
var tabla = document.getElementById("table");
var boton = document.getElementById("guardar");
var contador = 1;
/*console.log("Java Scrip Funcionando")*/

guardar.addEventListener("click",agregarATabla)

function agregarATabla(){
    nombre=document.getElementById("nombre").value;
    console.log(nombre);
}
