const { Bank } = require('./Bank');

class Client {
    name;
    #cpf;
    banks = [];

    constructor(name, cpf) {
        this.name = name;
        this.#cpf = cpf;
    };

    get cpf() {
        console.log({ cpf: this.#cpf });
    };

    addBank(bank) {
        if (!(bank instanceof Bank)) {
            console.log("informe um banco valido!");
        };

        if (this.banks.some((bankArray) => bankArray.bankCode === bank.bankCode)) {
            console.log(`Você já é associado ao banco ${bank.bankName}`);
        } else {
            this.banks.push(bank);

            const bankIndex = Bank.createdBanks.findIndex((bankArray) => bankArray.bankCode === bank.bankCode);
            Bank.createdBanks[bankIndex].qntclients++
        };
    };

    removeBank(bank) {
        if (!(bank instanceof Bank)) {
            console.log("informe um banco valido!");
        };

        if (!this.banks.some((bankArray) => bankArray.bankCode === bank.bankCode)) {
            console.log(`O banco ${bank.bankName} não está associado ao seu nome`);
        } else {
            const bankIndexRemove = this.banks.indexOf(bank);

            this.banks.splice(bankIndexRemove, 1)

            const bankIndexQntClients = Bank.createdBanks.findIndex((bankArray) => bankArray.bankCode === bank.bankCode);
            Bank.createdBanks[bankIndexQntClients].qntclients--
        };
    };
};

module.exports = ({ Client });