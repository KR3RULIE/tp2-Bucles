/* 8- Crea script para generar pirámide siguiente con los números del 1 al número que 
indique el usuario (no mayor de 50) */
let vueltas = parseInt(prompt("Ingrese el numero de vueltas (menor a 50)"));

if (vueltas >= 0 && vueltas <= 50) {
  for (let i = 1; i <= vueltas; i++) {
    let fila = "";
    for (let j = 1; j <= i; j++) {
      fila += j + " ";
    }
    document.writeln(`<p>${fila}</p>`);
  }
} else {
  alert("Debes ingresar un numero entre 0 y 50");
}