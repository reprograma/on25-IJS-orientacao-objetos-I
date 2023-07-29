class Bank {
  bankCode;
  bankName;
  #transferTax;

  static createBanks = [];

  constructor(bankCode, bankName, transferTax) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this.#transferTax = transferTax;
    this.constructor.createBanks.push({
      bankCode: this.bankCode,
      qtdClient: 0,
    });
  }

  get transferTax() {
    return this.#transferTax;
  }
}

module.exports = { Bank };
