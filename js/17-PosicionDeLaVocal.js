/* 17- Realiza un script que muestre la posición de la primera vocal 
de un texto introducido por teclado. */
let cadena = prompt("Dime algo");
let comparar = "";
let nuevaCadena = "";
for (let i = 0; i < cadena.length; i++) {
  comparar = cadena.charAt(i).toLowerCase();
  if (
    comparar === "a" ||
    comparar === "e" ||
    comparar === "i" ||
    comparar === "o" ||
    comparar === "u"
  ) {
    nuevaCadena += comparar;
    break;
  }
}

if (nuevaCadena.length > 0) {
  document.writeln(`La vocal "${nuevaCadena}" está en la posición 1`);
} else {
    alert("No se hallaron vocales")
}
