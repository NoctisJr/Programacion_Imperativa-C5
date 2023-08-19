let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

// Función para convertir el contenido de cada elemento a mayúsculas
function convertirMayusculas(array) {
  return array.map(pelicula => pelicula.toUpperCase());
}

const ultimoElemento = peliculasAnimadas.pop();

function combinarArrays(array1, array2) {
  return array1.concat(array2);
}
const todasLasPeliculas = convertirMayusculas(combinarArrays(peliculas, peliculasAnimadas));

//calificaciones de los usuarios
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

//comparar las calificaciones
function compararCalificaciones(calificaciones1, calificaciones2) {
  if (calificaciones1.length !== calificaciones2.length) {
    return "Diferentes";
  } else {
    for (let i = 0; i < calificaciones1.length; i++) {
      if (calificaciones1[i] !== calificaciones2[i]) {
        return "Diferentes";
      }
    }
    return "Iguales";
  }
}
const resultadoComparacion = compararCalificaciones(asiaScores, euroScores);

console.log(todasLasPeliculas);
console.log(resultadoComparacion);