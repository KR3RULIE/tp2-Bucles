/* 11- Realiza un script que pida por teclado 3 edades y 3 nombres 
e indique el nombre del mayor. */
let edades = [];
let nombres = [];
let contadora = 3;
do {
  edades.push(parseInt(prompt("Dime que edad tienes")));
  nombres.push(prompt("Dime tu nombre"));
  contadora--;
} while (contadora > 0);

let edadMayor = Math.max(...edades);
let indiceMayor = edades.indexOf(edadMayor);
let nombreMayor = nombres[indiceMayor];
document.writeln(`El mayor es ${nombreMayor}`)