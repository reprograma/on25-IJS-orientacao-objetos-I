const { Bank } = require ('./Bank')

class Client {
    name;
    #cpf;
    banks = []

    constructor (name, cpf) {
        this.name = name
        this.#cpf = cpf
    }

    get cpf() {
        return this.#cpf
    }

    addBank(bank) {
        if (!(bank instanceof Bank)) {
            console.log('Informe um banco válido!')
            return
        } 

        if(this.banks.includes(bank)){
            console.log('Você já possui esse banco associado a sua conta! Tente adicionar um banco diferente.')
            return
        }

        const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode)
        Bank.createdBanks[bankIndex].qtdClients++
        this.banks.push(bank)
    }

    removeBank(bank){
        if (!(bank instanceof Bank)) {
            console.log('Informe um banco válido!')
            return
        } 

        if(!(this.banks.includes(bank))){
            console.log('Você não possui esse banco associado a sua conta, portanto não é possível realizar a operação!')
            return
        }

        const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode)
        Bank.createdBanks[bankIndex].qtdClients--
        this.banks.splice(this.banks.indexOf(bank), 1)
    }
}

module.exports = { Client }

