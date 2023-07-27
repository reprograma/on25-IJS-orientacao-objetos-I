
class Income{
    balance;
    interestRate;

    constructor(initialBalance, interestRate){
        this.initialBalance = initialBalance;
        this.interestRate = interestRate;
    }

printBalance(){
    console.log(`O saldo atual é de R$ ${this.initialBalance}`)
}

calculaIncome(){
    const income = this.balance * this.interestRate;
    console.log(`O rendimento atual é de R$ ${income}`);
}

}



const income1 = new Income(1000, 0.05);

income1.printBalance();
income1.calculaIncome();
