const { Bank } = require("./Bank");

class Client {
  name;
  #cpf;
  banks;
  constructor(name, cpf) {
    this.name = name;
    this.#cpf = cpf;
    this.banks = [];
  }
  get cpf() {
    return this.#cpf;
  }

  addBank(bank) {
    if (!(bank instanceof Bank)) {
      console.log("Informe um banco válido!");
      return;
    }
    if (this.banks.includes(bank)) {
      console.log(
        `Esse banco já está associado a esse cliente e não será adicionado novamente.`
      );
      return;
    }

    this.banks.push(bank);

    console.log(`Banco ${bank.bankCode} adicionado ao cliente ${this.name}.`);

    //Encontrar o banco no array createdBanks e incrementar +1 a qntClients
    const bankInfo = Bank.createdBanks.find(
      (item) => item.bankCode === bank.bankCode
    );
    if (bankInfo) {
      bankInfo.qtyClients++;
    }
  }
  removeBank(bank) {
    if (!(bank instanceof Bank)) {
      console.log("Informe um banco válido!");
      return;
    }
    if (!this.banks.includes(bank)) {
      console.log(
        `Primeiro associe o banco ${bank.bankCode} ao cliente ${this.name}, para remove-lo.`
      );
      return;
    } else {
      console.log(
        `Banco ${bank.bankCode} está sendo removido do(a) cliente ${this.name}.`
      );
      //Remover: Encontra o bank no array, e cria outro array sem o "bank"
      this.banks = this.banks.filter((item) => item !== bank);

      //Encontrar o banco no array createdBanks e incrementar +1 a qntClients
      const bankInfo = Bank.createdBanks.find(
        (item) => item.bankCode === bank.bankCode
      );
      if (bankInfo) {
        bankInfo.qtyClients--;
      }
    }
  }
}

module.exports = { Client };
