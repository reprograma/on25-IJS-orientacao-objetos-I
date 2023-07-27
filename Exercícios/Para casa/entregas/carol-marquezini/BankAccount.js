const { Bank, bank1 } = require('./Bank')
const { Client, client1 } = require('./Client')

class BankAccount {

    client;b
    Bank;
    accountNumber;
    agencyNumber;
    #balance;

    constructor(client, Bank, accountNumber, agencyNumber) {
        this.client = client;
        this.bank = Bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
        this.#balance = 0;
    }

    get balance() {
        return this.#balance;
    }

    credit(amount) {
        this.#balance += amount;
        console.log(`Credito de ${amount} recebido, 
        seu saldo atualizado é de R$ ${this.#balance}`)
    }

    debit(amount) {
        this.#balance -= amount;
        console.log(`Débido de ${amount} realizado, 
        seu saldo atualizado é de R$ ${this.#balance}`)
    }

    transferTo(anotherAccount, amount) { }

    closeAccount() { }

}

const bankAccount1 = new BankAccount(client1, bank1, 1111, 2222); // Instanciação de um objeto BankAccount.
console.log(bankAccount1);

module.exports = { BankAccount }