// Ejercicio 1 Crear una función que reciba el array por parametro y retorne un nuevo array con los autos cuyo modelo sea mayor o igual a 2020.


const autos = [
    {
        marca: 'Toyota',
        modelo: 2022,
        color: 'rojo'
    },
    {
        marca: 'Renault',
        modelo: 2015,
        color: 'gris'
    },
    {
        marca: 'Peugeot',
        modelo: 2017,
        color: 'rojo'
    },
    {
        marca: 'Fiat',
        modelo: 2021,
        color: 'negro'
    }
]

function autoXModelo(autos) {

const auto = [];
    
    for (let i = 0; i < autos.length; i++) {

      if (autos[i].modelo >= 2020) {
        auto.push(autos[i]);
      }
    };
    
    return auto;
  }
  
const ResultadoAutoFiltrado = autoXModelo(autos);
console.log(ResultadoAutoFiltrado);
console.log("***********************");


// Ejercicio 2 ordenar de forma descendente en base a la notaPromedio


let estudiantes = [
    {
        nombre: "juan",
        activo: true,
        notaPromedio: 5
    },
    {
        nombre: "maria",
        activo: false,
        notaPromedio: 3
    },
    {
        nombre: "florencia",
        activo: true,
        notaPromedio: 9
    },
    {
        nombre: "carlos",
        activo: false,
        notaPromedio: 8
    },
    {
        nombre: "jose",
        activo: true,
        notaPromedio: 6
    },
]

function estudianteXPromedio(estudiantes) {

    for (let i = 0; i < estudiantes.length - 1; i++) {

      for (let j = 0; j < estudiantes.length - i - 1; j++) {

        if (estudiantes[j].notaPromedio < estudiantes[j + 1].notaPromedio) {
          let temp = estudiantes[j];
          estudiantes[j] = estudiantes[j + 1];
          estudiantes[j + 1] = temp;
        }
      }
    }
    return estudiantes;
  }
  
let ResultadoEstOrdenados = estudianteXPromedio(estudiantes);
console.log(ResultadoEstOrdenados);
console.log("***********************");


/* 
Ejercicio 3 

1) Crear una función que reciba por parámetros la matriz y la posición de una columna 
determinada. La función debe retornar un arreglo con todos los elementos  de esa columna. 

2) Crear una función que reciba por parámetro la matriz y cambie todos los elementos 
impares de la matriz por un número 0 (cero)


*/

let matrix = [
    [1, 4, 7, 4],
    [5, 7, 6, 2],
    [6, 2, 3, 3],
    [2, 6, 8, 1],
]

function columnaMatriz(matrix, col) {
    
const Columna = [];
  
    for (let i = 0; i < matrix.length; i++) {
      Columna.push(matrix[i][col]);
    }
  
    return Columna;
  }
  
const ResultadoColumna = columnaMatriz(matrix, 2);
console.log(ResultadoColumna);


function imparXCero(matrix) {

const nuevaMatriz = [];
  
    for (let i = 0; i < matrix.length; i++) {

      const fila = [];
  
      for (let j = 0; j < matrix[i].length; j++) {

        if (matrix[i][j] % 2 === 1) {
          fila.push(0);
        } else {
          fila.push(matrix[i][j]);
        }


      }
  
      nuevaMatriz.push(fila);
    }
  
    return nuevaMatriz;
  }
  
const nuevaMatriz = imparXCero(matrix);
console.log(nuevaMatriz);