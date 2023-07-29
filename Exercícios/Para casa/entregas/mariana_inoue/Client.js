const { Bank } = require("./Bank");

class Client {
  name;
  #cpf;
  banks = [];

  constructor(name, cpf) {
    this.name = name;
    this.#cpf = cpf;
  }

  get cpf() {
    return this.#cpf;
  }

  hasAccount(bank) {
    this.banks.find((bankEl) => bankEl.bankCode === bank.bankCode);
  }

  addBank(bank) {
    if (!(bank instanceof Bank)) {
      console.log("Informe um banco válido");
      return;
    }

    if (this.banks.includes(bank)) {
      console.log(`Cliente consta no banco X ${bank.bankName}`);
      return;
    }

    this.banks.push(bank);

    const bankIndex = Bank.createBanks.findIndex(
      (bankEl) => bankEl.bankCode === bank.bankCode
    );

    Bank.createBanks[bankIndex].qtdClient++;

    console.log(
      `Cliente ${this.name} sua conta ${bank.bankCode} está registrado em nosso ${bank.bankName}`
    );
  }

  removeBank(bank) {
    if (!(bank instanceof Bank)) {
      console.log("Banco não encontrado de cliente");
      return;
    }

    if (!this.hasAccount(bank)) {
      console.log(
        `Cliente com CPF ${this.cpf} não possui conta no ${bank.bankName}.`
      );
      return;
    }

    this.banks = this.banks.filter(
      (bankEl) => bankEl.bankCode !== bank.bankCode
    );

    const bankIndex = Bank.createBanks.findIndex(
      (bankEl) => bankEl.bankCode === bank.bankCode
    );

    Bank.createBanks[bankIndex].qtdClient--;

    console.log(
      `BANCO ${bank.bankName}. Conta: ${bank.bankCode} removido da cliente ${this.name}`
    );
  }
}

module.exports = { Client };
