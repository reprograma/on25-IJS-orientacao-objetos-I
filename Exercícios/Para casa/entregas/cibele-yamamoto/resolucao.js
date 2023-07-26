class Bank {
    bankCode;
    bankName;
    #transferTax;

    static createdBanks=[];

    constructor(bankCode, bankName, transferTax) {
        this.bankCode = bankCode;
        this.bankName = bankName;
        this.#transferTax = transferTax;
        this.constructor.createdBanks.push({"bankCode": bankCode, "qtdClients": 0})
    }

    get transferTax() {
        return this.#transferTax;
    }

    set transferTax(newTransferTax) {
        this.#transferTax = newTransferTax
    }
}

// A propriedade estática createdBanks é uma array vazia
// antes de nenhum banco ter sido criado:
console.log(Bank.createdBanks); // [ ]

const bank1 = new Bank(100, 'LuaBank', 0.01); // Instanciação de um objeto Bank.
console.log(bank1); // { bankCode: 100, bankName: 'LuaBank' }

// Agora a propriedade estática createdBanks é uma
// array que contém 1 objeto, que corresponde ao banco criado.
// O objeto possui o código do banco e a quantidade de clientes (que inicialmente é 0):
console.log(Bank.createdBanks); // [ { bankCode: 100, qtdClients: 0 } ]

console.log(bank1.transferTax); // 0.01
bank1.transferTax = 0.02
console.log(bank1.transferTax); // 0.02


class Client {
    name;
    #cpf;

    constructor(name, cpf) {
        this.name = name,
        this.#cpf = cpf
        this.banks=[]
    }

    get cpf() {
        return this.#cpf;
    }

    addBank(bank) {
        if(bank instanceof Bank) {
            let indexBanks = this.banks.findIndex((banco) => banco.bankCode == bank.bankCode)
            if(indexBanks <= 0) {
                this.banks.push(bank)
                let indexCreatedBanks = Bank.createdBanks.findIndex((banco) => banco.bankCode == bank.bankCode)
                console.log(Bank.createdBanks)
                Bank.createdBanks[indexCreatedBanks]["qtdClients"] += 1;
            } else {
                console.log("Banco já associado!")
            }
        } else {
            console.log("Erro: banco inválido!")
        }
    }

    removeBank(bank) {
        if(bank instanceof Bank) {
            let indexBank = this.banks.findIndex((banco) => banco.bankCode == bank.bankCode)
            if(indexBank >= 0) {
                this.banks.pop(bank)
                let indexCreatedBanks = Bank.createdBanks.findIndex((banco) => banco.bankCode == bank.bankCode)
                Bank.createdBanks[indexCreatedBanks]["qtdClients"] -= 1;
            } else {
                console.log("Banco não encontrado")
            }
        } else {
            console.log("Erro: banco inválido!")
        }
  
    }
}

client1 = new Client('Maria', 12345678900); // Instanciação de um objeto Client.
client2 = new Client('Joao', 23456789001); // Instanciação de um objeto Client.
console.log(client1); // { name: 'Maria', banks: [] }
console.log(client1.cpf); // 12345678900

// Adicionando um banco a um cliente
client1.addBank(bank1); // Banco 100 adicionado à cliente Maria
console.log(client1);// { name: 'Maria', banks: [ Bank { bankCode: 100, bankName: 'LuaBank' } ] }

// Adicionando um banco a um cliente
client2.addBank(bank1); // Banco 100 adicionado à cliente Maria
console.log(client2);// { name: 'Maria', banks: [ Bank { bankCode: 100, bankName: 'LuaBank' } ] }

// Removendo um banco de um cliente
client1.removeBank(bank1); // Banco 100 removido da cliente Maria
console.log(client1); // { name: 'Maria', banks: [] }

// Adicionando um banco a um cliente
client1.addBank(bank1); // Banco 100 adicionado à cliente Maria
console.log(client1);// { name: 'Maria', banks: [ Bank { bankCode: 100, bankName: 'LuaBank' } ] }


class BankAccount {
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance;
//    #qtdWithdrawal=0;
    #withdrawalTax;

    constructor(client, bank, accountNumber, agencyNumber) {
        if(!(client instanceof Client)) {
            console.log("Invalid client!")
            return
        }
        if(!(bank instanceof Bank)) {
            console.log("Invalid bank!")
            return
        }
        //verificar se a pessoa é cliente desse banco
        let index = client.banks.findIndex((banco) => banco.bankCode == bank.bankCode)
        if(index >= 0) {
            this.client = client;
            this.bank = bank;
            this.accountNumber = accountNumber;
            this.agencyNumber = agencyNumber;
            this.#balance = 0;
            this.#withdrawalTax = 0.03;
        } else {
            console.log("A pessoa não é cliente desse banco!")
        }
    }

    get balance() {
        return this.#balance;
    }

    /*
    get qtdWithdrawal {
        return this.#qtdWithdrawal;
    }
    */

    get withdrawalTax() {
        return this.#withdrawalTax;
    }

    /*
    set withdrawalTax(newWithdrawalTax) {
        this.#withdrawalTax = newWithdrawalTax;
    }
    */
    
    credit(amount) {
        this.#balance += amount;
        console.log("O novo saldo da conta é: R$" + this.#balance)
    }

    debit(amount) {
        this.#balance -= amount;
        console.log("O novo saldo da conta é: R$" + this.#balance)
    }

    transferTo(anotherAccount, amount) {
        if((anotherAccount instanceof BankAccount)) {
            if(amount > this.#balance) {
                console.log("Saldo insuficiente!")
            } else {
                if(this.bank.bankCode == anotherAccount.bank.bankCode) {
                    this.debit(amount);
                    anotherAccount.credit(amount);
                } else {
                    this.debit(amount*this.#withdrawalTax);
                    anotherAccount.credit(amount);
                }
                console.log("O saldo atual da conta de origem é de R$" + this.#balance)
                console.log("O saldo atual da conta de destino é de R$" + anotherAccount.#balance)
            }
        } else {
            console.log("Invalid account!")
            return
        }
    }

    /*
    cashWithdrawal(amount) {

    }
    */

    closeAccount() {
        this.client = undefined;
        this.bank = undefined;
        this.accountNumber = undefined;
        this.agencyNumber = undefined;
        this.qtdWithdrawal = 0;
        console.log(this);
    }
}

const bankAccount1 = new BankAccount(client1, bank1, 1111, 2222); // Instanciação de um objeto BankAccount.
const bankAccount2 = new BankAccount(client2, bank1, 3333, 4444);
console.log(bankAccount1);
// { 
//   client: Client { name: 'Maria', banks: [ [Bank] ] },
//   bank: Bank { bankCode: 100, bankName: 'LuaBank' },
//   accountNumber: 1111,
//   agencyNumber: 2222,
//   qtdWithdrawal: 0
// }

console.log(bankAccount1.balance); // 0

// Creditando dinheiro na conta
bankAccount1.credit(1000); // O novo saldo da conta é: R$ 1000

// Debitando dinheiro da conta
bankAccount1.debit(300); // O novo saldo da conta é: R$ 700

// Transferindo de uma conta para outra
bankAccount1.transferTo(bankAccount2, 200);

// O saldo atual da conta de origem é de R$ 500
// O saldo atual da conta de destino é de R$ 200

// Fechando a conta
bankAccount1.closeAccount(); // Conta encerrada!

// BankAccount {
//   client: undefined,
//   bank: undefined,
//   accountNumber: undefined,
//   agencyNumber: undefined,
//   qtdWithdrawal: 0
// }


//qtdWithdrawal
//withdrawalTax
//cashWithdrawl