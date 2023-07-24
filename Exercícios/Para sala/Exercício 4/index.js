class Income {
    balance;
    interestRate;

    constructor(initialBalance, initialInterestRate){
        this.balance = initialBalance;
        this.interestRate = initialInterestRate;
    }

    printBalance(){
        console.log(`Saldo atual: R$${this.balance}`)
    }

    calculateIncome(){
        let income = this.balance * this.interestRate;
        this.balance += income;
        console.log(`Rendimento atual: R$${income}`);
        this.printBalance();
    }
}

const myIncome = new Income(1000, 0.05)
myIncome.calculateIncome();

const myIncome2 = new Income(2100, 0.1);
myIncome2.printBalance();