// Enunciado Ejercicio 9:
// Dados dos arrays, devolver array con solo Los elementos comunes
// entre ambos.

let array1 = [1,3,5,7];
let array2 = [2,3,5,9,10];
let newArray = [];
let coincideItem = [];

const elementosComunes = (array1,array2) => {
    array1.sort();
    array2.sort();
        debugger;
        coincideItem = array1.filter((item) => { return array2.includes(item)})

    return coincideItem;

}
console.log(elementosComunes(array1,array2));
