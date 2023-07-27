const { Bank } = require('./Bank');

class Client {
    name;
    #cpf;
    banks;

    constructor(name, cpf, banks) {
        this.name = name;
        this.#cpf = cpf;
        this.banks = [];
    }

    get cpf() {
        return this.#cpf;
    }

    addBank(bank) {
        if(!(bank instanceof Bank)){
            console.log("Erro - O banco informado não é válido.")
        }
        if(this.banks.includes(bank)){
            console.log("Erro - O cliente já é associado ao banco.")
        } else {
            this.banks.push(bank)
            Bank.createdBanks.qtdClients++;
            console.log("Novo cliente vinculado com sucesso.");
            
        }
    }
     
    removeBank(bank) {
        if(!(bank instanceof Bank)){
            console.log("Erro - O banco informado não é válido.")
        }
        if(!(this.banks.includes(bank))) {
            console.log("Erro - O cliente não é associado ao banco.")
        } else {
            this.banks = this.banks.filter((item) => item !== bank)
            Bank.createdBanks.qtdClients--;
            console.log("Cliente removido com sucesso.");
        }
    }
}

module.exports = { Client };