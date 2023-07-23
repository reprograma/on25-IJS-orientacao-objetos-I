class Bank {
    bankCode;
    bankName;
    #transferTax;
    qtdClients = 0;
    static createdBanks = [];
    constructor(bankCode, bankName, transferTax) {
        this.#transferTax = transferTax;
        this.bankCode = bankCode;
        this.bankName = bankName;

        Bank.createdBanks.unshift(`bankCod: ${[this.bankCode]} qtdClients: ${[this.qtdClients]}`);
    }

    get transferTax() {
        return this.#transferTax;
    }
    set transferTax(newTax) {
        return this.#transferTax = newTax;
    }
}

console.log(Bank.createdBanks) // []

const caixa = new Bank(104, "Caixa", 1.04)
const bradesco = new Bank(237, "Bradesco", 1.20)
const itau = new Bank(341, "Itaú", 0.89)
const pagBank = new Bank(290, "PagBank", 1.00)
const nuBank = new Bank(260, "NuBank", 0.90)
const bb = new Bank(001, "Banco do Brasil", 0.67)
const santander = new Bank(33, "Santander", 1.15)

console.log(caixa) // Bank { bankCode: 104, bankName: 'Caixa'}
console.log(caixa.bankCode);
console.log(caixa.transferTax); // 1.04
caixa.transferTax = 1.14
console.log(caixa.transferTax); // 1.14

console.log(bradesco) // Bank { bankCode: 237, bankName: 'Bradesco' }
console.log(itau) // Bank { bankCode: 341, bankName: 'Itaú' }
console.log(pagBank) // Bank { bankCode: 290, bankName: 'PagBank' }
console.log(nuBank) // Bank { bankCode: 260, bankName: 'NuBank' }
console.log(bb) // Bank { bankCode: 1, bankName: 'Banco do Brasil' }
console.log(santander) // Bank { bankCode: 33, bankName: 'Santander' }


console.log(Bank.createdBanks)


module.export = { Bank, caixa };