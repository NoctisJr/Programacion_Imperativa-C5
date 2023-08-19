// Función para sumar dos números
function sumar(num1, num2) {
    return num1 + num2;
  }
  
  // Función para restar dos números
function restar(num1, num2) {
    return num1 - num2;
  }
  
  // Función para multiplicar dos números
function multiplicar(num1, num2) {
    return num1 * num2;
  }
  
  // Función para dividir dos números
function dividir(num1, num2) {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return "Error: No se puede dividir entre cero.";
    }
  }

console.log("-------------- Testeo de Operaciones / Calculadora --------------");

let resultadoSumar = sumar(4,4);
console.log(resultadoSumar);

let resultadoRestar = restar(10,4);
console.log(resultadoRestar);

let resultaMultiplicar = multiplicar(10,4);
console.log(resultaMultiplicar);

let resultaDividir = dividir(10,4);
console.log(resultaDividir);

console.log("-------------- Calculadora - Nivel III - Funciones extras --------------");

// Función para calcular el cuadrado de un número
function cuadradoDeUnNumero(num) {
  return multiplicar(num, num);
}

const resultadocuadradoDeUnNumero = cuadradoDeUnNumero(5);
console.log(resultadocuadradoDeUnNumero);

// Función para calcular el promedio de tres números
function promedioDeTresNumeros(num1, num2, num3) {
    const suma = sumar(sumar(num1, num2), num3);
    return dividir(suma, 3);
  }
  
const resultadopromedioDeTresNumeros = promedioDeTresNumeros(5, 9, 12);
console.log(resultadopromedioDeTresNumeros);

// Función para calcular el porcentaje de un número
function calcularPorcentaje(total, porcentaje) {
  const resultado = multiplicar(total, dividir(porcentaje, 100));
  return resultado;
}

const resultadocalcularPorcentaje = calcularPorcentaje(300, 15);
console.log(resultadocalcularPorcentaje);


// Función para calcular el porcentaje del primer número con respecto al segundo
function GeneradorDePorcentaje(num1, num2) {
  const porcentaje = multiplicar(dividir(num1, num2), 100);
  return porcentaje;
}

const resultadoGeneradorDePorcentaje = GeneradorDePorcentaje(2, 200);
console.log(resultadoGeneradorDePorcentaje);