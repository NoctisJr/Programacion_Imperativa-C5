function mostrarNumerosSiguientes(numero) {
    for (let i = numero + 1; i <= numero + 10; i++) {
      console.log(i);
    }
}

console.log(mostrarNumerosSiguientes(10));
console.log("***************************")
  
function imprimirNumerosSaltando() {
    for (let i = 5; i <= 20; i += 3) {
      console.log(i);
    }
}

console.log(imprimirNumerosSaltando());
console.log("***************************")

function sumatoria() {
    let suma = 0;
    for (let i = 0; i <= 100; i++) {
      suma += i;
    }
    console.log("La sumatoria de los números entre 0 y 100 es: " + suma);
}
sumatoria();

console.log("***************************")
  
function factorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
      resultado *= i;
    }
    console.log("El factorial de " + numero + " es: " + resultado);
}
factorial(20);
console.log("***************************")
  
function fibonacci(valor) {
    let secuencia = [0, 1];
    for (let i = 2; secuencia[i - 1] <= valor; i++) {
      secuencia[i] = secuencia[i - 1] + secuencia[i - 2];
    }
    console.log("La secuencia de Fibonacci hasta " + valor + " es: " + secuencia.join(", "));
}

fibonacci(50)
console.log("***************************")

