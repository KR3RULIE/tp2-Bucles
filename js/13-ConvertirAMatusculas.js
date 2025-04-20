/* 13- Realiza un script que pida un texto y lo muestre en mayúsculas. */
let cadena = prompt("Ingrese un texto (en minusculas)");
while (cadena !== "salir") {
  alert(cadena.toUpperCase());
  cadena = prompt("`salir` para finalizar el programa\nIngrese un texto (en minusculas)");
}
