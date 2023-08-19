const { Bank } = require('./Bank');
const { Client } = require('./Client');

class BankAccount {
  constructor(client, bank, accountNumber, agencyNumber) {
    if (!(client instanceof Client)) {
      console.log('Erro: o cliente deve ser uma instância de Client');
      return;
    }
    if (!(bank instanceof Bank)) {
      console.log('Erro: o banco deve ser uma instância de Bank');
      return;
    }
    if (!client.banks.includes(bank)) {
      console.log(`Erro: o cliente ${client.name} não está associado ao banco ${bank.bankCode}`);
      return;
    }
    this.client = client;
    this.bank = bank;
    this.accountNumber = accountNumber;
    this.agencyNumber = agencyNumber;
    this._balance = 0;
  }

  get balance() {
    return this._balance;
  }
}

module.exports = { BankAccount };
