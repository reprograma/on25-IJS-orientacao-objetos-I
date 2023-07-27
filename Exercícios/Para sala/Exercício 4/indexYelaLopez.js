<<<<<<< HEAD
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
=======
class Income {
	balance;
	interestRate;

	constructor(initialBalance, interestRate) {
		this.balance = initialBalance;
		this.interestRate = interestRate;
	}

	printBalance() {
		console.log(`O saldo atual é de R$ ${this.balance}`);
	}

	calculateIncome() {
		const income = this.balance * this.interestRate;
    this.balance += income
		console.log(`O rendimento atual é de R$ ${income}`);
	}
}

const income1 = new Income(1000, 0.05);
income1.printBalance()
income1.calculateIncome()

console.log(income1.balance)
>>>>>>> 39481e8595a151f0eda99e9654b797c7bfc3b57a
