const { Bank } = require("./Bank");

class Client {
  name;
  #cpf;
  banks;

  static banks = [];

  constructor(name, cpf) {
    this.name = name;
    this.#cpf = cpf;
    this.banks = [];
  }
  get cpf() {
    return this.#cpf;
  }
  addBank(bank) {
    if (this.banks.includes(bank)) {
      console.log(`Você já é associado ao banco ${bank.bankName}`);
    } else {
      if (bank instanceof Bank) {
        this.banks.push(bank);
        bank.incrementClients();
      } else {
        console.log("O objeto fornecido não é uma instância de Bank.");
      }
    }
  }

  removeBank(bank) {
    const index = this.banks.indexOf(bank);
    if (index !== -1) {
      this.banks.splice(index);
    }
  }
}

const bank1 = new Bank(100, "LuaBank", 0.01, 0);
const bank2 = new Bank(200, "SolBank", 0.02);

const client1 = new Client("Maria", 123);
client1.addBank(bank1);
client1.addBank(bank2);

console.log(client1);

module.exports = {
  Client,
};
