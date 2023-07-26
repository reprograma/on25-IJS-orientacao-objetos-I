class BankAccount {
  client;
  Bank;
  accountNumber;
  agencyNumber;
  #balance;

  constructor(client, Bank, accountNumber, agencyNumber, balance) {
    this.client = client;
    this.Bank = Bank;
    this.accountNumber = accountNumber;
    this.agencyNumber = agencyNumber;
    this.#balance = 0;
    this.isOpen = true; //Inicialmente a conta está aberta
  }
  get balance() {
    return this.#balance;
  }
  credit(amount) {
    this.#balance += amount;
    console.log(`O saldo atualizado é de R$ ${this.#balance}`);
  }
  debit(amount) {
    this.#balance -= amount;
    console.log(`O saldo atualizado é de R$ ${this.#balance}`);
  }
  transferTo(anotherAccount, amount) {
    if (!(anotherAccount instanceof Account)) {
      console.log("Informe uma conta válida!");
      return;
    }

    if (this.#balance < amount) {
      console.log(
        `Você não tem saldo suficiente para realizar essa operação. Seu saldo atual é de R$ ${
          this.#balance
        }`
      );
      return;
    }

    this.debit(amount);
    anotherAccount.credit(amount);
    console.log(
      `Transferência realizada com sucesso! O seu saldo atual é de R$ ${this.balance} e o saldo da conta destino é de R$ ${anotherAccount.balance}`
    );
  }
  closeAccount() {
    this.isOpen = false;
    console.log("Conta fechada com sucesso.");
  }
}

module.exports = {
  BankAccount,
};

const account1 = new BankAccount("Lua", "Bank XYZ", "12345", "6789", 500);
account1.credit(200); // O saldo atualizado é de R$ 700
account1.debit(100); // O saldo atualizado é de R$ 600
account1.closeAccount(); // Conta fechada com sucesso.
account1.credit(50); // Conta fechada. Não é possível realizar esta operação.
