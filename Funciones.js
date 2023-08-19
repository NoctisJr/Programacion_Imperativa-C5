/* --- Micro desafio 1 ---

function test1(x,y){
    return y-x;
}
test1(10,40); 

**** Resultado: 30 */

/* --- Micro desafio 2 ---

function test2(x){
    return x*2;
    console.log(x);
    return x/2;
}
console.log(test2(10)); 

**** Resultado: 20 */

//Crear una función que convierta pulgadas en centímetros.
//Recibe por parámetro pulgadas y retorna su equivalente en centímetros.

//Expresada

function pulgadasACentimetros(pulgadas) {
    var centimetros = pulgadas * 2.54;
    return centimetros;
};

var resultado1 = pulgadasACentimetros(5);
console.log(resultado1);

//Flecha

const pulgadasACentimetros2 = (pulgadas) => {
    const centimetros = pulgadas * 2.54;
    return centimetros;
};

const resultado2 = pulgadasACentimetros2(5);
console.log(resultado2);

const convertirMayusculas = (texto) => {
    return texto.toUpperCase();
};

const resultadoconvertirMayusculas = convertirMayusculas("hOla amiWOS");
console.log(resultadoconvertirMayusculas);


const determinarTipoDato = (parametro) => {
    return typeof parametro;
};

const resultadodeterminarTipoDato = determinarTipoDato(true);
console.log(resultadodeterminarTipoDato);


const calcularCircunferencia = (radio) => {
    const circunferencia = 2 * Math.PI * radio;
    return circunferencia;
};

const resultadocalcularCircunferencia = calcularCircunferencia(10);
console.log(resultadocalcularCircunferencia);

