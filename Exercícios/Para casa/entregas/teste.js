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
            return console.log(`Foi cobrado uma taxa de ${Bank.transferTax}, sacou o valor de ${amount - Bank.transferTax}. Você realizou ${this.#qtdWithdrawal} saque(s). Você não possui mais nenhuma retirada gratuita.`)
        }
        if (this.#qtdWithdrawal == 1 && amount <= this.#balance) {
            debit(amount);
            withdrawalTax(1);
            return console.log(`Sacou o valor de ${amount - Bank.transferTax}. Você realizou ${this.#qtdWithdrawal} saque(s). Você não possui mais nenhuma retirada gratuita.`)
        } if (this.#qtdWithdrawal == 0 && amount <= this.#balance) {
            debit(amount);
            withdrawalTax(1);
            return console.log(`As primeiras 2 retiradas são gratuitas. Retirada realizada com sucesso. O saldo atual é de R$${this.#balance}. Total de retiradas realizadas: ${this.#qtdWithdrawal}. Você ainda possui 1 retirada gratuita`);
        } if (amount > this.#balance) {
            return console.log(`Você não possui saldo o suficiente`)
        }
    }

} 