const validarEdad = (edad) => {
    if (edad < 0 || isNaN(edad)) {
      return "Error, edad inválida. Por favor ingrese un número válido";
    } else if (edad % 2 !== 0 && edad <= 18) {
        console.log("No puede pasar. ¿Sabías que tu edad es impar?");
    } else if (edad <= 18) {
        return "No puede pasar al bar";
    } else if (edad <= 21 && edad % 2 !== 0) {
      return "¿Sabías que tu edad es impar?, Puede pasar al bar, pero no puede beber";
    } else if (edad <= 21) {
        return "Puede pasar al bar, pero no puede beber";
    } else if (edad === 21 && edad % 2 !== 0) {
      return "¡Bienvenido! Felicidades por haber llegado a la mayoría de edad, ¿Sabías que tu edad es impar?";
    } else if (edad === 21) {
        return "¡Bienvenido! Felicidades por haber llegado a la mayoría de edad";
    } else if (edad % 2 !== 0) {
        return "¡Bienvenido!, ¿Sabías que tu edad es impar?";
    } else {
      return "¡Bienvenido!";
    }
  };
console.log(validarEdad(23)); 
console.log("*************************"); 
// totalAPagar()

function totalAPagar(vehiculo, litrosConsumidos) {
    let precioLitro;
  
    switch (vehiculo) {
      case "coche":
        precioLitro = 86;
        break;
      case "moto":
        precioLitro = 70;
        break;
      case "autobús":
        precioLitro = 55;
        break;
      default:
        return "Vehículo no válido";
    }
  
    let total = precioLitro * litrosConsumidos;
  
    if (litrosConsumidos <= 25) {
      total += 50;
    } else {
      total += 25;
    }
  
    return total;
  }

  console.log(totalAPagar("coche", 30)); 
  console.log("*************************"); 

// Local de sándwiches

function calcularTotal(sandwichBase, tipoPan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
    let precioBase;
  
    switch (sandwichBase) {
      case "pollo":
        precioBase = 150;
        break;
      case "carne":
        precioBase = 200;
        break;
      case "veggie":
        precioBase = 100;
        break;
      default:
        return "Sándwich base no válido";
    }
  
    let precioPan;
  
    switch (tipoPan) {
      case "blanco":
        precioPan = 50;
        break;
      case "negro":
        precioPan = 60;
        break;
      case "s/gluten":
        precioPan = 75;
        break;
      default:
        return "Tipo de pan no válido";
    }
  
    let precioAdicionales = 0;
  
    if (queso) {
      precioAdicionales += 20;
    }
    if (tomate) {
      precioAdicionales += 15;
    }
    if (lechuga) {
      precioAdicionales += 10;
    }
    if (cebolla) {
      precioAdicionales += 15;
    }
    if (mayonesa) {
      precioAdicionales += 5;
    }
    if (mostaza) {
      precioAdicionales += 5;
    }
  
    return precioBase + precioPan + precioAdicionales;
  }

  console.log(calcularTotal("pollo", "negro")); 