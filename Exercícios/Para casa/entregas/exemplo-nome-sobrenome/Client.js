const Bank = require("./Bank");

class Client {
  name;
  cpf;
  banks;
  constructor(name, cpf) {
    this.name = name;
    this.cpf = cpf;
    this.banks = [];
  }
  get banks() {
    return this.banks;
  }
  addBank(bank) {
    if (!(bank instanceof Bank)) {
      return { error: "banco invalido" };
    }
    if (this.banks.includes(bank)) {
      return { error: "banco ja associado" };
    }
    this.banks.push(bank);

    Bank.addClient(bank);
  }
  removeBank(bank) {
    if (!(bank instanceof Bank)) {
      return { error: "banco invalido" };
    }
    if (!this.banks.includes(bank)) {
      return { error: "banco nao associado" };
    }
    this.banks = this.banks.filter((b) => b != bank);

    Bank.removeClient(bank);
  }
}

module.exports = Client;
