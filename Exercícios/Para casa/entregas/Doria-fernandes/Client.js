const { Bank, caixa } = require("./Bank");

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
            console.log(bank.qtdClients)
            return console.log("Cliente vínculado com sucesso");
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



const doria = new Client("Dória", "1234");
const dhilly = new Client("Dhilly", "2345");
console.log(doria)
console.log(doria.cpf)

doria.addBank(caixa)
console.log(doria)
doria.addBank(bradesco)
doria.addBank(caixa)
dhilly.addBank(caixa)
console.log(caixa.qtdClients)

doria.removeBank(caixa)
console.log(doria)

console.log(caixa.qtdClients)
