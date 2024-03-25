// Dado un string y un numero, repetir el string tantas veces como el numero indique 


let texto = "hola";
let numero = 10;
let resultado= "";

const repiteString = (texto, numero) => {

    for (index = 0; index < numero ; index++) {
         resultado = texto.concat(resultado);
    }
    return console.log(resultado);

}

repiteString(texto, numero);
