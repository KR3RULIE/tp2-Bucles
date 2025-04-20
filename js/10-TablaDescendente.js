/* 10- Realiza un script que pida número de filas y columnas y escriba una tabla. 
Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden 
descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1. */

let filas = parseInt(prompt("Dime el número de filas:"));
let columnas = parseInt(prompt("Dime el número de columna:"));
const maxVueltas = filas * columnas;
let numero = maxVueltas;

for (let i = filas; i >= 1; i--) {
  for (let j = columnas; j >= 1; j--) {
    document.writeln(numero + " ");
    numero--;
  }
  document.writeln("<br>");
}
