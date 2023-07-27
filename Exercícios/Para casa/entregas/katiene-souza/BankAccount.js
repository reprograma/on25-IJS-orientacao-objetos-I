const { Bank } = require('./Bank');
const { Client } = require('./Client');

class   BankAccount {
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance;

    constructor(client, bank, accountNumber, agencyNumber, balance) {
        this.client = this.validadeClient(client);
        this.bank = this.validadeBank(bank);
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
        this.#balance = balance;
    };

    get balance() {
        console.log({balance: this.#balance});
    };

    validadeClient(client) {
        if (!(client instanceof Client)) {
            console.log("informe um cliente valido!");
        };

        return client;
    };

    validadeBank(bank) {
        if (!(bank instanceof Bank)) {
            console.log("informe um banco valido!");
        };

        if (!this.client.banks.some((bankInfo) => bankInfo.bankCode === bank.bankCode)) {
            console.log(`O cliente ${this.client.name}, não é associado a este banco!`);
        } else {
            console.log("conta criada!");
        };

        return bank;
    };

    credit(amount) {
        this.#balance += amount;
        console.log({ saldo: `Seu saldo atual é de ${this.#balance}` });
    };

    debit(amount) {
        this.#balance -= amount;
        console.log({ saldo: `Seu saldo atual é de ${this.#balance}` });
    };

    transferTo(anotherAccount, amount) {
        if (!(anotherAccount instanceof BankAccount)) {
            console.log("informe um banco valido!");
        };

        if (this.#balance >= amount) {
            this.debit(amount);
            anotherAccount.credit(amount);
            console.log(`Seu saldo atual é de: ${this.#balance} e o saldo de ${anotherAccount.client.name} é de: ${anotherAccount.#balance}.`);
        } else {
            console.log("você não tem o valor necessário para essa operação");
        };
    };

    closeAccount() {
        if (this.#balance > 0) {
            console.log(`Sua conta não pode ser encerrada enquanto possuir saldo!`);
        } else {

            this.client = undefined;
            this.bank = undefined;
            this.accountNumber = undefined;
            this.agencyNumber = undefined;
            this.#balance = undefined;

            console.log("Sua conta foi encerrada com sucesso!");
        };
    };
};

module.exports = ({ BankAccount });