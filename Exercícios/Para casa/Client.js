const { Bank, caixa } = require("./entregas/Doria-fernandes/Bank");

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
            return console.log("Cliente vínculado com sucesso");
        }
    }

    removeBank(bank) {
        if (!(bank instanceof Bank)) {
            return 'Informe um Banco válido';
        }
    }

}

const doria = new Client("Dória", "1234");
console.log(doria)

doria.addBank(caixa)
console.log(doria)
doria.addBank(bradesco)
doria.addBank(caixa)


module.export = { Client };