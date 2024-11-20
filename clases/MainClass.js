'use strict';

/*   ----   C L A S E S ---- 
Todas las clases tienen sus metodos contructor y los personalizados.
 *class NombreClase {
    constructor(){}

    medoto1(){}
    metodo2(){}
 } 
 */

 class Coche{
    constructor(propietario,marca,modelo,anio_fabrica){ //Todos los atributos
        this._propietario = propietario;
        this._marca = marca;
        this._modelo = modelo;
        this._anio_fabrica = anio_fabrica;
    }
    //Metodos
    dataCoche(){
        return `Propietario: ${this._propietario}\n\nEl año de fabricacion de tu ${this._marca} ${this._modelo} es el ${this._anio_fabrica}
        `; //Devuelve una cadena de texto con una suma de valores.
    }

    //metogos GET y SET -> uno sirve para coger los datos para luego mostrarlo y el otro "SET" sirve para modiificarlo.

    //GET
    get marca(){
        return this._marca;
    }
    get duenio(){
        return this._propietario;
    }
    

    
    //SET
    set marca(NuevaMarca){
        return this._marca = NuevaMarca; //le devlvemos el nuevo valor añadido al atributo marca.  marca -> NuevaMarca
    }
 }
 //creamos los objetos y les añadimos valores a sus atributos.
 //En este caso el objeto -->> Coche(marca,modelo,anio_fabricacion)
 let coche1 = new Coche('Mavio','Peugeot','206xs','2004'); //imagina obtener datos de una base de dats y estos fuesen.
 let cche2 = new Coche('Alicia','Fiat','500','2014');
 let coche3 = new Coche('Antonio','Ferrari','Huracán 6.5','2019');

 // alert(cocheAnto.dataCoche()); //para mostrar el valor agregado seria cogiendo el objeto creardo,  asignarle el metodo ( -- funcion() --)


//Para llamar al objeto cocheMavio
coche1.marca; //mas facil e intuitivo para acceder al valor concreto usando un get

alert(coche3.dataCoche());