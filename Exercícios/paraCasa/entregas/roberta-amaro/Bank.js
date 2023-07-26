class Bank {
  bankCode;
  bankName;
  #transferTax;
  qtdClients;

  static createdBanks = [];

  constructor(bankCode, bankName, transferTax) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this.#transferTax = transferTax;
    this.qtdClients = 0;
    this.constructor.createdBanks.push({
      bankCode: this.bankCode,
      qtdClients: this.qtdClients,
    });
  }

  incrementClients() {
    this.qtdClients++;
  }
}
const bank1 = new Bank(100, "LuaBank", 0.01, 0);

console.log(bank1); // { bankCode: 100, bankName: 'LuaBank' }
console.log(Bank.createdBanks); // [ { bankCode: 100, qtdClients: 0 } ]
console.log(bank1.transferTax);

module.exports = {
  Bank,
};
