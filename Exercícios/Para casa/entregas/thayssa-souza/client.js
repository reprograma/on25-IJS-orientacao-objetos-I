const Bank = require('./bank');

class Client {
    name;
    #cpf;
    banks;

    constructor(name, cpf){
        this.name = name,
        this.#cpf = cpf,
        this.banks = []
    }

    get cpf(){
        return this.#cpf;
    }

    addBank(bank){
        if(Bank.isBank(bank) == false){
            return false;
        }

        if(this.banks.includes(bank)){
            console.log(`Error! You already are a ${bank.bankName}'s client`);
            return false;
        } else {
            this.banks.push(bank);
            console.log(`Congrats! Now you're a ${bank.bankName}'s client`);
            bank.addClient();
        }
    }

    removeBank(bank){
        if(Bank.isBank(bank) == false){
            return false;
        }

        if(!this.banks.includes(bank)){
            console.log(`Error! You're not a ${bank.bankName}'s client`);
        } else {
            let bankIndex = this.banks.indexOf(bank);
            //indexOf retorna o índice do array
            if (bankIndex > -1) {
                this.banks.splice(bankIndex, 1);
                console.log(`You're not ${bank.bankName}'s client anymore`);
                bank.removeClient();
            }
        }
    }
}

module.exports = Client;