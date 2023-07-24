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
    this.#withdrawalTax = 0.03;
  }

  get balance() {
    return this.#balance;
  }

  get qtdWithdrawal() {
    return this.#qtdWithdrawal;
  }

  get withdrawalTax() {
    return this.#withdrawalTax;
  }

  set withdrawalTax(newTax) {
    return this.#withdrawalTax = newTax;
  }

  credit(amount) {
     this.#balance += amount;
     return `Recebemos o valor de R$${amount}. Seu saldo atualizado é de R$${this.balance}.`
  }

  debit(amount){
    this.#balance -= amount;
    return `Debitamos o valor de R$${amount}. Seu saldo atualizado é de R$${this.balance}.`
  }

  // terminar função
  transferTo(anotherAccount, amount) {
// Caso a transferência seja para um banco diferente do cliente que está realizando, utilize a taxa do banco de origem.

    if(!(anotherAccount instanceof BankAccount)) {
      console.log("Informe uma conta bancária válida!")
    } else {
      if(amount <= this.#balance) {
        this.debit(amount);
        anotherAccount.credit(amount);
        return "Transferência realizada com sucesso"
      } else {
        return "Operação negada."
      }
    }
  }

   // terminar função
  closeAccount() {
    if(this.#balance > 0) {
      return `Operação negada. Faça o saque do valor R$${this.#balance} e tente novamente.`
    } else {

      // terminar função
      return `Conta encerrada com sucesso!`
    }
  }


}

const bankAccount1 = new BankAccount("Laíssa", "nubank", 123, 45678-9)

console.log(bankAccount1)
console.log(bankAccount1.credit(100))

const bankAccount2 = new BankAccount("Lucas", "Nubank", 132, 589657-9)
bankAccount1.transferTo(bankAccount2, 20);


console.log(bankAccount2.closeAccount());