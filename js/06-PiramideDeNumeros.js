/* 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma }
1
22
333
4444
55555
666666
*/

for (let i = 0; i < 31; i++) {
  let fila = "";
  for (let t = 0; t < i; t++) {
    fila += i + " ";
  }
  document.writeln(`<p> ${fila} </p>`);
}
