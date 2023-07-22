class Animal {
   type;
   name;
   age;
   energy;
   constructor(type, name, age) {
      this.name = name;
      this.type = type;
      this.age = age;
   }

   sleep(hours) {
      console.log(`O animal chamado ${this.name}, está dormindo`);
      this.energy = this.energy + hours;
      console.log(`Energia atual: ${this.energy}`)
   }

}


// Abstração

class Cliente {
   #id;
   nome;
   endereco;
   constructor(id, nome, endereco) {
      this.#id = id;
      this.nome = nome;
      this.endereco = endereco;
   }

   editar() {

   }
   deletar() {

   }
}

class Banco {
   nome;
   codigo;
   clientes;
   constructor(nome, codigo) {
      this.nome = nome;
      this.codigo = codigo;
      this.clientes = []
   }
}

class Income {
   balane;
   interestRate;
   constructor(initialBalance, interestRate) {
      this.balance = initialBalance;
      this.interestRate = interestRate;
   }

   printBalance() {
      console.log(`Saldo atual, de R$${this.balance}`)
   }

   calculateIncome() {
      const income = (this.balance * this.interestRate)
      console.log(`O rendimento atual é de R$${income}`)
   }
}

const income1 = new Income(1000, 0.05);
income1.printBalance()
income1.calculateIncome()