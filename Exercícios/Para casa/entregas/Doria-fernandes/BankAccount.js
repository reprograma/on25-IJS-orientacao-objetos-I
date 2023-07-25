const { Bank } = require('./Bank');
const { Client } = require('./Client');


class BankAccount {
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance;
    #qtdWithdrawal;
    #withdrawalTax;


    constructor(client, bank, accountNumber, agencyNumber) {
        this.#balance = 0;
        this.#qtdWithdrawal = 0;
        this.#withdrawalTax = 7;
        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
    }

    get balance() {
        return this.#balance;
    }

    set balance(newBalance) {
        return this.#balance = newBalance;
    }

    get qtdWithdrawal() {
        return this.#qtdWithdrawal;
    }

    get withdrawalTax() {
        return this.#withdrawalTax;
    }

    set withdrawalTax(newWithdrawaTax) {
        this.#withdrawalTax += newWithdrawaTax;
    }

    credit(amount) {
        this.#balance += amount;
        console.log(`O saldo atualizado é de R$ ${this.#balance}`);
    }

    debit(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`O saldo atualizado é de R$ ${this.#balance}`);
        } else {
            console.log("Não foi possível realizar esta operação")
        }
    }

    transferTo(anotherAccount, amount) {
        if (!(anotherAccount instanceof BankAccount)) {
            console.log('Informe uma conta válida');
            return;
        } else if (amount > this.balance) {
            return console.log(`Seu saldo atual é insuficiente para realizar essa transferência`);
        } else {
            const anotherClientName = anotherAccount.client ? anotherAccount.client.name : 'cliente desconhecido';
            const anotherBank = anotherAccount.bank;
            if (amount <= this.balance && anotherBank == this.bank) {
                anotherAccount.balance += amount;
                this.balance -= amount;
                return console.log(`Transferência realizada com sucesso para ${anotherClientName}. Seu saldo atual é de R$ ${this.balance}`);
            } else if (amount <= this.balance && anotherBank != this.bank) {
                const transferTax = anotherBank.transferTax;
                anotherAccount.balance += (amount - transferTax);
                this.balance -= amount;
                return console.log(`Foi cobrada uma taxa de R$ ${transferTax}. Transferência realizada com sucesso no valor de R$ ${(amount - transferTax)} para ${anotherClientName}. Seu saldo atual é de R$ ${this.balance}`);
            } else {
                return console.log('Ops, ocorreu um erro. Tente novamente mais tarde!');
            }
        }
    }

    closeAccount() {
        if (this.#balance > 0) {
            return console.log("Essa conta possui saldo, não será possível realizar a exclusão. Aproveite todos os nossos serviços!")
        } else {
            this.client = null;
            this.bank = null;
            this.accountNumber = null;
            this.agencyNumber = null;
            this.#balance = 0;
            this.#qtdWithdrawal = 0;
            this.#withdrawalTax = 7;
            console.log("Conta excluída com sucesso");
        }
    }

    cashWithdrawal(amount) {
        if (this.#qtdWithdrawal >= 2 && amount <= this.#balance) {
            this.#balance -= amount;
            this.#qtdWithdrawal += 1;
            return console.log(`As primeiras 2 retiradas são gratuitas. Foi cobrado uma taxa de ${this.#withdrawalTax}, sacou o valor de ${amount - this.#withdrawalTax}, o saldo atual é de R$${this.#balance}. Você realizou ${this.#qtdWithdrawal} saque(s). Você não possui mais nenhuma retirada gratuita.`)
        }
        if (this.#qtdWithdrawal == 1 && amount <= this.#balance) {
            this.#balance -= amount;
            this.#qtdWithdrawal += 1;
            return console.log(`As primeiras 2 retiradas são gratuitas. Retirada realizada com sucesso. O saldo atual é de R$${this.#balance}. Total de retiradas realizadas: ${this.#qtdWithdrawal}.  Você não possui mais nenhuma retirada gratuita.`)
        } if (this.#qtdWithdrawal == 0 && amount <= this.#balance) {
            this.#balance -= amount;
            this.#qtdWithdrawal += 1;
            return console.log(`As primeiras 2 retiradas são gratuitas. Retirada realizada com sucesso. O saldo atual é de R$${this.#balance}. Total de retiradas realizadas: ${this.#qtdWithdrawal}. Você ainda possui 1 retirada gratuita`);
        } if (amount > this.#balance) {
            return console.log(`Você não possui saldo o suficiente`)
        } else {
            console.log("Ops, ocorreu algum erro")
        }
    }

}


module.exports = {BankAccount};