class Account {
    #balance
    constructor(id, name, balance){
        this.id = id
        this.name = name
        this.#balance = balance
    }

    credit(amount){
        this.#balance = this.#balance + amount
      //  console.log(`O saldo atualizado é de R$ ${this.#balance}`)
    }

    debit(amount){
        this.#balance = this.#balance - amount
       // console.log(`O saldo atualizado é de R$ ${this.#balance}`)
    }

    transferTo(anotherAccount, amount){
        if(!(anotherAccount instanceof Account)) { //o ! tá negando o que tá dentro do parênteses. senão ia negar só o anotherAccount
            console.log("Informe uma conta válida") // pode usar o return direto com a frase, sem o console.log
            return
        }

        if(this.#balance < amount){
            console.log(`Você não tem saldo suficiente para isso. Seu saldo atual é de R$ ${this.#balance}`)
            return
        }

        this.debit(amount) // ou this.balance -= amount
        anotherAccount.credit(amount)
        console.log(`Transferência realizada com sucesso. O seu saldo atual é de R$ ${this.balance} e o saldo da consta destino é de R$ ${anotherAccount.balance}`) // o resultado vai ser "undefined" quando solicitar os valores
    }
}

const contaLuara = new Account(123, "luara", 10000)
contaLuara.credit(5000)
contaLuara.debit(300)

const contaAle = new Account(456, "ale", 50000)
contaLuara.transferTo(contaAle, 1000)