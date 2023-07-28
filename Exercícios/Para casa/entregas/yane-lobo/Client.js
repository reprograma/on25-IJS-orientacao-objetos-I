
import {Bank} from './Bank.js';

export class Client {

    #cpf

    constructor(name, cpf) {
        this.name = name
        this.#cpf = cpf
        this.banks = []
    }

     updateClientsNumber(bank) {
        const bankIndex = Bank.createdBanks.findIndex((createdBanks) => createdBanks.bankCode === bank.bankCode)
        Bank.createdBanks[bankIndex].numberOfClients = bank.numberOfClients
    }

    addBank(bank) {
        if(!(bank instanceof Bank)) {
            console.log('The inserted bank is not valid')
        }

        if (this.banks.includes(bank)){
            console.log('This bank is already included.')
        } else {
            this.banks.push(bank)
            bank.numberOfClients++
            this.updateClientsNumber(bank)

        }
    }

    removeBank(bank) {
        if(!(bank instanceof Bank)) {
            console.log('The inserted bank is not valid')
        }

        if (!(this.banks.includes(bank))){
            console.log('This bank is not included')
        } else {
            this.banks.push(bank)
            bank.numberOfClients--
            this.updateClientsNumber(bank)

        }
    }
}


