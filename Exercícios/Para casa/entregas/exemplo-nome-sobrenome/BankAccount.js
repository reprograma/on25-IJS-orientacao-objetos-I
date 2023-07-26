const Bank = require("./Bank");

const Client = require("./Client");

class BankAccount {
  client;
  bank;
  accountNumber;
  agencyNumber;
  #balance;
  #qtdWithdrawal;
  #withdrawalTax;
  constructor(client, bank, accountNumber, agencyNumber) {
    this.client = client;
    this.bank = bank;
    this.accountNumber = accountNumber;
    this.agencyNumber = agencyNumber;
    this.#balance = 0;
    this.#qtdWithdrawal = 0;
    this.#withdrawalTax = 6.9;

    this.client.addBank(this.bank);
  }
  get balance() {
    console.log(this.#balance);
    return this.#balance;
  }
  get qtdWithdrawal() {
    console.log(this.#qtdWithdrawal);
    return this.#qtdWithdrawal;
  }
  get withdrawalTax() {
    console.log(this.#withdrawalTax);
    return this.#withdrawalTax;
  }
  set withdrawalTax(value) {
    this.#withdrawalTax = value;
  }

  credit(amount) {
    this.#balance += amount;
    console.log(
      `A conta com nome ${
        this.client.name
      } recebeu R$${amount}.\nTotal na conta R$${this.#balance}`
    );
  }
  debit(amount) {
    this.#balance -= amount;
    console.log(
      `A conta com nome ${
        this.client.name
      } foi debitado R$${amount}\nTotal na conta R$${this.#balance}`
    );
  }
  transferTo(anotherAccount, amount) {
    if (!(anotherAccount instanceof BankAccount)) {
      console.log("Informe uma conta valida");
      return { error: "conta não encontrada" };
    }
    if (amount > this.#balance) {
      console.log(`\nsua conta nao tem saldo suficiente`);
      return { error: "sem saldo" };
    }
    if (this.bank != anotherAccount.bank) {
      this.debit(amount * (1 + this.bank.transferTax));
    } else {
      this.debit(amount);
      anotherAccount.credit(amount);
    }
  }

  cashWithdrawal(amount) {
    if (amount > this.#balance) {
      console.log(`\nsua conta nao tem saldo suficiente`);
      return { error: "sem saldo" };
    }
    if (this.#qtdWithdrawal > 3) {
      console.log(`O saque sera cobrado uma taxa de R$${this.#withdrawalTax}`);
      this.debit(amount + this.#withdrawalTax);
    } else if (this.#qtdWithdrawal == 2) {
      this.#qtdWithdrawal++;
      console.log(
        `Você realizou ${
          this.#qtdWithdrawal
        } saque.\nVocê não tem mais saques gratuitos.\n\nNo proximo saque sera cobrada a taxa de R$${
          this.#withdrawalTax
        }.`
      );
      this.debit(amount);
    } else {
      this.#qtdWithdrawal++;
      console.log(
        `Você realizou ${this.#qtdWithdrawal} saque.\nVocê ainda tem mais ${
          3 - this.#qtdWithdrawal
        } saques gratuitos.`
      );
      this.debit(amount);
    }
  }

  closeAccount() {
    if (this.#balance > 0) {
      console.log("Para fechar a conta nao deve conter nenhum valor");
    }
  }
}

module.exports = BankAccount;
