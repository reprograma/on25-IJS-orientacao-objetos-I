import {Client} from './Client.js';
import {Bank} from './Bank.js';

export class BankAccount {
   
    #balance
    #qtdWithdrawal
    #withdrawalTax

    constructor(client, bank, accountNumber, agencyNumber, maxWithdrawals){
        if(!(client instanceof Client)){
            throw new Error(`${this.client} is not a valid Client`)
        }
        this.client = client
        if(!(bank instanceof Bank)) {
            throw new Error('Not valid')
        } 
        if (!(client.banks.includes(bank))) {
            throw new Error ('Not valid')
        }
        this.bank = bank
        this.accountNumber = accountNumber
        this.agencyNumber = agencyNumber
        this.#balance = 0
        this.#qtdWithdrawal = 0
        this.#withdrawalTax = 0.03
        this.maxWithdrawals = maxWithdrawals

    }

    get balance() {
        return this.#balance
    }

    get qtdWithdrawal() {
        return this.#qtdWithdrawal
    }

    get withdrawalTax() {
        return this.#withdrawalTax
    }

    credit(amount) {
        console.log('Current balance is: ', this.#balance += amount)
    }

    debit(amount) {
        console.log('Current balance is: ', this.#balance -= amount)
    }

    transferTo(anotherAccount, amount) {
        const targetClientName = anotherAccount.client.name; 
        if (!(anotherAccount instanceof BankAccount)) {
            throw new Error (`${this.anotherAccount} is not a valid account`)
        }
        if (amount > this.#balance) {
            console.log("You don't have enough balance to complete this operation")
        }

        if (anotherAccount.bank != this.bank) {
            this.#balance -= amount
            this.#balance -= this.#withdrawalTax
            anotherAccount.#balance += amount
            console.log(`You transfered successfully $ ${amount} to ${targetClientName}`)
            console.log(this.#balance)
        } else {
            

            this.#balance -= amount
            this.#balance -= anotherAccount.#withdrawalTax
            anotherAccount.#balance += amount
            console.log(`You transfered successfully $ ${amount} to ${targetClientName}`)
        }
    }

    cashWithdrawal(amount) {

        if (amount > this.#balance) {
            console.log("You don't have enough balance.")
        }
        
        if(this.#qtdWithdrawal >= this.maxWithdrawals) {
            console.log(`Your free withdrawals amount have exceeded. You will be charged: $ ${this.#withdrawalTax}`)
            if((amount + this.#withdrawalTax) > this.#balance) {
                console.log('Your balance is not enough to perform this operation.')
            } else{
                this.#balance -= (amount + this.#withdrawalTax)
                console.log(`You have successfully withdrawed $ ${amount}`)
                console.log(this.#balance)
            }
        } else {
            this.#qtdWithdrawal++
            this.#balance -= amount
            console.log(`You have made ${this.#qtdWithdrawal} withdrawal(s). You still have ${this.maxWithdrawals - this.#qtdWithdrawal} free withdrawal(s) available`)
            console.log(`You have successfully withdrawed $ ${amount}`)
        }
    }

    closeAccount() {
        if(this.#balance != 0) {
            console.log('It is not possible to close this account because you still have money in your balance.')
        } else
        {console.log(Object.keys(this))
        Object.keys(this).map(key => this[key] = undefined)
        console.log('Your account has been closed.')}
    }

}

