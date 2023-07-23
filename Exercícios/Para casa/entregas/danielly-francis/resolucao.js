class Bank {
  bankCode;
  bankName;
  #transferTax;
  createdBanks;

  constructor(bankCode, bankName, transferTax, createdBanks) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this.#transferTax = transferTax;
    this.createdBanks = createdBanks;
  }
}

class Client {
  name;
  #cpf;
  banks;

  constructor(name, cpf, banks) {
    this.name = name;
    this.cpf = cpf;
    this.banks = banks;
  }

  addBank(bank) {}
  remove(bank) {}
}

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
    this.balance = balance;
  }
}