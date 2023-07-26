const banco = require("./banco");
const clientex = require("./cliente");

class ContaBancaria {
  #saldo;
  #custoBancario;
  #taxaBancaria;
  cliente;
  banco;
  numeroConta;
  numeroAgencia;

  constructor(
    cliente,
    banco,
    numeroConta,
    numeroAgencia,
    custoBancario,
    taxaBancaria
  ) {
    this.cliente = cliente;
    this.banco = banco;
    this.numeroConta = numeroConta;
    this.numeroAgencia = numeroAgencia;
    this.#saldo = 0;
    this.#custoBancario = custoBancario;
    this.#taxaBancaria = taxaBancaria;
  }

  get saldo() {
    return this.#saldo;
  }

  get custoBancario() {
    return this.#custoBancario;
  }

  set custoBancario(novoCusto) {
    this.#custoBancario = novoCusto;
  }

  get taxaBancaria() {
    return this.#taxaBancaria;
  }

  set taxaBancaria(novaTaxa) {
    this.#taxaBancaria = novaTaxa;
  }

  creditar(valor) {
    this.#saldo += valor;
    console.log(`Valor de R$${valor} creditado. Novo saldo: R$${this.#saldo}`);
  }

  debitar(valor) {
    if (valor <= this.#saldo) {
      this.#saldo -= valor;
      console.log(`Valor de R$${valor} debitado. Novo saldo: R$${this.#saldo}`);
    } else {
      console.log("Saldo insuficiente para realizar o débito.");
    }
  }

  transferir(outraConta, valor) {
    if (valor <= this.#saldo) {
      this.#saldo -= valor;
      outraConta.creditar(valor - this.#taxaBancaria);
      console.log(
        `Transferência de R$${valor} realizada para a conta ${
          outraConta.numeroConta
        }. Novo saldo: R$${this.#saldo}`
      );
      this.#saldo -= this.#custoBancario;
      console.log(
        `Custo bancário de R$${
          this.#custoBancario
        } debitado. Novo saldo após custo bancário: R$${this.#saldo}`
      );
    } else {
      console.log("Saldo insuficiente para realizar a transferência.");
    }
  }
}

// Testando:
const cliente1 = new clientex("Elvira Bruno", "123.456.789-00");
const banco1 = new banco(100, "Banco A", 0.01);

const conta1 = new ContaBancaria(cliente1, banco1, "12345-6", "1234", 5, 2);
console.log(conta1.saldo); // 0

conta1.creditar(1000); // Valor de R$1000 creditado. Novo saldo: R$1000
console.log(conta1.saldo); // 1000

conta1.debitar(500); // Valor de R$500 debitado. Novo saldo: R$500
console.log(conta1.saldo); // 500

const conta2 = new ContaBancaria(cliente1, banco1, "65432-1", "4321", 5, 2);
conta1.transferir(conta2, 300); // Transferência de R$300 realizada para a conta 65432-1. Novo saldo: R$198
// Custo bancário de R$5 debitado. Novo saldo após custo bancário: R$193
console.log(conta1.saldo); // 193
console.log(conta2.saldo); // 300

conta1.custoBancario = 7;
console.log(conta1.custoBancario); // 7

module.exporte = ContaBancaria;
