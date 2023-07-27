class Bank {
  bankCode;
  bankName;
  #transferTax;
  
  static createdBanks = [];

  constructor(bankCode, bankName, transferTax, createdBanks) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this.constructor.transferTax = transferTax;
    this.constructor.createdBanks.push({ 
      bankCode: this.bankCode, 
      qtyClients: 0 
    });
  }
}

module.exports({ Bank });