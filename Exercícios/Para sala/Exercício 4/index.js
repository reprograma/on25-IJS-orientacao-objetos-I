class Income {
    balance;
    interestRate;


constructor(initialbalance, interestRate) {
    this.balance = initialbalance;
    this.interestRate = interestRate;
}

printBalance() {
    console.log(`O saldo atual é ${this.balance}`);

}
calculateIncome() {
    const income = this.balance * this.interestRate;
    console.log(`O rendimento atual ${income}`);

}
}




