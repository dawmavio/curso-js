//Podemos reultilizar codigo en otras partes del codigo...

function Sumar(valorUno, valorDos) {
    return  valorUno + valorDos;
    
}
valor1 = Number(prompt("Dame el primer valor: ", ""));
valor2 = Number(prompt("Dame el Segundo valor: ", ""));
let suma = Sumar(valor1,valor2);
alert("La suma es: " + suma);