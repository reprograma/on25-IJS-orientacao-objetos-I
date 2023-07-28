const { Client } = require('./client.js')
const { Bank } = require('./bank.js')

class BankAccount{
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance;
    #qtdWithdrawal;
    #withdrawalTax;
    constructor(client,bank,accountNumber,agencyNumber){
        if(client instanceof Client && bank instanceof Bank){
            if(!(client.banks.includes(bank))) {
                return console.log(`A conta só poderá ser criada se você for cliente do banco.`)
            } else { 
                this.client = client;
                this.bank = bank;
                this.accountNumber = accountNumber;
                this.agencyNumber = agencyNumber;
                this.#balance = 0;
                this.#qtdWithdrawal = 0;
                this.#withdrawalTax = 0.03;
            } 
        }else{
            console.log('Esse não é um cliente e banco válido!')
        } 
    }
    get balance(){
        return this.#balance;
    }
    get qtdWithdrawal(){
        return this.#qtdWithdrawal;
    }
    get withdrawalTax(){
        return this.#withdrawalTax;
    }
    set withdrawalTax(newWithdrawalTax){
        this.#withdrawalTax = newWithdrawalTax;
    }
    credit(amount){ 
        this.#balance += amount;
        console.log(`O valor de R$${amount} foi adicionado à conta.`)
    }
    debit(amount){
        if(amount <= this.#balance){
            this.#balance -= amount;
            console.log(`O valor de R$${amount} foi retirado da conta.`)
        }else{
            console.log('Não há saldo suficiente para realizar essa operação.')
        }
    }
    transferTo(anotherAccount, amount){
        if(anotherAccount instanceof BankAccount){
            if(amount <= this.#balance){ 
                if(this.bank === anotherAccount.bank){
                    this.#balance -= amount;
                    anotherAccount.#balance += amount;
                    console.log(`O valor de R$${amount} foi transferido para a conta ${anotherAccount.accountNumber}.`)
                }else{
                    this.#balance -= (amount + (amount * this.bank.transferTax));
                    anotherAccount.#balance += amount ;
                    console.log(`O valor de R$${amount} foi transferido para a conta ${anotherAccount.accountNumber}.`)
                }
            }else{
                console.log('Não há saldo suficiente para realizar essa operação.')
            }
        }else{
            console.log('Não é uma conta bancária válida.')
        }
    }
    cashWithdrawal(amount){
        if(amount <= this.#balance){
            if(this.#qtdWithdrawal < 3){
                this.#balance -= amount;
                this.#qtdWithdrawal += 1;
                console.log(`O valor de R$${amount} foi retirado da conta.`)
                console.log(`Você já realizou ${this.#qtdWithdrawal} retiradas.`)
                console.log(`Você ainda possui ${3 - this.#qtdWithdrawal} retiradas gratuitas.`)
            }else{
                this.#balance -= amount + (amount * this.#withdrawalTax);
                this.#qtdWithdrawal += 1;
                console.log(`O valor de R$${amount} foi retirado da conta.`)
                console.log(`O limite de retiradas gratuitas é de 3 e você já realizou ${this.#qtdWithdrawal} retiradas.`)
                console.log(`A taxa de retirada é de ${this.#withdrawalTax * 100}%.`)
            }
        }else{
            console.log('Não há saldo suficiente para realizar essa operação.')
        }
    }  
    closeAccount() {
        if (this.#balance != 0) {
          console.log('Não é possível fechar a conta pois há saldo nela.')
        } else { 
            return Object.keys(this).forEach(key => this[key] = undefined),
            console.log('A conta foi fechada com sucesso.');
        }
    }
}
module.exports = { BankAccount }