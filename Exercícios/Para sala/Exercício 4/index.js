class Income {
    balance;
    interestRate;    

    constructor(initialBalance, initialInterestRate) {
        this.balance = initialBalance;
        this.interestRate = initialInterestRate;
    }

    printBalance() {
        console.log(`O saldo atual é de R$${this.balance}`)
    }

    calculateIncome() {
       const income = this.balance * this.interestRate;
       this.balance += income
       console.log(`O rendimento atual é de R$${income}`);
    }
}

const income1 = new Income(2000, 0.07);
income1.printBalance()
income1.calculateIncome()

console.log(`O saldo com rendimento é: R$${income1.balance}`)