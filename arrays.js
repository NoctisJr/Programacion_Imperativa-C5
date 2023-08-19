
let numeroDeLASuerte = [15, 26, 32,15]; // array

//console.log(numeroDeLASuerte[2]);
//console.log(numeroDeLASuerte[longitud-1]);

let palabras = ["casa", "avion", "pera", "manzana"];

console.log(palabras[2]);

palabras.push("banana", 12);

console.log(palabras);

palabras.pop(); // elimina y guarda el valor

const mostrarElementos = () => {

    for (let i = 0; i < palabras.length; i++) {
        console.log(palabras[i])
    };
};

mostrarElementos();

//-----------------------------------------------

let nombre = "Juan Cruz"; // string
console.log(nombre[2]);

nombre = nombre.toUpperCase(); // transforma a mayuscula

console.log(nombre);

console.log(nombre.includes("Z")); // Busca un caracter

console.log(nombre.indexOf("Z")); // Busca el indice del cerecter
