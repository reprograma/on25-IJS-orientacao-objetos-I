class Income {
  balance;
  interestRate;


  constructor(initialBalance, initialInterestRate) {
    this.balance = initialBalance;
    this.interestRate = initialInterestRate
  }
  printBalance() {
    return console.log(`O saldo é ${this.balance}`);
  }

  calculateIncome() {
    const income =  this.balance * this.interestRate
    console.log(`O rendimento atual é de ${income}`)
    this.balance += income
  }

}

const income1 = new Income(1000, 0.05)
income1.printBalance()
income1.calculateIncome()
console.log(income1)

