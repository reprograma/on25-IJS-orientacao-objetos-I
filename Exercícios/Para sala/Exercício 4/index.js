class Cliente{
    #id;
    nome;
    endereco;

    constructor(id, nome, endereco){
        this.#id = id;
        this.nome = nome;
        this.endereco = endereco;
}

editar() {}

deletar () {}
}
class Banco {
    nome;
    codigo;
    clientes;

    constructor(nome,codigo,clientes){
        this.nome = nome;
        this.codigo = codigo;
        this.clientes = clientes;
    }
}


class Income {
    balance;
    interstRate;

    constructor(initialbalance, interstRate) {
        this.balance = initialbalance;
        this.interstRate = interstRate;
    }

    calculateIncome() {
        const income = this.balance * this.interstRate;
        console.log(`o rendimento é de ${income}`);
    }

    printBalance() {
        console.log(`saldo atual: ${this.balance}`);
    }
}

const income1 = new Income(1000, 0.05);
income1.printBalance();
income1.calculateIncome();

