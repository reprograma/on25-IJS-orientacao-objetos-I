class Income {
    balance;
    interestRate;

    constructor(initialBalance, initialInterestRate){
        this.balance = initialBalance;
        this.interestRate = initialInterestRate;
    }

    printBalance(){
        console.log(`O seu saldo atual é: R$${this.balance}`)
    }

    calculateIncome(){
        let income = this.balance * this.interestRate;
        this.balance += income;
        console.log(`Rendimento atual: R$${income}`);
        this.printBalance();
    }
}

const myIncome = new Income(1000, 0.5)
myIncome.calculateIncome();

const myIncome2 = new Income(2000, 0.15);
myIncome2.printBalance();