/* 15- Realiza un script que cuente el número de vocales que tiene un texto. */

let cadena = prompt("Dime algo");
let comparar = "";
let nuevaCadena = "";
for (let i = 0; i < cadena.length; i++) {
  comparar = cadena.charAt([i]).toLowerCase();
  if (
    comparar === "a" ||
    comparar === "e" ||
    comparar === "i" ||
    comparar === "o" ||
    comparar === "u"
  ) {
    nuevaCadena += comparar;
  }
}

if (nuevaCadena.length > 0) {
  document.writeln(`Hay ${nuevaCadena.length} vocales`);
}
