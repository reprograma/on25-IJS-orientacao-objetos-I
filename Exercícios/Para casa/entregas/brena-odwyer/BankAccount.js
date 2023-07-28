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
            return console.log(`${client.name} não inclui o bank`) // está sempre retornando essa frase no console, não sei o porquê
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
        if(!(anotherAccount instanceof BankAccount)) {
            return console.log(`Operação inválida`)
        } else if (amount > this.#balance) {
            return console.log(`Saldo insuficiente. Seu saldo é ${this.#balance}`)
        } else {
            this.debit(amount)
            anotherAccount.#balance += amount
            console.log(`Transferência de ${amount} feita com sucesso`)
        }
    }

    closeAccount() {
        if(this.#balance > 0) {
            return console.log(`A conta não pode ser fechada pois há saldo.`)
        } else {
            return console.log(`Conta fechada`)
        }
    }
}



const bankAccount1 = new BankAccount(client1, bank1, 1111, 2222)
console.log(bankAccount1)
console.log(bankAccount1.balance)
bankAccount1.credit(1000)
console.log(bankAccount1.balance)
bankAccount1.debit(500)
console.log(bankAccount1.balance)
bankAccount1.closeAccount()

module.exports = { BankAccount, bankAccount1}

