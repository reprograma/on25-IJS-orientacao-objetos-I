
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
            quantityClients: 0
        });
        
    }

    set transferTax(amount) {
        this.#transferTax = amount;
    }

    get transferTax() {
        return this.#transferTax;
    }

}

console.log(Bank.createdBanks);

const bank1 = new Bank(321, "AngelaDavisBank", 15);
const bank2 = new Bank(623, "LeliaGonzalezBank", 11);
const bank3 = new Bank(365, "MayaAngelouBank", 16);
const bank4 = new Bank(154, "GradaKilombaBank", 9);
const bank5 = new Bank(256, "BellHooksBank", 8);

console.log(bank1);
console.log(bank2);
console.log(bank3);
console.log(bank4);
console.log(bank5);

console.log(Bank.createdBanks);



// console.log(bank1.transferTax)
// console.log(bank2.transferTax);
// console.log(bank3.transferTax);
// console.log(bank4.transferTax);
// console.log(bank5.transferTax);



module.exports = { Bank };




