const { Bank } = require('./Bank');

class Client {
    name;
    #cpf;
    banks = [];

    constructor(name, cpf) {
        this.name = name;
        this.#cpf = cpf;
    }

    get cpf() {
        return this.#cpf;
    }

    addBank(bank) {
        if (!(bank instanceof Bank)) {
            return console.log('Informe um Banco válido');
        } if ((this.banks.includes(bank.bankName)) == true) {
            return console.log('Este cliente já possui vínculo a este banco');
        }
        else {
            this.banks.unshift(bank.bankName)
            bank.qtdClients += 1;
            return console.log(`Cliente vínculado com sucesso. Quantidade atual de clientes é de ${bank.qtdClients}`);
        }
    }

    removeBank(bank) {
        if (!(bank instanceof Bank)) {
            return console.log('Informe um Banco válido');
        } if ((this.banks.includes(bank.bankName)) == true) {
            bank.qtdClients -= 1;
            let index = this.banks.indexOf(bank.bankName);
            this.banks.splice(index, 1);
            return console.log('Banco desvinculado com sucesso');
        } else {
            return console.log("Esse banco não está vinculado")
        }
    }

}



module.exports = { Client };