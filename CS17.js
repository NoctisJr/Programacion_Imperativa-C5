/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

let matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ];
  
  /**
   * Luego, escribe un algoritmo para sumar todos
   * los numeros en la matriz.
   */
  
const sumarMatriz = (mat) => {
    
let sumar = 0;

    for (var i = 0; i < mat.length; i++) {
      for (var j = 0; j < mat[i].length; j++) {
        sumar += mat[i][j];
      }
    }
return sumar;
}

  let resultadosumarMatriz = sumarMatriz(matriz);
  console.log(resultadosumarMatriz);