const { Bank } = require("./bank.js");
const { Client } = require("./Client.js");


class BankAccount {
    client;
    Bank;
    accountNumber;
    agencyNumber;
    #balance = 0;
    

    constructor(client, Bank, accountNumber, agencyNumber){
        this.client = client;
        this.Bank = Bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;

    }
    //A conta só pode ser criada caso a pessoa seja cliente desse banco.
    CreateAccount(){
        if(!(client instanceof Client)){
          return  console.log("É preciso ser um cliente para abrir uma conta")
        }if(!(bank instanceof Bank)){
            return console.log("Necessário um banco válido")
        }if(!(client.banks.includes(bank))){
            return console.log("É preciso ser cliente do banco para abrir uma conta")
        }
    }
    get balance(){
        return this.#balance;
    }

    
    credit(amount){
        this.#balance += amount;

        console.log(
        `o valor depositado foi de R$ ${amount} 
        e seu saldo é de R$ ${this.#balance}`
        );
       
     }
  
    debit(amount){
        this.#balance -= amount;

        console.log(
        `o valor sacado foi de R$ ${amount} 
        e seu saldo é de R$ ${this.#balance}`
        );
    } 
    
    transferTo(anotherAccount, amount){

        if(!(anotherAccount instanceof BankAccount)){ 
            console.log("Por favor informe uma conta válida");
            return;
        }

        if(this.#balance < amount) {
            console.log(
                `Saldo insuficiente para realizar essa operação. 
                ${this.name} Seu saldo atual é de R$ ${this.balance}`
            );
            return;
        }

        this.debit(amount);
       
        anotherAccount.credit(amount);

        console.log(
        `Tranferencia realizada com sucesso ${this.name} 
        O seu saldo atual é de R$ ${this.balance}`
        );

    }

    closeAccount(){
        if(this.#balance != 0){
         console.log(
         `${this.name} retire o saldo da sua conta, para encerrá-la.`
         );
        }
    }

}

const bank1 = new Bank(321, "AngelaDavisBank", 15);
const bank2 = new Bank(623, "LeliaGonzalezBank", 11);
const bank3 = new Bank(365, "MayaAngelouBank", 16);
const bank4 = new Bank(154, "GradaKilombaBank", 9);
const bank5 = new Bank(256, "BellHooksBank", 8);



const client1 = new Client("Carolina Maria de Jesus", 90888377088);
const bankAccount1 = new BankAccount(client1, bank1, 1111, 2222);
bankAccount1.credit(3000);
console.log(bankAccount1);


const client2 = new Client("Maria Firmina dos Reis", 92730962042);
const bankAccount2 = new BankAccount(client2, bank2, 1234, 2234);
bankAccount2.credit(1000);
console.log(bankAccount2);

const client3 = new Client("Conceição Evaristo", 14888355002);
const bankAccount3 = new BankAccount(client3, bank3, 2234, 1184);
bankAccount3.credit(1000);
console.log(bankAccount3);

const client4 = new Client("Paulina Chiziane", 89110034099);
const bankAccount4 = new BankAccount(client4, bank4, 3334, 1884);
bankAccount4.credit(1000);
console.log(bankAccount4);

const client5 = new Client("Alice Walker", 22019249022);
const bankAccount5 = new BankAccount(client5, bank1, 3663, 1984);
const bankAccount9 = new BankAccount(client5, bank5, 3623, 1994);
bankAccount5.credit(1000);
console.log(bankAccount5);
bankAccount9.credit(1000);
console.log(bankAccount9);

const client6 = new Client("Chimamanda Ngozi Adichie", 22019249022);
const bankAccount6 = new BankAccount(client6, bank2, 3643, 1974);
bankAccount6.credit(1000);
console.log(bankAccount6);

const client7 = new Client("Sueli Carneiro", 51061356000);
const bankAccount7 = new BankAccount(client7, bank3, 1643, 2974);
const bankAccount10 = new BankAccount(client7, bank5, 1143, 3974);
bankAccount7.credit(1000);
console.log(bankAccount7);
bankAccount10.credit(1200);
console.log(bankAccount10);

const client8 = new Client("Ana Maria Gonçalves", 10798782030);
const bankAccount8 = new BankAccount(client8, bank5, 1243, 3954);
const bankAccount11 = new BankAccount(client8, bank4, 1543, 3254);
const bankAccount12 = new BankAccount(client8, bank3, 1563, 3274);
bankAccount8.credit(1000);
console.log(bankAccount8);
bankAccount11.credit(1000);
console.log(bankAccount11);
bankAccount12.credit(1200);
console.log(bankAccount12);


bankAccount1.credit(1000);
bankAccount1.debit(10);
bankAccount1.transferTo(bankAccount8, 100);

module.exports = { BankAccount };