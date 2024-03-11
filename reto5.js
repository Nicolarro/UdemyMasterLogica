// Enunciado Ejercicio 5:
// Cuanto es el X por ciento de X numero?
// Ejemplos : 
// tantoPorCiento(20,100) // Devuelve: 20
// tantoPorCiento(43,897) // Devuelve: 385.71

const tantoPorCiento = (porcentaje, numero) => {
    const total = 100;
    let tantoPorCiento = (porcentaje * numero ) / total;
    console.log(tantoPorCiento);
    return tantoPorCiento;
}   

tantoPorCiento(43,897);
