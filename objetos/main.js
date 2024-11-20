"use strict";

class worker {
    constructor(nombre,puesto,nivel,contrato){
        this._nombre = nombre;
        this._puesto = puesto;
        this._nivel = nivel;
        this._contrato = contrato;
    }

    messageAlertName(){
        return alert(this._nombre);
    }
    messageAlerContrato(){
        return alert(this._contrato);
    }
    messageAlertPuesto(){
        return alert(this._puesto);
    }
    messageAlertNivel(){
        return alert(this._nivel);
    }
}

let worker1 = new worker("Mavio","Azafato",4,64);

worker1.messageAlertNivel();