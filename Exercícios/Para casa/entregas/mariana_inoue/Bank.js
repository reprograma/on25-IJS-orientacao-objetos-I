class Bank {
    bankCode;
    bankName;
    #transferTax;
    static createBanks = [];
  
    constructor(bankCode, bankName, transferTax) {
      this.bankCode = bankCode;
      this.bankName = bankName;
      this.constructor.createBanks.push({bankCode: this.bankCode, qtdClient: 0});
      this.#transferTax = transferTax;
    }
  
    get transferTax() {
      return this.#transferTax;
    }
  
    set transferTax(transferTax) {
      this.#transferTax = transferTax;
    }
  }

  module.exports = {Bank}