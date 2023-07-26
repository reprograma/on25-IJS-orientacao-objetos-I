class Bank{
    bankCode
    bankName
    #transferTax
    numClients
    static createdBanks = []

    constructor(bankCode, bankName, transferTax){
        this.bankCode = bankCode
        this.bankName = bankName
        this.#transferTax = transferTax
        this.numClients = 0
        this.constructor.createdBanks.push({
            bankCode: this.bankCode, 
            numClients: this.numClients})
    }

    get transferTax() {
        return this.#transferTax
    }

    set transferTax(newTransferTax) {
        this.#transferTax = newTransferTax
    }

    
}

// console.log(Bank.createdBanks)

const bank1 = new Bank(100, "BreBank", 0.1)
// console.log(bank1)

// console.log(Bank.createdBanks)

// console.log(bank1.transferTax)
// bank1.transferTax = 0.2
// console.log(bank1.transferTax)

module.exports = { Bank, bank1 }