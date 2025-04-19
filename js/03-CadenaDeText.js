/* 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al 
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm()
*/
let resultado = "";
let continuar = true;

while (continuar) {
  let texto = prompt("Escribe algo:");
  if (texto !== null) {
    if (resultado === "") {
      resultado = texto;
    } else {
      resultado += " - " + texto;
    }
  }
  continuar = confirm("¿Quieres seguir escribiendo?");
}
document.writeln(resultado);
