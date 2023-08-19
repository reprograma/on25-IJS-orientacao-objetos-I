/*class cliente {
  #id;
  nome;
  endereco;

  construtor(id, nome, endereco) {
    this.#id = id;
    this.nome = nome;
    this.endereco = endereco;
  }

  editar() {}

  deletar() {}
}

class banco {
  nome;
  codigo;
  clientes;

  construtor(nome, codigo, clientes) {
    this.nome = nome;
    this.codigo = codigo;
    this.clientes = clientes;
  }
}*/

class Income {
  balance;
  interestRate;

  constructor(initialBalance, interestRate) {
    this.balance = initialBalance;
    this.interestRate = interestRate;
  }

  printBalance() {
    console.log(`O saldo atual é de R$ ${this.balance}`);
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
