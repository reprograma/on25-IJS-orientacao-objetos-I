const {Bank} = require('./Bank');
const{Client} = require('./Client')
const{BankAccount} = require('./BankAccount');

// Bank

const banco1 = new Bank( 789 , "Banco 1", 0.05);
const banco2 = new Bank( 245 , "Banco 2", 0.04);
console.log(banco1) // Bank { bankCode: 789, bankName: 'Banco 1' }

// Client

const laissa = new Client("Laíssa", 13213213205);
const lucas = new Client("Lucas", 13285965874);
console.log(laissa) //Client { name: 'Laíssa', banks: [] }


console.log(laissa.addBank("Nubank")) //Insira um Banco válido.
console.log(laissa.addBank(banco1)) //O banco foi adicionado.
console.log(laissa.addBank(banco2)) //O banco foi adicionado.
console.log(laissa.addBank(banco2)) //Banco já associado ao cliente!
console.log(lucas.addBank(banco2)) //O banco foi adicionado.

console.log(laissa.banks)

console.log(laissa.removeBank(banco1)) // O banco foi removido com sucesso.
console.log(laissa.banks)


console.log(laissa.removeBank(banco1)) // O banco não está associado ao cliente.
console.log(laissa.banks)


// Bank Account

const bankAccount1 = new BankAccount(laissa, banco1, 123, 45678-9)

console.log(bankAccount1)
console.log(bankAccount1.credit(100))

const bankAccount2 = new BankAccount(lucas, banco2, 132, 589657-9)
bankAccount1.transferTo(bankAccount2, 20);


// console.log(bankAccount2.closeAccount());
console.log(Bank.createdBanks)