/* 16- Realiza un script que pida una cadena de texto y la devuelva al 
revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”. */

let cadena = prompt("Dime algo:")
let cadenaRevers = "";

for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaRevers += cadena.charAt([i])
}

document.writeln(cadenaRevers)