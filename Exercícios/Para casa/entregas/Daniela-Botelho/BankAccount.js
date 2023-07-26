const { Client } = require("./Client");
const { Bank } = require("./Bank");

class BankAccount {
  constructor(client, bank, accountNumber, agencyNumber) {
    if (client instanceof Client && bank instanceof Bank) {
      if (client.banks.includes(bank)) {
        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
        this._balance = 0;
      } else {
        throw new Error(
          "Você só pode criar uma conta se tiver cadastro no Banco."
        );
      }
    } else {
      throw new Error("Os parâmetros devem ser do tipo Client e Bank.");
    }
  }

  get balance() {
    return this._balance;
  }
}

module.exports = { BankAccount };

