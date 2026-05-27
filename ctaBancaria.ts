class CuentaBancaria {

  saldo: number;

  constructor(saldoInicial: number) {

    this.saldo = saldoInicial;
  }

  depositar(monto: number) {

    this.saldo += monto;

    return "Depósito realizado";
  }

  retirar(monto: number) {

    this.saldo -= monto;

    return "Retiro realizado";
  }

  verSaldo() {

    return "Saldo actual: $" + this.saldo;
  }
}

const cuenta = new CuentaBancaria(10000);

console.log(cuenta.verSaldo());

console.log(cuenta.depositar(100));

console.log(cuenta.verSaldo());

console.log(cuenta.retirar(500));

console.log(cuenta.verSaldo());