// Dado un array de objetos de peliculas (titulo, director, vista)
// mostrar todas las peliculas indicando cual has visto y cual no

const peliculas = [
  {
    titulo: "The lord of the rings",
    director: "JJ Adams",
    vista: "si",
  },
  {
    titulo: "El guason",
    director: "Stanly Kubric",
    vista: "si",
  },
  {
    titulo: "The lord of the rings4",
    director: "JJ Adams",
    vista: "no",
  },
];

// const muestroPeliculas = (peliculas) => {

// }


const verPelicula = (peliculas) => {
    let nombre = "";
  const peliculasSi = peliculas.filter((pelicula) => pelicula.vista === "si");

  peliculas.forEach(pelicula => {
    if(peliculasSi){
        resultado = console.log(`Las peliculas vistas fueron ${peliculasSi[].titulo}`);
    }
    else{
        resultado= console.log(`Te faltan por ver: ${pelicula.vista}`);
    }
});
};

verPelicula(peliculas);
