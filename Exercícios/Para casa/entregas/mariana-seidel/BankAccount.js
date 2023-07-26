const { Bank } = require ('./Bank')
const { Client } = require ('./Client')

class BankAccount {
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance = 0;

    constructor (client, bank, accountNumber, agencyNumber) {
        if(!(client instanceof Client)) {
            return console.log('Esse não é um cliente válido!')
        }

        if(!(bank instanceof Bank)){
            return console.log('Esse não é um banco válido!')
        }
        
        if(!(client.banks.includes(bank))) {
           return console.log(`A conta só poderá ser criada se você for cliente do banco. Por favor torne-se cliente do ${bank.bankName}.`)
        }

        this.client = client
        this.bank = bank
        this.accountNumber = accountNumber
        this.agencyNumber = agencyNumber
    }

    get balance() {
        return this.#balance
    }

    credit(amount){
        this.#balance += amount
        console.log(`Operação realizada com sucesso. Seu saldo é de R$ ${this.#balance}.`)
    }

    debit(amount){
        this.#balance -= amount
        console.log(`Operação realizada com sucesso. Seu saldo é de R$ ${this.#balance}.`)
    }

    transferTo(anotherAccount, amount){
        if (!(anotherAccount instanceof BankAccount)) {
            console.log('Informe uma conta válida!')
            return
        }

        if (this.#balance < amount) {
            console.log('Você não possui valor suficiente para realizar essa operação')
            return
        }

        this.debit(amount)
        anotherAccount.credit(amount)
        return console.log(`Transferência realizada com sucesso para ${anotherAccount.client.name}! O seu saldo atual é de R$ ${this.balance}.`)
    }

    closeAccount(){
        if(this.#balance !== 0){
            console.log('Você possui saldo na sua conta. Retire todo o valor para poder encerrá-la.')
        } else {
            return Object.keys(this).forEach(key => this[key] = undefined),
            console.log('Conta encerrada!')
        }
    }
}

module.exports = { BankAccount }