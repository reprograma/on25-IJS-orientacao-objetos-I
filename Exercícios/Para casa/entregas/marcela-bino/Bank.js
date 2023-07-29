class Bank {
    bankCode;
    bankName;
    #transferTax;

    static createdBanks = [];

    constructor(bankCode, bankName, transferTax) {
        this.bankCode = bankCode;
        this.bankName = bankName;
        this.#transferTax = transferTax;

        this.constructor.createdBanks.push({
            bankCode: this.bankCode,
            qtdClients: 0
        });
    }

   
    get transferTax() {
        return this.#transferTax;
    }
     
    set transferTax(newTransferTax) {
        this.#transferTax = newTransferTax;
    }
    
}

module.exports = { Bank };

console.log(Bank.createdBanks);

const bank1 = new Bank(100, 'LuaBank', 0.01);
console.log(bank1);

console.log(bank1.transferTax);
bank1.transferTax = 0.02;
console.log(bank1.transferTax);