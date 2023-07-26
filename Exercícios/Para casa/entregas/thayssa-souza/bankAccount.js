const Client = require('./client');

class BankAccount {
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance;
    #qtyWithdrawal;
    #withDrawalTax;

    constructor(client, bank, accountNumber, agencyNumber){
        this.client = client,
        this.bank = bank,
        this.accountNumber = accountNumber,
        this.agencyNumber = agencyNumber,
        this.#balance = 0,
        this.#qtyWithdrawal = 0,
        this.#withDrawalTax = 2.5
    }

    get balance(){
        return this.#balance;
    }

    get qtyWithdrawal(){
        return this.#qtyWithdrawal;
    }

    get withDrawalTax(){
        return this.#withDrawalTax;
    }

    set withDrawalTax(newTax){
        if (newTax !== 0){
            this.#withDrawalTax = newTax;
        } else {
            console.log("Error, the fee cannot be 0");
            return false;
        }
    }

    static isBankAccount(bankAccount){
        if(!(bankAccount instanceof BankAccount)){
            console.log("Error! Enter a valid bank account");
            return false;
        } else {
            return true;
        }
    }

    credit(amount){
        if(amount > 0){
            this.#balance += amount;
            console.log(`Credit $${amount} successfully added. Actual balance: $${this.#balance}`);
        } else {
            console.log("Enter a valid amount of money");
            return false;
        }
    }

    debit(amount){
        if(this.#balance >= amount){
            this.#balance -= amount;
            console.log(`Operation successfully done. Atual balance: $${this.#balance}`);
            return true;
        } else {
            console.log(`Error! You don't have $${amount} in your account. Your actual balance: $${this.#balance}`)
            return false;
        }
    }

    debitWithFee(amount){
        let amountFee = amount + this.#withDrawalTax;
        if(this.#balance >= amountFee){
            this.#balance -= amountFee;
            console.log(`Operation successfully done. Atual balance: $${this.#balance}`);
            return true;
        } else {
            console.log(`Error! You don't have value of amount and/or fee in your account. Your actual balance: $${this.#balance}`)
            return false;
        }
    }

    transferTo(anotherAccount, amount){
        if(BankAccount.isBankAccount(anotherAccount) == false){
            return false;
        }

        if((this.bank !== anotherAccount.bank) && (this.debitWithFee(amount) == true)){
            anotherAccount.#balance += amount;
            console.log(`Successful transfer $${amount} to ${anotherAccount.client.name}`);
        } else if (this.debit(amount) == true) {
            anotherAccount.#balance += amount;
            console.log(`Successful transfer $${amount} to ${anotherAccount.client.name}`);
        } else {
            return false;
        }
    }

    cashWithdrawal(amount){
        let withdrawalsLimit = 2;

        if(this.#qtyWithdrawal >= withdrawalsLimit){
            console.log(`You already made ${withdrawalsLimit} withdrawals at the ATM. Now each withdrawal will have a fee de $${this.#withDrawalTax}`);

            if(this.debitWithFee(amount) == true){
                this.#qtyWithdrawal += 1;
                return true;
            } else {
                return false;
            }
        }
        
        if(this.debit(amount) == true){
            this.#qtyWithdrawal += 1;
            let withdrawalsTime = withdrawalsLimit - this.#qtyWithdrawal;
            console.log(`You can make ${withdrawalsTime} withdrawal(s) without paying fee`);
        }
    }

    closeAccount(){
        if (this.#balance > 0){
            console.log(`Sorry, you cannot close the account until reset the balance. Actual balance: $${this.#balance}`);
            return false;
        } else {
            this.client.removeBank(this.bank);
            Object.keys(this).forEach(key => this[key] = undefined);
            console.log("Closed account successfully");
        }
    }
}

module.exports = BankAccount;