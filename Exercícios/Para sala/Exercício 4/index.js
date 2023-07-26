class Income{
    balance;
    interestRate;

    constructor(initialBalance, initialInterestRate){
        this.balance = initialBalance
        this.interestRate = initialInterestRate
    }

    printBalance(){
      console.log(`o saldo atual é de R$ ${this.balance}`)
    }

    calculateIncome(){
        const income = this.balance * this.interestRate;
      console.log(` o rendimento atual é de R$ ${income}`)
    }
}

const income1 = new Income(1000, 0,5)
income1.printBalance()
income1.calculateIncome()

console.log(income1.balance)
