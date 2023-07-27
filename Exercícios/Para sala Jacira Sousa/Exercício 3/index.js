
// class Account{
//     id;
//     name;
//     balance; 

//     constructor(id, name, balance){
//         this.id = id;
//         this.name = name;
//         this.balance = balance;
//     }

//     credit(amount){
//         this.balance += amount;
//         console.log(`${this.name} o saldo atualizado é de RS ${this.balance}`)
//     }

//     debit(amount){
//         this.balance -= amount;
//         console.log(`${this.name} o saldo atualizado é de RS ${this.balance}`)
//     }

//     transferTo(anotherAccount, amount){
//         if(!(anotherAccount instanceof Account)){ // verifica se a conta é válida
//             console.log("Informe uma conta válida");
//             return;

//         }

//         if(this.balance < amount) {
//             console.log(
//                 `Você não tem saldo suficiente para realizar essa operação. ${this.name} Seu saldo atual é de R$ ${this.balance}`
//             );
//             return;
//         }

//         this.debit(amount);
//         // this.balance -= amount; outra forma de escrever a forma acima 
//         anotherAccount.credit(amount);
//         console.log(`Tranferencia realizada com sucesso. ${this.name} O seu saldo atual é de 
//         R$ ${this.balance} e o saldo da conta de destino é de R$ ${this.anotherAccount.balance}`);
//     } 
// }


class Account{
    id;
    name;
    #balance; 

    constructor(id, name, balance){
        this.id = id;
        this.name = name;
        this.#balance = balance;
    }

    credit(amount){
        this.#balance += amount;
       // console.log(`${this.name} o saldo atualizado é de RS ${this.balance}`)
    }

    debit(amount){
        this.#balance -= amount;
        //console.log(`${this.name} o saldo atualizado é de RS ${this.#balance}`)
    }

    transferTo(anotherAccount, amount){
        if(!(anotherAccount instanceof Account)){ // verifica se a conta é válida
            console.log("Informe uma conta válida");
            return;

        }

        if(this.#balance < amount) {
            console.log(
                `Você não tem saldo suficiente para realizar essa operação. ${this.name} Seu saldo atual é de R$ ${this.balance}`
            )
            return;
        }

        this.debit(amount);
        // this.balance -= amount; outra forma de escrever a forma acima 
        anotherAccount.credit(amount);
        console.log(`Tranferencia realizada com sucesso. ${this.name} O seu saldo atual é de 
        R$ ${this.balance} e o saldo da conta de destino é de R$ ${this.anotherAccount.balance}`);
    } 
}



const account1 = new Account(145, "Clementina de Jesus", 25000);
const account2 = new Account(23, "Dona Ivone Lara", 23000);

console.log(account1);
account1.credit(1000);
console.log(account1.credit);

account1.debit(1800);
console.log(account1.debit);

account1.transferTo(account2, 2500);

account2.credit(3000);
account2.debit(200);
account2.transferTo("teste", 2000);





class Cliente{
    #id;
    nome;
    endereco;

    constructor(id, nome, endereco){
        this.#id = id;
        this.nome = nome;
        this.endereco = endereco;
    }

    editar(){

    }

    deletar(){

    }
}

class Banco{
    nome;
    codigo;
    clientes

    constructor(nome, codigo, clientes){

    }
}