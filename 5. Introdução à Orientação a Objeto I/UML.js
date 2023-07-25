class Cliente {
    #id;
    nome;
    endereco;
    constructor(id, nome, endereco){
        this.#id = id;
        this.nome = nome;
        this.endereco = endereco;
    }

    editar(){}
    deletar(){}
}

class Banco {
    nome;
    codigo;
    clientes;
    constructor(nome, codigo, clientes){
        this.nome = nome;
        this.codigo = codigo;
        this.clientes = clientes;
    }
}