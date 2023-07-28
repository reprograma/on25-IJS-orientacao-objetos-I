class Account{
    #balance;
    constructor(id, name, balance){
        this.id = id;
        this.name = name; 
        this.#balance = balance;
    }
    getBalance(){
        return this.#balance;
    }
    credit(amount){
        this.#balance += amount;
        return this.#balance;
    }
    debit(amount){
        if(this.#balance < amount){
            return console.log('Saldo insuficiente para débito');
        } else{
            this.#balance -= amount;
            return this.#balance;
        } 
    }
    transferTo(anotherAccount, amount){
        if(this.#balance < amount){
            return console.log('Saldo insuficiente para transferência');
        } else{
            this.#balance -= amount;
            anotherAccount.#balance += amount;
        }  
    }
}

let conta1 = new Account(1, 'Carla', 1000);
let conta2 = new Account(2, 'Juan', 500);
console.log(conta1.getBalance())
conta1.credit(500);
console.log(conta1.getBalance())
conta1.debit(200);
console.log(conta1.getBalance())
conta1.transferTo(conta2, 1400);
console.log(conta1.getBalance())
console.log(conta2.getBalance()) 
console.log(`Saldo da conta 1: ${conta1.getBalance()} e saldo da conta 2: ${conta2.balance}`)
// class Cliente{
//     #id;
//     nome;
//     endereco;
//     constructor(id,nome,endereco){
//         this.#id = id;
//         this.nome = nome;
//         this.endereco = endereco;
//     }
// }

// class Banco{  
//     constructor(nome,codigo){
//         this.nome = nome;
//         this.codigo = codigo;
//         this.clientes = new Cliente();
//     } 
// }
