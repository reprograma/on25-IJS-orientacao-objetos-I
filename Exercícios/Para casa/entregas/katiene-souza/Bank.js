class Bank {
    bankCode;
    bankName;
    #transferTax;
    static createdBanks = [];

    constructor(bankCode, bankName, transferTo) {
        this.bankCode = bankCode;
        this.bankName = bankName;
        this.#transferTax = transferTo;
        this.constructor.createdBanks.push({ bankCode: this.bankCode, qntclients: 0 });
    };

    get transferTax() {
        console.log({ transferTax: this.#transferTax });
    };

    set transferTax(newTax) {
        this.#transferTax = newTax;
    };
};

module.exports = ({ Bank });



