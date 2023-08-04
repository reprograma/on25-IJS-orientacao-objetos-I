class Bank {
    bankCode;
    bankName;
    #transferTax;
    qtdClients;
    static createdBanks = [];

    constructor(bankCode, bankName, transferTax) {
        this.#transferTax = transferTax;
        this.bankCode = bankCode;
        this.bankName = bankName;
        this.qtdClients = 0;

        Bank.createdBanks.unshift(`bankCod: ${[this.bankCode]} qtdClients: ${[this.qtdClients]}`);
    }

    get transferTax() {
        return this.#transferTax;
    }
    set transferTax(newTax) {
        return this.#transferTax = newTax;
    }
}


module.exports = { Bank };