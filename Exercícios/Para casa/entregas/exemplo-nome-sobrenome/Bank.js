class Bank {
  bankCode;
  bankName;
  transferTax;
  static createdBanks = [];

  constructor(bankCode, bankName, transferTax) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this.transferTax = transferTax;
    this.constructor.createdBanks.push({ bankCode: this.bankCode, clients: 0 });
  }

  static addClient(bank) {
    this.createdBanks.forEach((cb) => {
      if (cb.bankCode == bank.bankCode) {
        cb.clients++;
      }
    });
  }
  static removeClient(bank) {
    this.createdBanks.forEach((cb) => {
      if (cb.bankCode == bank.bankCode) {
        cb.clients--;
      }
    });
  }
  s;
}

module.exports = Bank;
