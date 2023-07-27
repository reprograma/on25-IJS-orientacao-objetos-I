class Income{
    constructor(balance, interestRate){
        this.balance = balance
        this.interestRate = interestRate
    }
    printBalance(){
        console.log(this.balance)
    }
    calculateIncome(){
        return this.balance * (this.interestRate/100)
    }
}