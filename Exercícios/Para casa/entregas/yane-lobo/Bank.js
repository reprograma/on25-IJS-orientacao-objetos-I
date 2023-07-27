export class Bank {
    
    static createdBanks = []
    static bankCode = 1
    #transferTax

    constructor(bankName, transferTax){
    this.bankCode = Bank.bankCode++
    this.bankName = bankName
    this.#transferTax = transferTax 
    this.numberOfClients = 0
    Bank.createdBanks.push({ bankCode: this.bankCode, numberOfClients: 0 })

}

    get transferTax() {
        return this.#transferTax
    }

    set transferTax(newTax){
        console.log(`${this.bankName}'s transfer tax was set to: $ ${newTax}`)
    }

}


