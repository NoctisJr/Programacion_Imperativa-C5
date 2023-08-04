// Variables -> let y const 

let edad = 25;
const apellido = "Perez";

console.log(edad, apellido);

// Tipos de datos -> primitivos 

// Sting -> cadena de texto 
let nombre ="pepe";

// Numbre -> numeros 
let numeroDeLaSuerte = 22;

// BOOLEAN -> true - false 
let isLogged = true;

// Undefine -> no definido
let nombreDeUsuario = "";

// Null
let datos = null;

// NaN -> not a number
let X = NaN;

// Operadores Matematicos

let n1 = 2;
let n2 = 3;

console.log(n1+n2);
console.log(n1-n2);
console.log(n1*n2);
console.log(n1/n2);
//--Modulo 
console.log(n1%n2);
//concatenar 
let saludo = "hola como estas"
console.log(saludo + " Muy bien");
//concatenar template literals -> backsticks 
let saludoBien = `hola ${nombre} como estas?`

// Operadores COMPARACION

console.log(n1==n2); // comparacion simple
console.log(n1===n2); // comparacion simple
console.log(n1!=n2);
console.log(n1>n2);
console.log(n1<n2);
console.log(n1>=n2);
console.log(n1<=n2);

// OPERADORES LOGICOS 

//FALSYS -> 0
//TRUTHYS -> 1 


//  ***AND -> &&

//SE QUEDA CON EL ULTIMO TRUE
//SE QUEDA CON EL PRIMER FALSO
let estaLogueado = true;
let esAdmin = false;

let tienePermiso = estaLogueado === true && esAdmin === true;

// *** OR -> || 
tienePermiso = estaLogueado === true || esAdmin === true;

// *** NOT -> !
let f = false;
console.log(!f)



