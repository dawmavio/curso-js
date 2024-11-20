"use strict";

let listaFrutas = [
    "Uva",
    "Pera",
    "Manzana",
    "Melón"
];

//Metodos para el array
/*
push: añade al final del array
pop: elimina el ultimo elemento del array
shift: elimina el primer elemento del array
unshift: añade un elemento al princiio -> igual que push pero al inicio. array.unshift("elemento_para_array");
*/
//listaFrutas.push("zanhoria"); //añade a la ultima posicion este valor y elemento.
//listaFrutas.pop(); elimina el ultimno elemento

//alert(listaFrutas);


// ----- M A T R I C E S -----
///matrices son arrays dentro de arrays:
let matriz = [
    [0,1,2],
    ["Mavio","Ali","Tanila"],
    [12,3.14,"Manzana"]
];
let valorMatriz = String(matriz[1][1]); //Si quisieramos pasar a String los valores de la matriz
alert(valorMatriz);