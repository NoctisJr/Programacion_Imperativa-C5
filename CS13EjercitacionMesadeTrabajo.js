//Loop de pares

function loopDePares(numero) {
    for (let i = 0; i <= 100; i++) {
      if ((i + numero) % 2 === 0) {
        console.log("El número " + i + " es par");
      } else {
        console.log(i);
      }
    }
}
loopDePares(0);
console.log("*****************************");

//Loop de impares con palabra

let loopDeImpares = (numero, palabra) => {
    for (let i = 0; i <= 100; i++) {
        
        if ((i+numero) % 2===0) {
            console.log(palabra);   
        } else {
            console.log(i);
        }
    }
}
console.log(loopDeImpares(6,"hola"));
console.log("*****************************");

//Sumatoria

let sumatoria = (numero) => {
    let suma = 0;
    for (let i = 1; i <=numero; i++) {
        suma +=i;
    }
    return suma;
}
let resultado = sumatoria(5);
console.log(resultado);
console.log("*****************************");

//Nuevo arreglo

let nuevoArreglo = (numero) => {
    arreglo = [];

    for (let i = 1; i <=numero; i++) {
        arreglo.push(i);
    }

    return arreglo;
}
let resultadoNuevoArreglo = nuevoArreglo(5);
console.log(resultadoNuevoArreglo);
console.log("*****************************");

// Similar String.split()

let split = (string) => {
    resultado = [];
    for (let i = 0; i < string.length; i++) {
        resultado.push(string.charAt(i));
    }
    return resultado;
}
let resultadoSplit  = split("hola");
console.log(resultadoSplit);
console.log("*****************************");

// Manejando dos arreglos

let arrayHandler = (arreglo1, arreglo2) => {
    if (arreglo1.length === arreglo2.length) {
        for (let i = 0; i < arreglo2.length; i++) {
            console.log(`Soy ${arreglo1[i]} y yo soy ${arreglo2[i]}`);
        }
    } else {
        console.log("Error, los arreglos no tiene la misma longitud");
    }
}

console.log(arrayHandler([1,2,3,4], ['h','o','l','a']));
console.log("*****************************");

// Palíndromo

let palindromo = (palabra) => {
    palabra = palabra.toLowerCase();
    palabra2 = palabra.split('').reverse().join('');
    if (palabra === palabra2) {
        return true;
    } else {
        return false;
    }
}
let resultaPalindromo  = palindromo("ana");
console.log(resultaPalindromo);
