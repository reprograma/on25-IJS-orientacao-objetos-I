class Bank {
    bankCode;
    bankName;
    #transferTax;
    static createdBanks = [];

    constructor(bankCode, bankName, transferTax) {
        this.bankCode = bankCode,
        this.bankName = bankName,
        this.#transferTax = transferTax,
        Bank.createdBanks.push({
            bankCode: this.bankCode,
            qtyClients: 0
        });
    }

    get transferTax(){
        return this.#transferTax;
    }

    set transferTax(newTax){
        this.#transferTax = newTax;
    }

    static isBank(bank){
        if(!(bank instanceof Bank)){
            console.log("Error! Enter a valid bank");
            return false;
        } else {
            return true;
        }
    }

    findBank(){
        let bankItem = Bank.createdBanks.find((item) => item.bankCode == this.bankCode);
        return bankItem;
    }

    addClient(){
        let bankItem = this.findBank();
        bankItem.qtyClients += 1;
    }

    removeClient(){
        let bankItem = this.findBank();
        bankItem.qtyClients -= 1;
    }

}

module.exports = Bank;