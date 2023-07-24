class Bank {
  bankcode;
  bankName;
  #transferTax;
  // createdBanks;

  constructor(bankcode, bankName, transferTax) {
    this.bankcode = bankcode;
    this.bankName = bankName;
    this.#transferTax = transferTax;
  }

  get transferTax() {
    return this.#transferTax
  }

  set transferTax(newTax) {
    return this.#transferTax = newTax;
  }
}

const laissa = new Bank( 123 , "NuBank", 0.05);

console.log(laissa);
console.log(laissa.transferTax)
laissa.transferTax = 0.06;
console.log(laissa.transferTax)