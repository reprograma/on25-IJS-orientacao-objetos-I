class Account {
  id;
  name;
  balance;

  constructor(id, name, balance) {
    this.id = id
    this.name = name
    this.balance = balance
  }

  credit(amount) {
    this.balance += amount
    console.log(`New balance: ${this.balance}`)
  }

  debit(amount) {
    this.balance -= amount
    console.log(`New balance: ${this.balance}`)
  }

  transferTo(anotherAccount, amount) {
    if(!(anotherAccount instanceof Account)) {
      console.log("Invalid account")
      return
    }else if(this.balance < amount) {
      console.log("Insufficient balance account")
    } else {
      this.debit(amount)
      anotherAccount.credit(amount)
      console.log(`New balance for your account: ${this.balance}`)
      console.log(`New balance for another account: ${anotherAccount.balance}`)
    }
  }
}

const 
  account1 = new Account(1, "One Person", 200),
  account2 = new Account(2, "Another Person", 100)
account1.transferTo(account2, 300) //negative case
account1.transferTo(account2, 100) //positive case
