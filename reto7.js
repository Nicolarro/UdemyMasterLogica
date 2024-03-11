// Enunciado Ejercicio 7:
// Dados dos números, devolver cuantos números IMPARES
// hay entre ellos.


let numero1 = 1;
let numero2 = 9;
let conteoNumero = 0;
let numeroPar = [];

const numerosImpares = (numero1, numero2) => {

    for (numero1; numero1 <= numero2; numero1++) {
        debugger;
        if(numero1 % 2 != 0) {
            conteoNumero++
            numeroPar.push(numero1); 
        }
    }
    console.log(`La cantidad de numeros pares es : ${conteoNumero}`)
    return console.log(numeroPar);
}

numerosImpares(numero1, numero2);