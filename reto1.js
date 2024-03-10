// Enunciado Ejercicio 1:
// Dado un número, devolver su tabla de multiplicar completa.

// Ejecuto esta función:
// Me devuelve este resultado:
// Tabla del 5 #
// 1 x 5 = 5
// 2 x 5 = 10

let numero = 5;
const MULTIPLO_MAXIMO = 10;

const  tablaMultiplicar = (numero)  => {

    let resultado = console.log(`Tabla del ${numero} \n` );
for (let contador = 1 ; contador <= MULTIPLO_MAXIMO ; contador++) {
     resultado += console.log(` ${numero} x ${contador} = ${contador * numero} \n`)
}
return resultado;
}
tablaMultiplicar(5);
