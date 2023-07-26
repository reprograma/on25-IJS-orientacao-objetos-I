class Bank {
	static createdBanks = [];
  
	constructor(bankCode, bankName, transferTax) {
	  this.bankCode = bankCode;
	  this.bankName = bankName;
	  this._transferTax = transferTax;
  
	  Bank.createdBanks.push({ bankCode: this.bankCode, customers: 0 });
	}
  
	get transferTax() {
	  return this._transferTax;
	}
  
	set transferTax(newTax) {
	  this._transferTax = newTax;
	}
  
	addCustomer() {
	  for (let bank of Bank.createdBanks) {
		if (bank.bankCode == this.bankCode) {
		  bank.customers++;
		  break;
		}
	  }
	}
  
	removeCustomer() {
	  for (let bank of Bank.createdBanks) {
		if (bank.bankCode == this.bankCode) {
		  bank.customers--;
		  break;
		}
	  }
	}
  }
  
module.exports = { Bank }
