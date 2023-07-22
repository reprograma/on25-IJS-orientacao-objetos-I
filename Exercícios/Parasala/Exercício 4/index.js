class Income {
    balance
    interestRate

    constructor(balance, interestRate){
        this.balance = balance
        this.interestRate = interestRate
    }

    printBalance(){
        console.log(`Your balance is ${this.balance}`)
    }

    calculateIncome(){
        const revenue = this.balance * this.interestRate
        this.balance += revenue // podia fazer um return nessa linha e não chamar o printBalance() na próxima
        this.printBalance() // mas aí não teria um retorno no console.log, teria que dar dois console.log
                            // income1.printBalance() //Your balance is 1000
                            // income1.calculateIncome()
                            // income1.printBalance() //Your balance is 2500
    }
}

const income1 = new Income (1000, 1.5)

income1.printBalance() //Your balance is 1000
income1.calculateIncome() // Your balance is 2500
