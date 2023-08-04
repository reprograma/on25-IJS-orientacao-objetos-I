class Account {
    id;
    name;
    #balance;

    constructor(id, name, balance){
        this.id = id;
        this.name = name;
        this.#balance = balance;        
    }

    credit(amount) {
        this.#balance +=  amount;
        //console.log(`O saldo atual é R$ ${this.#balance}`);
    }
    debit(amount) {
        this.#balance -= amount;
        //console.log(`O saldo atual é R$ ${this.#balance}`);
    }

    transferTo(anotherAccount, amount) {
        // Faço validação do anotherAccount, então posso chamar tudo do account (atributos e métodos)
        if(!(anotherAccount instanceof Account)) {
            console.log('Informe uma conta válida!');
            return;
            // Se não validar sai do método(return), porque a conta não é válida
        }
        
        if(this.#balance < amount) {
            console.log(`Você não tem saldo suficiente para realizar essa operação. Seu saldo atual é R$ ${this.#balance}`);
            return 
            //Validação para saber se há saldo
        }

        this.debit(amount); 
        anotherAccount.credit(amount);
        console.log(`Transferência realizada com sucesso! O seu saldo é de R$ ${this.#balance} e o saldo da conta de destino é de R$${anotherAccount.balance}`
        );      
    }

}
const account1 = new Account(237, 'Ciane', 10000)
//console.log(account1)
account1.credit(5000)
account1.debit(2500)

const account2 = new Account(238, 'Luara', 20000)
account1.transferTo(account2, 4000)

console.log(account1)
console.log(account2)