class Income {
    balance;
    interestRate;

    constructor(initialBalance, initialInterestRate) {
      this.balance = initialBalance;
      this.interestRate = initialInterestRate;
    }

    printBalance = () => {
        console.log(`Balance: ${this.balance}`);
    }

    calculateIncome = () => {
        const income = this.balance * this.interestRate;
        this.balance += income;
        console.log(`The anual profits are ${income}`);
        console.log(`The total wealth is ${this.balance}`)
    }
}

const incomeAccount = new Income(1000, 0.05);

incomeAccount.printBalance();

incomeAccount.calculateIncome();