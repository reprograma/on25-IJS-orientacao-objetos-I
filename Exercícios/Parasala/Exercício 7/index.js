class Account { // ainda não fiz, só copiei do exercício 5
    id
    name
    balance

    constructor(id, name, balance) {
        this.id = id
        this.name = name
        this.balance = balance
    }

    credit(amount) {
        const newBalance = this.balance + amount
        console.log(`Your new balance is ${newBalance}`)
        this.balance += amount
    }

    debit(amount) {
        const newBalance = this.balance - amount
        console.log(`Your new balance is ${newBalance}`)
        this.balance -= amount
    }

    transferTo(anotherAccount, amount) {
        if(amount > this.balance) {
            console.log(`You can't make this transfer as your balance ${this.balance} is smaller than the amount ${amount} you want to transfer`)
        } else {
            this.balance -= amount // seria igual escrever this.debit(amount)
            anotherAccount.credit(amount)
            console.log(`Transfering ${amount} to ${anotherAccount.name}`)
            console.log(`Your new balance is ${this.balance}`)
            
        }
    }
}

const account1 = new Account(1, "brena", 1000)
console.log(account1) // Account { id: 1, name: 'brena', balance: 1000 }
account1.credit(50) // Your new balance is 1050
console.log(account1.balance) // 1050
account1.debit(50) // Your new balance is 1000
console.log(account1.balance) // 1000

const account2 = new Account(2, "Lua", 2000)

console.log(account1.transferTo(account2, 30)) // Your new balance is 2030
// Transfering 30 to Lua
// Your new balance is 970
// undefined
console.log(account2.balance) // 2030