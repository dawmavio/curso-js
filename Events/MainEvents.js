/**
 * ---- EVENTS EN EL DOM
 * 
 * ***** MOUSE EVENTS: ****
 * click
dblclick
mousedown
mouseup
mousemove
mouseover
mouseout
mouseenter
mouseleave
wheel
contextmenu

**** Keyboard Events (Eventos del teclado): ***
keydown
keyup
keypress (obsoleto, no se recomienda)
-------------------------------------------
************Form Events (Eventos de formularios):
Estos son los eventos más usados en formularios, ahora con todos incluidos:

submit
reset
focus
blur
input
change
invalid

------------------------------
CSS Events (Eventos relacionados con CSS y estilos):
transitionend (cuando termina una transición CSS)
animationstart (cuando comienza una animación CSS)
animationend (cuando termina una animación CSS)
animationiteration (cuando una animación CSS repite un ciclo)
-------------------------------------

 **** Document Events (Eventos del documento): ****
DOMContentLoaded
load
unload
resize
scroll

-----
Otros eventos comunes:
Clipboard:

copy
cut
paste
Drag and Drop:

drag
dragstart
dragover
dragenter
dragleave
dragend
drop
 */

let btn = document.getElementById("button1");
btn
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6