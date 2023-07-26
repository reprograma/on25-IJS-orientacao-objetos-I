class Bank {
    bankCode;
    bankNome;
    #transferTax;

    static createdBanks = [];

    constructor(bankCode, bankNome, createdBanks, transferTax) {
        this.bankCode = bankCode;
        this.bankNome = bankNome;
        this.constructor.createdBanks.push({
            bankCode: this.bankCode,
            qtdClients: 0,
        })
        this.#transferTax = transferTax;
    }
}
console.log(Bank.createdBanks);
const bank1 = new Bank(100, 'LuaBank', 0.01);
console.log(bank1)

console.log(Bank.createdBanks);
//console.log(bank1.transferTax); // 0.01
bank1.transferTax = 0.02
console.log(bank1.transferTax); // 0.02

module.exports = { Bank }

