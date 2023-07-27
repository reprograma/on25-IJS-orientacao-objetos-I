class BankAccount {
  client;
  bank;
  accountNumber;
  agencyNumber;
  #balance;

  constructor(client, bank, accountNumber, agencyNumber, balance) {
    this.client = client;
    this.bank = bank;
    this.accountNumber = accountNumber;
    this.agencyNumber = agencyNumber;
    this.constructor.balance = balance;
  }
}

module.exports({ BankAccount });