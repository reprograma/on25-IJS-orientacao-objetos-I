class Income {
  balance;
  interestRate;

  constructor(initialBalance, interestRate) {
    this.balance = initialBalance;
    this.interestRate = interestRate;
  }

  printBalance() {
    console.log(`Saldo atual R$ ${this.balance}`);
  }

  calculateIncome() {
    const income = this.balance * this.interestRate;
    console.log(`O rendimento atual é R$ ${income}`);
  }
}

const income1 = new Income(1000, 0.5);
income1.printBalance();
income1.calculateIncome();

console.log(income1.balance);
