// Enunciado Ejercicio 4:
// Dada una cadena de texto, darle La vuelta e invertir eL orden
// de sus caracteres, sin usar métodos propios del Lenguaje,
// solo estructuras de control.

// Ejemplos:
// invertir( 'hola') // Devuelve: 'aloh '
// invertir( 'victor') // Devuelve: ' rotciv'
// invertir( 'robles') // Devuelve: 'selbor '


let texto = "entrenamiento";

const esReverso = (texto) => {
let reversado = ""
for (let i = texto.length -1  ; i >= 0 ; i--) {
    reversado += texto[i];
}
;
return console.log(reversado);
}


esReverso(texto);