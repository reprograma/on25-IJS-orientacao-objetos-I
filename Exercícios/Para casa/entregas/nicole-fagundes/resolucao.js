class Bank {
    bankCode;
    bankName;
    #transferTax;

    static createdBanks = [];

    constructor(bankCode, bankName, transferTax){
        this.bankCode = bankCode;
        this.bankName = bankName;
        this.#transferTax = transferTax;
        this.constructor.createdBanks.push({bankCode: this.bankCode, qtdClientes: 0} )
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
const bank2 = new Bank(200, "banco2", 0.02)
console.log(bank1) //Bank { bankCode: 100, bankName: 'banco1' }
console.log(bank2) //Bank { bankCode: 200, bankName: 'banco2' }




// =====CLIENT======
class Client {
    name;
    #cpf;
    banks = [];

    constructor(name, cpf){
        this.name = name;
        this.#cpf = cpf;
    }

    get cpf(){
        return this.#cpf;
    }

    addBank(bank){

        if(!(bank instanceof Bank)){
            console.log("Informe um banco válido");
            return
        }

        if(this.banks.find((element) => element.bankName === bank.bankName)){
            console.log("Esse banco já foi associado a esse cliente!")
        }else{

            this.banks.push(bank);
        
            const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode);
            Bank.createdBanks[bankIndex].qtdClientes++;
        }

    }

    removeBank(bank){

        if(!(bank instanceof Bank)){
            console.log("Informe um banco válido");
            return
        }

        if(this.banks.find((element) => element.bankName === bank.bankName)){
            this.banks.shift(bank)
            const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode);
            Bank.createdBanks[bankIndex].qtdClientes--;
            console.log("Banco removido com sucesso!")
        }else{
            console.log("Este banco não está associado a você.")
        }

        
    }
}

const client1 = new Client("nicole", 123)
// console.log(client1)
// client1.addBank("");
// client1.addBank(bank1);
client1.addBank(bank1);
// client1.removeBank(bank2)

console.log(client1)    //Client {
                        //name: 'nicole',
                        //banks: [ Bank { bankCode: 100, bankName: 'banco1' } ]
                        //}

const client2 = new Client("rodrigo", 456) 
client2.addBank(bank2)
console.log(client2) //Client {
                    //name: 'rodrigo',
                    //banks: [ Bank { bankCode: 200, bankName: 'banco2' } ]
                    //}
console.log(Bank.createdBanks) //[{ bankCode: 100, qtdClientes: 1 },{ bankCode: 200, qtdClientes: 1 }]
console.log(client1.cpf) //123




//=====BANK ACCOUNT=======
class BankAccount{
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance;

    constructor(client, bank, accountNumber, agencyNumber){

        if(!(bank instanceof Bank)){
            return console.log("Banco inválido!")
        }

        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
        this.#balance = 0;
        this.isActive = true
    }

    get balance(){
        return this.#balance;
    }

    credit(amount){
        this.#balance += amount;
        console.log(`O novo saldo da conta é R$ ${this.#balance}`)
    }

    debit(amount){
        this.#balance -= amount;
        console.log(`Seu saldo atual é de R$ ${this.balance}`)
    }

    transferTo(anotherAccount, amount){
        if(!(anotherAccount instanceof BankAccount)){
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

    closeAccount(){
        if (this.balance === 0){
            this.isActive = false;
            console.log("Conta encerrada");
        } else {
            console.log("Você ainda possui saldo na conta, não pode encerra-la.")
        }
    }

}

const bankAccount1 = new BankAccount(client1, bank1, 1234, 123)


console.log(bankAccount1) //BankAccount {
                        //client: Client { name: 'nicole', banks: [ [Bank] ] },
                        //bank: Bank { bankCode: 100, bankName: 'banco1' },
                        //accountNumber: 1234,
                        //agencyNumber: 123,
                        //isActive: true
                        //}



const bankAccount2 = new BankAccount(client2, bank2, 321, 123)
// bankAccount1.closeAccount()
bankAccount1.credit(20)
bankAccount1.credit(40)
bankAccount1.debit(10)
bankAccount1.transferTo(bankAccount2, 20) //Transferência realizada com sucesso! Seu saldo atual é de R$ 30 e o saldo da conta destino é de R$ 20
console.log(bankAccount2.balance) //O novo saldo da conta é R$ 20
// console.log(bankAccount1)
// bankAccount1.closeAccount()

console.log(bankAccount2) //BankAccount {
                        //client: Client { name: 'rodrigo', banks: [ [Bank] ] },
                        //bank: Bank { bankCode: 200, bankName: 'banco2' },
                        //accountNumber: 321,
                        //agencyNumber: 123,
                        //isActive: true
                        //}

