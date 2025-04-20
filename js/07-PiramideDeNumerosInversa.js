/* 7- Haz un script que escriba una pirámide inversa de los números del 1 al 
número que indique el usuario (no mayor de 50)  de la siguiente 
forma : (suponiendo que indica 30). */

let vueltas = parseInt(prompt("Ingrese el numero de vueltas (menor a 50)"));

if (vueltas >= 0 && vueltas <= 50) {
  for (let i = vueltas; i > 0; i--) {
    let fila = "";
    for (let j = 0; j < i; j++) {
      fila += i + " ";
    }
    document.writeln(`<p>${fila}</p>`);
  }
} else {
  alert("Debes ingresar un numero entre 0 y 50");
}
