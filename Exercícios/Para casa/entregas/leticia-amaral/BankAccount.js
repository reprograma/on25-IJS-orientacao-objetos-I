const Bank = require('./Bank');
const Client = require('./Client');

class BankAccount {
  client;
  bank;
  accountNumber;
  agencyNumber;
  #balance;

  constructor(client, bank, accountNumber, agencyNumber) {
      this.client = client
      this.bank = bank
      this.accountNumber = accountNumber
      this.agencyNumber = agencyNumber
      this.#balance = 0
  }

  get balance() {
    return this.#balance
  }

  credit(amount) {
    this.#balance += amount
    console.log(this.#balance)
  }

  debit(amount) {
    this.#balance -= amount
    console.log(this.#balance)
  }

  transferTo(anotherAccount, amount) {
    if(!(anotherAccount instanceof BankAccount)) return "Another account invalid"
    if(this.#balance < amount) return "Balance insufficient"

    this.debit(amount)
    anotherAccount.credit(amount)

    console.log(`Your balance ${this.#balance}`)
  }

  closeAccount() {
    if(this.#balance > 0) return "Account has balance"
    
    return "Account closed"
  }
}

module.exports = BankAccount;