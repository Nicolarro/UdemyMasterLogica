// Enunciado Ejercicio 2:
// Dada una cadena de texto, comprobar si es un palindromo o no.
// Los palíndromos son palabras que se Leen igual aun estando invertido o no
// Por ejemplo: ana, bob, otto, aLLivesseviLLa

const texto = "aba";
let resultado = false;

const esTextoPalindromo = (texto) => {

    if((texto.split("").reverse().join("")) == texto) {
        resultado = true;
    }
    else {
        resultado = false;
    }
    console.log((texto.split("",texto.lenght).reverse().join("")), texto)
    return resultado;
};

let isPal = esTextoPalindromo(texto);

console.log(isPal);