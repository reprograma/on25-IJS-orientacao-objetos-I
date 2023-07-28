class Bank{
    #trasferTax
    static createdBanks = [];
    constructor(bankCode,bankName,trasferTax){
        this.bankCode = bankCode;
        this.bankName = bankName;
        this.#trasferTax = trasferTax;  
        this.qtdClients = 0;
        Bank.createdBanks.push({ bankCode: this.bankCode, qtdClients: 0 });
    }  
    get transferTax(){
        return this.#trasferTax;
    }
    set transferTax(newTransferTax){
        this.#trasferTax = newTransferTax;
    }
}
module.exports = { Bank }