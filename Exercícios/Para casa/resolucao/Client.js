const { Bank, bank1 } = require("./Bank")

class Client {
    name
    #cpf
    banks = []

    constructor(name, cpf){
        this.name = name
        this.#cpf = cpf
    }

    get cpf() {
        return this.#cpf
    }

    addBank(bank) {
        const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode)
        Bank.createdBanks[bankIndex].numClients++

        if(!bank instanceof Bank) {
            return console.log(`Este banco é inválido`)
        } else if(this.banks.includes(bank)) {
            return console.log(`Esta pessoa usuária já é cliente deste banco`)
        } else {
            this.banks.push(bank)
        }
    }

    removeBank(bank) {
        const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode)
        Bank.createdBanks[bankIndex].numClients--

        if(!bank instanceof Bank) {
            return console.log(`Este banco é inválido`)
        } else if(this.banks.includes(!bank)) {
            return console.log(`Esta pessoa usuária não é cliente deste banco`)
        } else {
            this.banks.pop(bank)
        }
    }
}

const client1 = new Client("Maria", 123)

