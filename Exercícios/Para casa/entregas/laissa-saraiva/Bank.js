class Bank {
  bankCode;
  bankName;
  #transferTax;
  
  static createdBanks = []

  constructor(bankCode, bankName, transferTax) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this.#transferTax = transferTax;
    this.constructor.createdBanks.push;
    this.qtdClient = 0;
    ({bankCode: this.bankCode, qtdClientes: this.qtdClient })
  }

  get transferTax() {
    return this.#transferTax
  }
  
  set transferTax(newTax) {
    return this.#transferTax = newTax;
  }
}

const laissaBank = new Bank( 123 , "laissaBank", 0.05);
const devBank = new Bank( 456, "DevBank", 0.08) 
console.log(laissaBank);
console.log(laissaBank.transferTax)
laissaBank.transferTax = 0.06;
console.log(laissaBank.transferTax)

console.log(Bank.createdBanks)

module.exports = {Bank};