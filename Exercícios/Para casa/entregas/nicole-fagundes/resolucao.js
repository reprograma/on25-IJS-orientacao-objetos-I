class Bank {
    bankcode;
    bankName;
    #transferTax;

    static createdBanks = [];

    constructor(bankcode, bankName, transferTax){
        this.bankcode = bankcode;
        this.bankName = bankName;
        this.#transferTax = transferTax;
    }

    get transferTax(){
        return this.#transferTax;
    }

    set transferTax(newTransferTax){
        return this.#transferTax = newTransferTax;
    }

}

console.log(Bank.createdBanks)
const bank1 = new Bank(100, "banco1", 0.01)
console.log(bank1)

// =====CLIENT======

class Client {
    name;
    #cpf;
    banks;

    constructor(name, cpf){
        this.name = name;
        this.#cpf = cpf;
        this.banks = [];
    }

    get cpf(){
        return this.#cpf;
    }

    addBank(bank){
        this.banks.push(bank);
        console.log("banco relacionado com sucesso!")

    }

    removeBank(bank){
        this.banks.shift(bank)
    }
}

// const client1 = new Client("nicole", 123)
// console.log(client1)
// // client1.addBank(bank1);
// client1.removeBank(bank1)
// console.log(client1)
// const client2 = new Client("rodrigo", 456)
// console.log(client2)

//=====BANK ACCOUNT=======

class BankAccount{
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance;
    #qtdWithdrawal;
    #withdrawalTax;

    constructor(client, bank, accountNumber, agencyNumber){
        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
        this.#balance = 0;
        this.#qtdWithdrawal = 0;
        this.#withdrawalTax = 0.03;
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

    set withdrawalTax(newWithDrawalTax){
        return this.#withdrawalTax = newWithDrawalTax
    }

    credit(amount){
        this.#balance += amount;
        console.log(`O novo saldo da conta é ${this.#balance}`)
    }

    debit(amount){
        this.#balance -= amount;
        console.log(`Seu saldo atual é de R$ ${this.balance}`)
    }

    transferTo(anotherAccount, amount){
        if(!(anotherAccount instanceof Bank)){
            console.log("Informe uma conta válida.")
            return;
        }

        if(this.#balance < amount){
            console.log(`Você não tem saldo suficiente para realizar essa operação. Seu saldo atual é de R$ ${this.balance}`);
            return;
        }

        this.debit(amount);
        anotherAccount.credit(amount);
        console.log(`Transferência realizada com sucesso! Seu saldo atual é de R$ ${this.#balance} e o saldo da conta destino é de R$ ${anotherAccount.#balance}`)
    }

    cashWithdrawal(amount){

        if(this.#qtdWithdrawal > 3){
            this.debit(amount) += this.#withdrawalTax
            console.log("Você ultrassou a quantidade de retiradas gratuitas. A partir de agora, será cobrada uma taxa.")
        }else{
            this.debit(amount);
            this.#qtdWithdrawal += 1;
            console.log(`Retirada realizada. O saldo atual da conta é de ${this.#balance}`);
            console.log(`Você agora tem ${this.#qtdWithdrawal}. Caso passe de três tentativas, será cobrada uma taxa`)
        }

        
        
    }

    closeAccount(){
        console.log("Conta ")
    }

}

// const bankAccount1 = new BankAccount(client1, bank1, 1234, 123)
// console.log(bankAccount1)
// // bankAccount1.credit(20)
// // console.log(bankAccount1)
