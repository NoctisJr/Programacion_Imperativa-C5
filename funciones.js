function f1 ( ) {

    console.log("Paso Adelante");
    console.log("Paso Adelante");
    console.log("Paso Adelante");

};

f1();


function saludar ( ) {
    let nombre = "pepe";
    let saludo = `hola ${nombre} Como estas?`;
    return saludo;

};

let saludoFinal = saludar();
console.log(saludoFinal);




function sumar (n1, n2) {
    // let n1 = 2;
    // let n2 = 5;
    return n1+n2;

};

let res = sumar(3,5);
console.log(res);

//********************************

let nro1 = 5;
let nro2 = 5;

function sumar (n1, n2) {
   
    return n1+n2;

};

let res2 = sumar(nro1,nro2);
console.log(res2);


//FUNCION EXPRESADA -- ANONIMA

const restar = function (a,b) { // se guarda en variable. 
    return a-b;
};

let resultadoResta = restar(10,4);
console.log(resultadoResta);

//FUNCION EXPRESADA -- FLECHA

const multiplicarX5 = numero => numero *5; // para funciones simples de una linea.


let resultadoMultiplicarX5 = multiplicarX5(3);
console.log(resultadoMultiplicarX5);



