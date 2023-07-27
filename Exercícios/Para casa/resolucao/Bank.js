class Bank {
	bankCode;
	bankName;

	static createdBanks = [];

	constructor(bankCode, bankName) {
		this.bankCode = bankCode;
		this.bankName = bankName;
		this.constructor.createdBanks.push({
			bankCode: this.bankCode,
			qtdClients: 0,
		});
	}
}

module.exports = { Bank }
