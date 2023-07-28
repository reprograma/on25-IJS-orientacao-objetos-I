class Account {
  #id;
  #name;
  #balance = 0;

  constructor(id, name, balance) {
    this.#id = id
    this.#name = name
    this.#balance = balance
  }

  get id() {
    return this.#id
  }

  get name() {
    return this.#name
  }

  get balance() {
    return this.#balance
  }

  credit(amount) {
    this.#balance += amount
    return this.balance
  }

  debit(amount) {
    if(amount <= this.#balance) {
      this.#balance -= amount
    } else {
      console.log("Amount exceeded balance")
    }

    return this.#balance
  }

  transferTo(anotherAccount, amount) {
    if(amount <= this.#balance) {
      this.debit(amount)
      anotherAccount.credit(amount)
    } else {
      console.log("Amount exceeded balance")
    }

    return this.#balance
  }

  toString() {
    return `id: ${this.#id}, name: ${this.#name}, balance: ${this.#balance}`
  }
}

const 
  account1 = new Account(1, "One Person", 200),
  account2 = new Account(2, "Another Person", 100)
account1.transferTo(account2, 300) //negative case
account1.transferTo(account2, 100) //positive case
