class Income {
    balance;
    interestRate;

    constructor(initialbalance, interestRate){
        this.balance = initialbalance
        this.interestRate = interestRate
    }

    printBalance() {
        console.log(`O saldo atual é de R$ ${this.balance}`)
    }

    calculateIncome() {
        const income = this.balance * this.interestRate
        console.log(`O rendimendo atual é de R$ ${income}`)
    }
}

const income1 = new Income(1000, 0.05)
income1.printBalance()
income1.calculateIncome()
console.log(income1.balance)