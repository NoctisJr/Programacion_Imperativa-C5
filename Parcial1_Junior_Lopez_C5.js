//Ejercicio 1: 
console.log("Ejercicio 1: ");

const restarPares = (n1, n2) => {

    return n1 % 2===0 && n2 % 2===0 ? n1 - n2 : "Lo siento, uno o más parámetros no son pares";

    /*if (n1 % 2===0 && n2 % 2===0) {
        return n1 - n2;
    } else {
        return "Lo siento, uno o más parámetros no son pares";
    } */
};

const resultadoRestarPares = restarPares(4,4);
console.log(resultadoRestarPares);
console.log("**********************");

//Ejercicio 2: 
console.log("Ejercicio 2: ");

const accesoRecital = (tk, edad) => {

    if (tk) {
        return edad >= 18 ? true : "Sólo puedes acceder con un adulto acompañante";
    } else {
        return false;
    };
};

const resultadoAccesoRecital = accesoRecital(true,18);
console.log(resultadoAccesoRecital);
console.log("**********************");


// Ejercicio 3: 
console.log("Ejercicio 3: ");

let productos = [
    {
        producto : "remera",
        tipo: "indumentaria",
        precio: 2100
    },
    {
        producto : "notebook",
        tipo: "tecnologia",
        precio: 200000
    },
    {
        producto : "celular",
        tipo: "tecnologia",
        precio: 27000
    },
    {
        producto : "protector solar",
        tipo: "cosmetica",
        precio: 2500
    },
    {
        producto : "pantalon",
        tipo: "indumentaria",
        precio: 7500
    },
    {
        producto : "tablet",
        tipo: "tecnologia",
        precio: 60000
    },  
];

const filtrandoProductos = (array) => {

    let productosfiltrados = [];

    for (let index = 0; index < array.length; index++) {

        if (array[index].tipo === "tecnologia" && array[index].precio >= 50000) {
            productosfiltrados.push(array[index]);
          }
    }

    return productosfiltrados;
};

const resultadoFiltrandoProductos = filtrandoProductos(productos);
console.log(resultadoFiltrandoProductos);
console.log("**********************");


