class Bank {
    bankCode
    bankName
    #transferTax
    static createdBanks = []

    constructor(bankCode, bankName, transferTax) {
        this.bankCode = bankCode
        this.bankName = bankName
        this.#transferTax = transferTax
        Bank.createdBanks.push({bankCode: this.bankCode, qtdClients: 0})  
        //this.constructor.createdBanks.push({bankCode: this.bankCode, qtdClients:0 }) - também tá certo
    }

    get transferTax() {
        return this.#transferTax
    }

    set transferTax(tax) {
        this.#transferTax = tax
    }
}

//const bbank = new Bank(1, "BBank", 0.05)
//console.log(bbank)
//console.log(Bank.createdBanks)

module.exports = { Bank }
//com chaves dá pra exportar mais de um e não tem como mudar de nome no require