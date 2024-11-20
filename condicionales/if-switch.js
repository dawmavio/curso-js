"use strict";

let a = Number(prompt("Dime tu edad:",""));//Con esto pasamos a number
let mensaje ="";
/**
 *
if (a == 0 || a == null || typeof (a) != Number) {

    alert("Vuelve a actualizar la pagina e introduce un valor!");
} else {
    if (a % 2) {
        alert("Introduciste un numero ImPAR!!");
    } else {
        alert("Introduciste un numero PAR!");
    }
}
 * 
 * * */

//Forma mas moderna de escrivir un IF

mensaje = a < 18 ? "Eres menor" : "Eres mayor";
alert(mensaje);

//****************************** */
/*
switch (a) { //Todo lo que entra en el prompt es string y con un switch el caso siempre será estricto
    case "Mavio":
        alert("eres el usuario admin");
        break;
    case "Antonio":
        alert("Eres un trabajador a media jornada");
        break;
    
    default:
        alert("Porvor, inserta un nombre");
        break;

}*/