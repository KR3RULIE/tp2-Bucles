/* 11- Realiza un script que pida por teclado 3 edades y 3 nombres 
e indique el nombre del mayor. */
// let edades = [];
// let nombres = [];
// let contadora = 3;
// do {
//   edades.push(parseInt(prompt("Dime que edad tienes")));
//   nombres.push(prompt("Dime tu nombre"));
//   contadora--;
// } while (contadora > 0);

// let edadMayor = Math.max(...edades);
// let indiceMayor = edades.indexOf(edadMayor);
// let nombreMayor = nombres[indiceMayor];
// document.writeln(`El mayor es ${nombreMayor}`)

let controladora = 1;
let nombre1 = "";
let edad1 = 0;
let nombre2 = "";
let edad2 = 0;
let nombre3 = "";
let edad3 = 0;
do {
  switch (controladora) {
    case 1:
      nombre1 = prompt("Dime el nombre de la primera persona:");
      edad1 = parseInt(prompt("Dime la edad de la primera persona:"));
      break;
    case 2:
      nombre2 = prompt("Dime el nombre de la segunda persona:");
      edad2 = parseInt(prompt("Dime la edad de la segunda persona:"));
      break;
    case 3:
      nombre3 = prompt("Dime el nombre de la tercera persona:");
      edad3 = parseInt(prompt("Dime la edad de la tercera persona:"));
      break;

    default:
      document.writeln("No se hallaron casos");
      break;
  }
  controladora++;
} while (controladora <= 3);

if (edad1 > edad2 && edad1 > edad3) {
  alert(`El mayor de los estre es ${nombre1}`);
} else if (edad2 > edad1 && edad2 > edad3) {
  alert(`El mayor de los estre es ${nombre2}`);
} else {
  alert(`El mayor de los estre es ${nombre3}`);
}