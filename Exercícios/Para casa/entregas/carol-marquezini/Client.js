const { Bank } = require('./Bank')

class Client {
    name;
    #cpf;
    banks = [];

    constructor(name, cpf) {
        this.name = name;
        this.#cpf = cpf;
    }

    get cpf() {
        return this.#cpf
    }


    addBank(bank) {
        const bankIndex = Bank.createdBanks.findIndex((element) =>
            element.bankCode === bank.bankCode);

        Bank.createdBanks[bankIndex].qtdClients++;
    };

    removeBank(bank) { 
        const bankIndex = Bank.createdBanks.findIndex((element) =>
            element.bankCode === bank.bankCode);

        Bank.createdBanks[bankIndex].qtdClients--;
    };
}

const bank1 = new Bank(100, 'LuaBank', 0.01);
const bank2 = new Bank(200, 'CaBank', 0.01);

const client1 = new Client('Maria', 098765, 123); // Instanciação de um objeto Client.
console.log(client1); // { name: 'Maria', banks: [] }
console.log(client1.cpf); // 12345678900

client1.addBank(bank1);
client1.addBank(bank2);
console.log(client1);// { name: 'Maria', banks: [ Bank { bankCode: 100, bankName: 'LuaBank' } ] }

module.exports = { Client } 