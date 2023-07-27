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

const bank1 = new Bank(100, "laisBank", 0.1)

module.exports = { Bank, bank1 }
