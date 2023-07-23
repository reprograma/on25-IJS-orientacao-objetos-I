import { Client } from "../../Client";
import { Bank } from "./Bank";


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
        console.log(`O saldo atualizado é de R$ ${balance}`);
    }

    debit(amount) {
        this.#balance -= amount;
        console.log(`O saldo atualizado é de R$ ${balance}`);
    }

    transferTo(anotherAccount, amount) {
        if (!(anotherAccount instanceof BankAccount)) {
            console.log('Informe uma conta válida')
            return
        } if (amount > this.balance) {
            return console.log(`Seu saldo atual é insuficiente, para realizar essa transferência`);
        } if (amount <= this.balance && anotherAccount.bankCode == this.bankCode) {
            anotherAccount.balance += amount;
            this.balance -= amount;
            return console.log(`Transferência realizada com sucesso, para ${anotherAccount.name}. Seu saldo atual é de R$${this.balance}`)
        } if (amount <= this.balance || anotherAccount.bankCode != this.bankCode) {
            anotherAccount.balance += (amount - anotherAccount.transferTax)
            this.balance -= amount;
            return console.log(`Foi cobrado uma taxa de R$${anotherAccount.transferTax}. Transferência realizada com sucesso no valor de ${(amount - anotherAccount.transferTax)} para ${anotherAccount.name}`)
        } else {
            return 'Ops, ocorreu um erro, tente novamnete mais tarde!'
        }
    }

    closeAccount() {
        if (this.#balance > 0) {
            return "Essa conta possui saldo, não será possível realizar a exclusão. Aproveite todos os nossos serviços!"
        } else {
            return "Conta excluída com sucesso"
        }
    }

    cashWithdrawal(amount) {
        if (this.#qtdWithdrawal > 2 && amount <= this.#balance) {
            debit(amount);
            this.#qtdWithdrawal += 1;
            return console.log(`Foi cobrado uma taxa de ${Bank.transferTax}, sacou o valor de ${amount - Bank.transferTax}. Você realizou ${this.#qtdWithdrawal} saque(s)`)
        }
        if (this.#qtdWithdrawal < 2 && amount <= this.#balance) {
            debit(amount);
            withdrawalTax(1);
            return console.log(`Sacou o valor de ${amount - Bank.transferTax}. Você realizou ${this.#qtdWithdrawal} saque(s). Lhe resta  saque(s) gratuítos`)
        }
    }

}

export { BankAccount }