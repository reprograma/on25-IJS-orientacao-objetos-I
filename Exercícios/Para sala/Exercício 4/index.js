class Income{
    balance;
    interestRate;

    constructor(balance, interestRate){
        this.balance = balance;
        this.interestRate = interestRate;
    }

    printBalance(){
        console.log(`Seu saldo atual é de R$ ${this.balance}`)
    }

    calculateIncome(){
        const income = this.balance * this.interestRate;
        this.balance += income;
        console.log(`Seu saldo é de R$ ${this.balance} e seu rendimento atual é de R$ ${income}`);
    }
}

const contaNicole = new Income(300, 12);
console.log(contaNicole)
contaNicole.printBalance()
contaNicole.calculateIncome()
