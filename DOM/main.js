"use strict";
// DOM -->> DOCUMENT OBJECT MODEL
// document.getElementById(); --> es en directo y puedes añadir cosas ...
// document.querySelector();
// document.querySelectorAll(); -->  es estatico
/*
const contain_div = document.getElementsByClassName("content");
document.body.append(document.createElement('div'));
*/

//  ---- MODIFICAR DOCUMENTO HTML CON JS
//creamos el div para el alerta

//node.append
//node.prepend
//node.before
//node.after
//node.replaceWith

let ol = document.getElementById("ol");
ol.before("Antes") ;
ol.after("Despues");

let li = document.createElement("li");
li.innerHTML= "Primero";
ol.prepend(li);
let li2 = document.createElement("li");
li2.innerHTML= "Ultimno";

ol.append(li2);