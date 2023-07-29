const { Bank } = require('./Bank');

class Client {
    name;
    #cpf;
   
    static banks = [];

    constructor(name, cpf) {
        this.name = name;
        this.#cpf = cpf;
        this.constructor.banks.push({ name: this.name, banks: this.bank })
    }

    get cpf(){
        return this.#cpf;
    }

    addBank(bank) {
        //fazer as verifições
        if (bank instanceof Bank) {
            //createdBanks = [banco1, banco2, banco3, ...]
            const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode);
            Bank.createdBanks[bankIndex].qtdClients++;            
            this.banks = bank;
        }       
    }

    removeBank(bank) {
        if (bank instanceof Bank) {
            //createdBanks = [banco1, banco2, banco3, ...]
            const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode);
            Bank.createdBanks[bankIndex].qtdClients--;
            
            //Não funcionou usando esse raciocínio 
            /*
            const index = this.banks.findIndex((i) => i.bankCode === bank.bankCode);
            this.banks.slice(Bank.createdBanks[bankIndex], 1);
            */  
            
        }
    }
}

const client1 = new Client('Maria', 123);
console.log(client1);
console.log(client1.cpf);

const bank1 = new Bank(100, 'LuaBank', 0.01);
client1.addBank(bank1);
console.log(client1);

client1.removeBank(bank1); // Banco 100 removido da cliente Maria
console.log(client1); // { name: 'Maria', banks: [] }

module.exports = { Client };