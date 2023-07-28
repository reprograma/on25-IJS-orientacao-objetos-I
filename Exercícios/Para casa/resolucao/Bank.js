class Bank {
	bankCode;
	bankName;

	#transferTax;

	static createdBanks = [];

	constructor(bankCode, bankName, transferTax) {
		this.bankCode = bankCode;
		this.bankName = bankName;
		this.#transferTax = transferTax;
		this.totalClients = 0;
		this.constructor.createdBanks.push({
			bankCode: this.bankCode,
			totalClients: this.totalClients
		});
	}

	get transferTax() {
		return this.#transferTax;
	}

	set transferTax(tax) {
		return this.#transferTax = tax;
	}

	static getCreatesBanks() {
		return Bank.createdBanks;
	}
}

// const bank1 = new Bank('001', 'Banco da Debbs', 2);

// console.log(Bank.createdBanks);

// console.log(bank1.transferTax);
// bank1.transferTax = 0.02
// console.log(bank1.transferTax);

module.exports = Bank;
