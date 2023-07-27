class Bank {
  static createdBanks = [];

  constructor(bankCode, bankName, transferTax) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this._transferTax = transferTax;
    Bank.createdBanks.push({ bankCode: this.bankCode, qtdClients: 0 });
  }

  get transferTax() {
    return this._transferTax;
  }

  set transferTax(tax) {
    this._transferTax = tax;
  }
}

class Client {
  constructor(name, cpf) {
    this.name = name;
    this._cpf = cpf;
    this.banks = [];
  }

  get cpf() {
    return this._cpf;
  }

  addBank(bank) {
    if (!(bank instanceof Bank)) {
      console.log("Erro: O parâmetro bank deve ser do tipo Bank.");
      return;
    }

    if (this.banks.includes(bank)) {
      console.log("Erro: O cliente já possui esse banco associado.");
      return;
    }

    this.banks.push(bank);
    bank.createdBanks.find((b) => b.bankCode === bank.bankCode).qtdClients++;
    console.log(`Banco ${bank.bankCode} adicionado ao cliente ${this.name}.`);
  }

  removeBank(bank) {
    if (!(bank instanceof Bank)) {
      console.log("Erro: O parâmetro bank deve ser do tipo Bank.");
      return;
    }

    if (!this.banks.includes(bank)) {
      console.log("Erro: O cliente não possui esse banco associado.");
      return;
    }

    this.banks = this.banks.filter((b) => b !== bank);
    bank.createdBanks.find((b) => b.bankCode === bank.bankCode).qtdClients--;
    console.log(`Banco ${bank.bankCode} removido do cliente ${this.name}.`);
  }
}

class BankAccount {
  constructor(client, bank, accountNumber, agencyNumber) {
    this.client = client;
    this.bank = bank;
    this.accountNumber = accountNumber;
    this.agencyNumber = agencyNumber;
    this._balance = 0;
    this._qtdWithdrawal = 0;
    this._withdrawalTax = 0.03;
  }

  get balance() {
    return this._balance;
  }

  get qtdWithdrawal() {
    return this._qtdWithdrawal;
  }

  get withdrawalTax() {
    return this._withdrawalTax;
  }

  set withdrawalTax(tax) {
    this._withdrawalTax = tax;
  }

  credit(amount) {
    this._balance += amount;
    console.log(`O novo saldo da conta é: R$ ${this._balance}`);
  }

  debit(amount) {
    if (this._balance < amount) {
      console.log("Erro: Saldo insuficiente.");
      return;
    }

    this._balance -= amount;
    console.log(`O novo saldo da conta é: R$ ${this._balance}`);
  }

  transferTo(anotherAccount, amount) {
    if (!(anotherAccount instanceof BankAccount)) {
      console.log(
        "Erro: O parâmetro anotherAccount deve ser do tipo BankAccount."
      );
      return;
    }

    if (this._balance < amount) {
      console.log("Erro: Saldo insuficiente para a transferência.");
      return;
    }

    const isSameBank = this.bank.bankCode === anotherAccount.bank.bankCode;
    const transferTax = isSameBank ? 0 : this.bank.transferTax;
    const totalAmount = amount + transferTax;

    if (this._balance < totalAmount) {
      console.log(
        "Erro: Saldo insuficiente (incluindo a taxa de transferência)."
      );
      return;
    }

    this._balance -= totalAmount;
    anotherAccount._balance += amount;

    console.log(`Transferência de R$ ${amount} realizada.`);
    console.log(`O saldo atual da conta de origem é de R$ ${this._balance}`);
    console.log(
      `O saldo atual da conta de destino é de R$ ${anotherAccount._balance}`
    );
  }

  cashWithdrawal(amount) {
    if (this._qtdWithdrawal >= 2) {
      this._balance -= amount + this._withdrawalTax;
      console.log(
        `Retirada realizada. O saldo atual da conta é de R$ ${this._balance}.`
      );
      console.log(`Total de retiradas realizadas: ${this._qtdWithdrawal + 1}`);
      console.log(`Você não possui mais nenhuma retirada gratuita.`);
      return;
    }

    this._balance -= amount;
    this._qtdWithdrawal++;

    if (this._qtdWithdrawal < 2) {
      const remainingWithdrawals = 2 - this._qtdWithdrawal;
      console.log(
        `Retirada realizada. O saldo atual da conta é de R$ ${this._balance}.`
      );
      console.log(`Total de retiradas realizadas: ${this._qtdWithdrawal}`);
      console.log(
        `Você ainda possui ${remainingWithdrawals} retirada gratuita(s).`
      );
    } else {
      console.log(
        `Retirada realizada. O saldo atual da conta é de R$ ${this._balance}.`
      );
      console.log(`Total de retiradas realizadas: ${this._qtdWithdrawal}`);
      console.log(`Você não possui mais nenhuma retirada gratuita.`);
    }
  }

  closeAccount() {
    if (this._balance > 0) {
      console.log("Erro: Não é possível encerrar a conta com saldo positivo.");
      return;
    }

    console.log("Conta encerrada!");
    this.client.removeBank(this.bank);
    this.client = undefined;
    this.bank = undefined;
    this.accountNumber = undefined;
    this.agencyNumber = undefined;
    this._balance = 0;
    this._qtdWithdrawal = 0;
  }
}
