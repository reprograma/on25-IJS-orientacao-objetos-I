const { Bank, bank1 } = require("./Bank")
const { Client, client1 } = require("./Client")

class BankAccount {
    client
    bank
    accountNumber
    agencyNumber
    #balance

    constructor(client, bank, accountNumber, agencyNumber) {
        this.client = client
        this.bank = bank
        this.accountNumber = accountNumber
        this.agencyNumber = agencyNumber
        this.#balance = 0

        if(!client instanceof Client) {
            return console.log(`client não é instância de Client`)
        }

        if(!bank instanceof Bank) {
            return console.log(`bank não é instância de Bank`)
        }

        if(!(client.banks.includes(bank))) {
            return console.log(`${client.name} não inclui o bank`)
        }

    }

    get balance() {
        return this.#balance
    }

    credit(amount){
        return this.#balance += amount
    }

    debit(amount) {
        return this.#balance -= amount
    }

    transferTo(anotherAccount, amount) {
        // ??
    }

    closeAccount() {
        if(this.#balance > 0) {
            return console.log(`A conta não pode ser fechada pois há saldo.`)
        } else {
            // ??
        }
    }
}

const bankAccount1 = new BankAccount(client1, bank1, 1111, 2222)
console.log(bankAccount1)