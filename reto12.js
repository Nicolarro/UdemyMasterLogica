// Enunciado Ejercicio 12: 
// Dado un numero mostrar todos los numeros desde ese al 0 de 8 en 8 en una 
// lista con guiones donde cada numero debe empezar por n°

let numero = 100;
let mensaje = "";
let resultado = "";
const NUMERO_MENOR = 0;

const listaNumeros = (numero) => {

  while (numero > 0) {
    mensaje = `-n° ${numero}  \n`;
    resultado += mensaje;
    numero -= 8;
  }
  return console.log("El resultado final es : \n", resultado);
};

listaNumeros(numero);