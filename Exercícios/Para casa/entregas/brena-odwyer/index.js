const { Bank, bank1 } = require("./Bank")
const { Client, client1 } = require("./Client")
const { BankAccount, bankAccount1 } = require("./BankAccount")

console.log(bank1)

console.log(Bank.createdBanks)

console.log(bank1.transferTax)
bank1.transferTax = 0.2
console.log(bank1.transferTax)

console.log(client1)
console.log(client1.cpf)

client1.addBank(bank1)
console.log(client1)

client1.removeBank(bank1)
console.log(client1)


console.log(bankAccount1)
console.log(bankAccount1.balance)
bankAccount1.credit(1000)
console.log(bankAccount1.balance)
bankAccount1.debit(500)
console.log(bankAccount1.balance)
bankAccount1.closeAccount()