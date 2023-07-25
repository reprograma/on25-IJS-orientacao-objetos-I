class Client {
  #id;
  name;
  #cpf;
  banks;
  constructor(id, name, cpf) {
    this.#id = id;
    this.name = name;
    this.#cpf = cpf;
    this.banks = [];
  }

  addBank(bank) {
    if (this.banks.indexOf(bank)) return Bank;
  }
  removeBank(bank) {
    if (this.banks.indexOf(Bank)) {
    }
  }
}

class Bank {
  bankCode;
  bankName;
  #transferTax;
  static createBanks = [];

  constructor(bankCode, bankName, transferTax) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this.#transferTax = transferTax;
  }

  get transferTax() {
    return this.#transferTax;
  }

  set transferTax(transferTax) {
    this.#transferTax = transferTax;
  }
}

class BankAccount {
  client;
  Bank;
  accountNumber;
  agencyNumber;
  #balance;
  #qtWithdrawal;
  #withdrawalTax;

  constructor(
    Client,
    Bank,
    accountNumber,
    agencyNumber,
    balance,
    qtWithdrawal,
    withdrawalTax
  ) {
    this.Client = Client;
    this.Bank = Bank;
    this.accountNumber = accountNumber;
    this.agencyNumber = agencyNumber;
    this.#balance = 0;
    this.#qtWithdrawal = 0;
    this.#withdrawalTax = 0.01;
    BankAccount.createBanks.push(this);
  }

  get balance() {
    return this.#balance;
  }

  get qtWithdrawal() {
    return this.#qtWithdrawal;
  }

  get withdrawalTax() {
    return this.#withdrawalTax;
  }

  set withdrawalTax(withdrawalTaxes) {
    this.#withdrawalTax = withdrawalTaxes;
  }

  credit(amount) {
    this.balance += amount;
    console.log(`Saldo atual R$ ${this.balance}`);
  }

  debit(amount) {
    this.balance -= amount;
    console.log(`Saldo atual R$ ${this.balance}`);
  }

  transferTo(anotherAccount, amount) {
    if (!(anotherAccount instanceof BankAccount)) {
      console.log(`Conta inválida`);
      return;
    }

    if (this.balance < amount) {
      console.log(`Saldo insuficiente ${this.balance}`);
      return;
    }

    //    this.balance -=amount;
    this.debit(amount);
    anotherAccount.credit(amount);
    console.log(`Transfer ${this.balance}`);
  }

  cashWithdrawal(amount) {

     if (this.balance < amount) {
      console.log(`Saldo insuficiente ${this.balance}`);
      return;
    }

    if(this.balance >= amount) {

        if(this.balance > 5 ){
            console.log(`Cliente, ultrapassou limite de saque. Haverá adição de taxa`)
        }
        this.balance -= amount;
    }



  }





  closeAccount() {
    if (this.#balance > 0) {
      console.log(`Saldo não vazio ${this.balance}`);
    } else {
      console.log(`Fechamento de conta concluída`);
    }
  }
}
