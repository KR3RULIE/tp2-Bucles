/* Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un 
número deberá indicarse con un «alert» y seguir pidiendo números. Al salir 
con “cancelar” deberá indicarse la suma total de los números introducidos. */

let suma = 0;
let num = prompt("Ingrese un numero:");
while (num !== null) {
  if (!isNaN(num) && num.trim() !== "") {
    suma += parseInt(num);
  } else {
    alert("Eso no es un número válido, intenta de nuevo.");
  }

  num = prompt("Introduce un número (Cancelar para terminar):");
}
document.writeln("El suma total es: ", suma);
