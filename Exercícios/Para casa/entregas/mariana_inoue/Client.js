const { Bank } = require("Bank");

class Client {
  #id;
  name;
  #cpf;
  banks = [];
  constructor(id, name, cpf) {
    this.#id = id;
    this.name = name;
    this.#cpf = cpf;
  }

  addBank(bank) {
    const bankIndex = Bank.createBanks.findIndex(
      (bankEl) => bankEl.bankCode === bank.bankCode
    );

    Bank.createBank[bankIndex].qtdClient++;

    // if (this.banks.indexOf(bank)) return Bank;
    // TODO:fazer validação
  }
  removeBank(bank) {
    if (this.banks.indexOf(Bank)) {
      //diminui quantid
    }
  }
}

module.exports = { Client };
