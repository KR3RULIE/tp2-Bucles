/* 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar 
un mensaje que ya puede conducir, si la edad ingresada no es un número válido 
indicarlo en un mensaje */
let edad;
do {
  edad = parseInt(prompt("*0 para finalizar el programa*\n¿Qué edad tienes?"));

  if (edad >= 18 && edad < 100) {
    alert("Ya puedes conducir");
  } else if (edad != parseInt(edad)) {
    alert("Debes ingresar un número (entero)");
  } else if (edad < 0) {
    alert("Debes ingresar un numero positivo");
  } else if (edad >= 100) {
    alert("Lo sentimos! No estas encondiciones optimas para poder conducir");
  } else {
    alert("No eres mayor de edad, no puedes conducir");
  }
} while (edad != 0);
