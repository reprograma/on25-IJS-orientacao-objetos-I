const { Bank } = require('./Bank');

class Client {
	name;
	#cpf;
	banks = [];

	constructor(name, cpf) {
		this.name = name;
		this.#cpf = cpf;
	}

	hasAccountInThisBank(bank) {
		return (
			this.banks.find((element) => element.bankCode === bank.bankCode) !==
			undefined
		);
	}

	addBank(bank) {
		// Verifica se é instância de Bank
		if (!(bank instanceof Bank)) {
			console.log('Informe um banco válido');
			return;
		}

		// Verifica se já possui conta no banco
		if (this.hasAccountInThisBank(bank)) {
			console.log(
				`Cliente do CPF ${this.cpf} já possui conta no banco ${bank.bankName}`
			);
			return;
		}

		// Adiciona o banco e aumenta o número de clientes
		this.banks.push(bank);
		const bankIndex = Bank.createdBanks.findIndex(
			(element) => element.bankCode === bank.bankCode
		);
		Bank.createdBanks[bankIndex].qtdClients++;

		console.log(`Banco ${bank.bankCode} adicionado à cliente ${this.name}`);
	}

	removeBank(bank) {
		// Verifica se é instância de Bank
		if (!(bank instanceof Bank)) {
			console.log('Informe um banco válido');
			return;
		}

		// Verifica se possui conta no banco
		if (!this.hasAccountInThisBank(bank)) {
			console.log(
				`Cliente do CPF ${this.cpf} não possui conta no banco ${bank.bankName} para ser removida`
			);
			return;
		}

		// Remove o banco e diminui o número de clientes
		this.banks = this.banks.filter(
			(element) => element.bankCode !== bank.bankCode
		);
		const bankIndex = Bank.createdBanks.findIndex(
			(element) => element.bankCode === bank.bankCode
		);
		Bank.createdBanks[bankIndex].qtdClients--;

		console.log(`Banco ${bank.bankCode} removido da cliente ${this.name}`);
	}
}

const client1 = new Client('Maria', 123456789);
const client2 = new Client('Sandra', 987654321);

module.exports = { Client, client1, client2 };
