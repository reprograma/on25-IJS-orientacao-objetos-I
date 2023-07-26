class Income {
  balance;
  interestRate;

  constructor(initialBalance, initialInterestRate) {
    this.balance = initialBalance
    this.interestRate = initialInterestRate
  }

  printBalance () {
    console.log(`Your current balance is: ${this.balance}`)
  }

  calculateIncome() {
    const income = this.balance * this.interestRate
    console.log(`Your current income is: ${income}`)
  }
}

const income1 = new Income(1000, 0.5)
income1.printBalance()
income1.calculateIncome()
