class Bank {
  static createdBanks = [];

  constructor(bankCode, bankName, transferTax) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this._transferTax = transferTax;
    this.constructor.createdBanks.push({
      bankCode: this.bankCode,
      qtdClients: 0,
    });
  }

  get transferTax() {
    return this._transferTax;
  }

  set transferTax(value) {
    this._transferTax = value;
  }
}

module.exports = { Bank };
