class Income{
    balance;
    interestRate

    constructor(initialbalance, initialInterestRate){
        this.balance = initialbalance;
        this.interestRate = initialInterestRate;
    }
    printBalance(){
        console.log(`Seu saldo atual é ${this.balance}`)
        return
    }
    calculateIncome(){
       const income = this.balance * this.interestRate;
       this.balance += income;
       console.log(`Seus juros são de ${income}`)
    
    }
}

const plata = new Income(2000, 0.05)
plata.calculateIncome()