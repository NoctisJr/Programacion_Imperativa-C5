// Estructuras de repeticion

//incrementar variable

let numero = 4;
numero = numero +5;
numero += 5;
numero ++; 

//for (inicializa variable; condicion; modificaor variable)

const repetir = () => {
    for (let i = 1; i <= 3; i++ ){
        console.log("casa");
    };
    console.log("termine");
}
repetir()

const contar = () => {
    for (let i = 1; i <= 10; i++ ){
        console.log(i);
    };
    console.log("termine");
}
contar()

const contarEn2 = () => {
    for (let i = 0; i <= 10; i = i + 2 ){
        console.log(i);
    };
    console.log("termine");
}
contarEn2()

const contarEnParametro = (x,y,z) => { 
    for (let x = 0; x <= y; x= x + z ){
        console.log(x);
    };
    console.log("termine");
}
contarEnParametro(0,20,5)
console.log("-------------")


// contar impares entre el 0 - 16 (8/2 = 0 === 0 (par))

const contarImpares = () => {

    let acomulador = 0;

    for (let i = 0; i < 17; i++){

        if (i%2 !== 0){
            acomulador ++
            console.log(i);
        }

    };
    return acomulador;
};
let resultado = contarImpares();
console.log(resultado);
console.log("-------------")

// while 

const mostrarNumeros = () => {

    /*for (let i = 20; i <26; i++){
        console.log(i);
    };*/

    let i = 0;

    while ( i < 20 ){
        console.log(i);
        i++
    };
};
mostrarNumeros();
console.log("-------------")

//do while (por lo menos una vez muestra resultado)

const mostrarNumeros2 = () => {

    
    let i = 20;

    do {

        console.log(i);

        i++

    } while ( i < 20 );
};
mostrarNumeros2();
console.log("-------------")