class Bank {
	bankCode;
	bankName;
	#trasferTax;

	static createdBanks = [];

	constructor(bankCode, bankName, transferTax) {
		this.bankCode = bankCode;
		this.bankName = bankName;
		this.#trasferTax = transferTax;
		this.constructor.createdBanks.push({
			bankCode: this.bankCode,
			qtdClients: 0,
		});
	}

	get transferTax() {
		return this.#trasferTax;
	}
}

const bank1 = new Bank(100, 'LuaBank', 0.01);
const bank2 = new Bank(200, 'AnotherBank', 0.02);

module.exports = { Bank, bank1, bank2 };
