
const { Bank } = require("./bank.js");
const { BankAccount } = require("./bankAccount.js");

class Client {
    name;
    #cpf;
    banks = [];

    constructor(name, cpf) {
        this.name = name;
        this.#cpf = cpf;
        this.banks = [];
    }

    get cpf() {
        return this.#cpf;
    }

    addBank(bank) {
        if(!(bank instanceof Bank)){ 
            return console.log(`${this.name} Operação não realizada. Informe um banco válido`);
        } if(this.banks.includes(bank)){
           return console.log(`Já existe uma conta no banco ${this.bank} em seu nome ${this.name}.`);
        } else{
            const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode);
            Bank.createdBanks[bankIndex].quantityClients++;
            this.banks.push(bank);

            return console.log(`O banco ${this.bank} foi vinculado no cliente ${this.name} com sucesso.`);
            
        }

        
    }

    removeBank(bank){ 
        if(!(bank instanceof Bank)){ 
            return console.log(`${this.name} Operação não realizada. Informe um banco válido`);
        }if(!(this.banks.includes(bank))){
           return this.console.log(`Operação não realizada.
           ${this.nome} você não tem conta no banco ${this.bank}`);
        }else{
        
        const bankIndex = Bank.createdBanks.findIndex((element) => 
            element.bankCode === bank.bankCode);
        Bank.createdBanks[bankIndex].quantityClients--;

        this.banks.splice(bank);

        console.log(`Operação realizada. ${this.name} você não é mais cliente do ${this.bank} nosso banco!`);
        }
      
    }

}

const bank1 = new Bank(321, "AngelaDavisBank", 15);
const bank2 = new Bank(623, "LeliaGonzalezBank", 11);
const bank3 = new Bank(365, "MayaAngelouBank", 16);
const bank4 = new Bank(154, "GradaKilombaBank", 9);
const bank5 = new Bank(256, "BellHooksBank", 8);


const client1 = new Client("Carolina Maria de Jesus", 90888377088);
client1.addBank(bank1);
console.log(client1);

const client2 = new Client("Maria Firmina dos Reis", 92730962042);
client2.addBank(bank2);
console.log(client2.cpf);
console.log(client2);

const client3 = new Client("Conceição Evaristo", 14888355002);
client3.addBank(bank3);
console.log(client3.cpf);
console.log(client3);

const client4 = new Client("Paulina Chiziane", 89110034099);
client4.addBank(bank4);
console.log(client4.cpf);
console.log(client4);

const client5 = new Client("Alice Walker", 22019249022);
client5.addBank(bank1);
client5.addBank(bank5);
console.log(client5.cpf);
console.log(client5);

const client6 = new Client("Chimamanda Ngozi Adichie", 22019249022);
client6.addBank(bank2);
console.log(client6.cpf);
console.log(client6);

const client7 = new Client("Sueli Carneiro", 51061356000);
client7.addBank(bank3);
client7.addBank(bank5);
console.log(client7.cpf);
console.log(client7);

const client8 = new Client("Ana Maria Gonçalves", 10798782030);
client8.addBank(bank4);
client8.addBank(bank5);
client8.addBank(bank3);
console.log(client8.cpf);
console.log(client8);


console.log(Bank.createdBanks);

client8.removeBank(bank3);

module.exports = { Client };



