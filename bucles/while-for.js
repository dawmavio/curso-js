//crear bucles

"use strict";
/*
let i = 3;
while(i <= 3){
    alert(i);
    i--;

}
*/
/*
let i = 0;
do{
    alert(i);
    i++;
}while(i);
*/
/*
for(let i =0; i <=5;i++){
alert(i);
}
*/
let numero = Number(prompt("Dame un numero: ",""));
let suma ="";
BucleNum: for( let i = numero ; i <= 10 ;i++){
    suma = i < 10 ? suma +=i + " ," : suma += i + " "; 
}
alert(suma);

