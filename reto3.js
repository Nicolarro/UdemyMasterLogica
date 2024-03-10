// Enunciado Ejercicio 3:
// Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella
// La frase y La palabra deben ser parametros de una funcion


let palabra = "nicolas";
let frase = "esta es nicolas de nicolas";
let arreglo = frase.split(" ");
console.log(arreglo);
let coincide = arreglo.includes(palabra).length;
console.log(coincide)
const contarPalabraenFrase = (palabra, frase) => {
    
    let veces = coincide.length;
    console.log(veces);
    return veces;
}

console.log(contarPalabraenFrase(palabra, frase));
