// class Cliente {
//   #id;
//   nome;
//   endereco;
//   constructor(id, nome, endereco) {
//     this.#id = id;
//     this.nome = nome;
//     this.endereco = endereco;
//   }
//   editar() {}

//   deletar() {}
// }

// class Banco {
//   nome;
//   codigo;
//   clientes;
//   constructor(nome, codigo, clientes) {
//     this.nome = nome;
//     this.codigo = codigo;
//     this.clientes = clientes;
//   }
// }

class Income {
  balance;
  interestRate;
  constructor(initialBalance, initialInterestRate) {
    this.balance = initialBalance;
    this.interestRate = initialInterestRate;
  }
  printBalance() {
    console.log(this.balance);
  }
  calculateIncome() {
    const income = this.balance * this.interestRate;
    this.balance += income;
    console.log(`O rendimento atual é de R$ ${income}`);
  }
}

const income1 = new Income(1000, 0.05);

income1.printBalance();
income1.calculateIncome();
income1.printBalance();
