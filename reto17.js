// Dado un numero , mostrar los numeros de 1 hasta el numero 
// Pero para multiplos de tres imprimir "buzz" en lugar del numero y para los multiplos de cinco imprimir 
// "lightyear". Para multiplos de tres y cinco imprimen "BuzzLightYear"

let numero = 10;
let resultado = "";
let totalResultado = "";

const mostrarNumero = (numero) => {
  for (let index = 0; index <= numero; index++) {
    let ES_MULTIPLO_3 = index % 3 == 0;
    let ES_MULTIPLO_5 = index % 5 == 0;
    if (ES_MULTIPLO_3) {
      resultado = "buzz";
    } else if (ES_MULTIPLO_5) {
      resultado = "lightyear";
    } else if (ES_MULTIPLO_3 && ES_MULTIPLO_5) {
      resultado = "BuzzLightYear";
    } else {
      resultado = index;
    }
    totalResultado += `Los numeros son: ${resultado} \n`;
  }
  return console.log(totalResultado);
};

mostrarNumero(numero);