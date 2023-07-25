class Bank {
    bankCode;
    bankName;
    #transferTax;
    qtdClients;
    static createdBanks = [];
    constructor(bankCode, bankName, transferTax) {
        this.#transferTax = transferTax;
        this.bankCode = bankCode;
        this.bankName = bankName;
        this.qtdClients = 0;

        Bank.createdBanks.unshift(`bankCod: ${[this.bankCode]} qtdClients: ${[this.qtdClients]}`);
    }

    get transferTax() {
        return this.#transferTax;
    }
    set transferTax(newTax) {
        return this.#transferTax = newTax;
    }
}

console.log(Bank.createdBanks) // []

const caixa = new Bank(104, "Caixa", 1.04)
const bradesco = new Bank(237, "Bradesco", 1.20)
const itau = new Bank(341, "Itaú", 0.89)
const pagBank = new Bank(290, "PagBank", 1.00)
const nuBank = new Bank(260, "NuBank", 0.90)
const bb = new Bank(001, "Banco do Brasil", 0.67)
const santander = new Bank(33, "Santander", 1.15)

console.log(caixa) // Bank { bankCode: 104, bankName: 'Caixa'}
console.log(caixa.bankCode);
console.log(caixa.transferTax); // 1.04
caixa.transferTax = 1.14
console.log(caixa.transferTax); // 1.14

console.log(bradesco) // Bank { bankCode: 237, bankName: 'Bradesco' }
console.log(itau) // Bank { bankCode: 341, bankName: 'Itaú' }
console.log(pagBank) // Bank { bankCode: 290, bankName: 'PagBank' }
console.log(nuBank) // Bank { bankCode: 260, bankName: 'NuBank' }
console.log(bb) // Bank { bankCode: 1, bankName: 'Banco do Brasil' }
console.log(santander) // Bank { bankCode: 33, bankName: 'Santander' }


console.log(Bank.createdBanks)

class Client {
    name;
    #cpf;
    banks = [];

    constructor(name, cpf) {
        this.name = name;
        this.#cpf = cpf;
    }

    get cpf() {
        return this.#cpf;
    }

    addBank(bank) {
        if (!(bank instanceof Bank)) {
            return console.log('Informe um Banco válido');
        } if ((this.banks.includes(bank.bankName)) == true) {
            return console.log('Este cliente já possui vínculo a este banco');
        }
        else {
            this.banks.unshift(bank.bankName)
            bank.qtdClients += 1;
            console.log(bank.qtdClients)
            return console.log("Cliente vínculado com sucesso");
        }
    }

    removeBank(bank) {
        if (!(bank instanceof Bank)) {
            return console.log('Informe um Banco válido');
        } if ((this.banks.includes(bank.bankName)) == true) {
            bank.qtdClients -= 1;
            let index = this.banks.indexOf(bank.bankName);
            this.banks.splice(index, 1);
            return console.log('Banco desvinculado com sucesso');
        } else {
            return console.log("Esse banco não está vinculado")
        }
    }

}



const doria = new Client("Dória", "1234");
const dhilly = new Client("Dhilly", "2345");
console.log(doria)
console.log(doria.cpf)

doria.addBank(caixa)
console.log(doria)
doria.addBank(bradesco)
doria.addBank(caixa)
dhilly.addBank(caixa)
console.log(caixa.qtdClients)

doria.removeBank(caixa)
console.log(doria)

console.log(caixa.qtdClients)



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
            const anotherBank = anotherAccount.bank;
            if (amount <= this.balance && anotherBank == this.bank) {
                anotherAccount.balance += amount;
                this.balance -= amount;
                return console.log(`Transferência realizada com sucesso para ${anotherAccount.client.name}. Seu saldo atual é de R$ ${this.balance}`);
            } else if (amount <= this.balance && anotherBank != this.bank) {
                const transferTax = anotherBank.transferTax;
                anotherAccount.balance += (amount - transferTax);
                this.balance -= amount;
                return console.log(`Foi cobrada uma taxa de R$ ${transferTax}. Transferência realizada com sucesso no valor de R$ ${(amount - transferTax)} para ${anotherAccount.client.name}. Seu saldo atual é de R$ ${this.balance}`);
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

conta1 = new BankAccount(doria, bradesco, 5678, 4567)
conta2 = new BankAccount(dhilly, caixa, 9087, 5006)
console.log(conta1)

conta1.credit(500)

conta1.transferTo(conta2, 100)
// console.log(conta2.balance)



conta1.cashWithdrawal(100)
conta1.cashWithdrawal(50)

conta1.cashWithdrawal(20)
conta1.debit(230)
conta1.closeAccount()
console.log(conta1)