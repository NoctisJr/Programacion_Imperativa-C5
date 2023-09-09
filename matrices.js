let mat = [
    [1, 3, 2],
    [6, 8, 2],
    [7, 1, 2]
]

console.table(mat);
console.log('************************');
console.log(mat[1][2]); // [filas] y [columnas] siempre inician en 0
console.log('************************');


// Recorrer ---> fila 

mat[1][0];
mat[1][1];
mat[1][2];

const recorrerFila = (matriz, fila) => {
    let acc = 0

    for (let i = 0; i < matriz[fila].length; i++) {
       acc +=  matriz[fila][i];
    };

    return acc;
};

let resultadoRecorrerFila = recorrerFila(mat, 2);
console.log(resultadoRecorrerFila);
console.log('************************');

// Recorrer ---> columna

const recorrerColumna = (matriz, columna) => {
    let acc = 0

    for (let i = 0; i < matriz.length; i++) {

        if (matriz[i][columna] !== undefined) { // validar si la longitud de la fila cambia y evitar el resultado NaN
            acc +=  matriz[i][columna];
        }
       
    };

    return acc;
};

let resultadorecorrerColumna = recorrerColumna(mat, 1);
console.log(resultadorecorrerColumna);
console.log('************************');


//Solo cuando las matrices son cuadradas

// Recorrer ---> diagonal principal

const recorrerPrincipal = (mat) => {
    for(let i = o; i < mat.length; i++){
        mat[i][i];
    };

};

// Recorrer ---> diagonal secundaria

const recorrerSec = (mat) => {
    for(let i = o; i < mat.length; i++){
        mat[i][mat.length - (i+1)]
    };

};

// Recorrer ---> matriz completa (doble for)

for (let col=0;col<matriz[0].length;col++){
    
    for(let fila=0;fila<matriz[fila].length;fila++){
    console.log(matriz[fila][col]);
    }
}
    