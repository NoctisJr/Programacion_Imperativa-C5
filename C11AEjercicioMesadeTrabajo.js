let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
];

let consultar = function(nombre) {
    for (let i = 0; i < this.clientes.length; i++) {
        if (this.clientes[i].titularCuenta == nombre) {
            return this.clientes[i];
          }
        }
        return null; 
};

let depositar = function(titular, cantidad) {
    for (let i = 0; i < this.clientes.length; i++) {
        if (this.clientes[i].titularCuenta === titular) {
          this.clientes[i].saldoEnPesos += cantidad;
          console.log("Depósito realizado, su nuevo saldo es: " + this.clientes[i].saldoEnPesos);
          return;
        }
      }
      console.log("No se encontró al titular de la cuenta");
};

let extraer = function(titular, monto) {
    for (let i = 0; i < this.clientes.length; i++) {

      if (this.clientes[i].titularCuenta === titular) {

        if (this.clientes[i].saldoEnPesos < monto) {
          console.log("Fondos insuficientes");
        } else {
          this.clientes[i].saldoEnPesos -= monto;
          console.log("Extracción realizada correctamente, su nuevo saldo es: " + this.clientes[i].saldoEnPesos);
        }
        return;
      }
    }
    console.log("No se encontró al titular de la cuenta");
};

const banco = {
    clientes: arrayCuentas,
    consultarCliente: consultar,
    deposito: depositar,
    extraccion: extraer
};
    

let clienteEncontrado = banco.consultarCliente("Ramon Connell");
console.log(clienteEncontrado);
banco.deposito("Ramon Connell", 5000);
banco.extraccion("Ramon Connell", 2000);