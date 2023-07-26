const Banco = require("./banco");

class Cliente {
  nomeCliente;
  #cpf;
  banco = [];

  constructor(nomeCliente, cpf) {
    this.nomeCliente = nomeCliente;
    this.#cpf = cpf;
  }
  get cpf() {
    return this.#cpf;
  }

  adicionarBanco(banco) {
    if (this.banco.includes(banco)) {
      console.log(
        `O cliente ${this.nomeCliente} já está associado ao banco ${banco.nomeBanco}.`
      );
      return;
    }
    this.banco.push(banco);
    banco.aumentarNumeroClientes();
    console.log(
      `Banco ${banco.nomeBanco} associado ao cliente ${this.nomeCliente}.`
    );
  }

  removerBanco(banco) {
    if (!this.banco.includes(banco)) {
      console.log(
        `O cliente ${this.nomeCliente} não está associado ao banco ${banco.nomeBanco}.`
      );
      return;
    }

    this.banco = this.banco.filter((bancoParceiro) => bancoParceiro !== banco);
    banco.bancosCriados.find(
      (bancoParceiro) => bancoParceiro.codigoBanco === banco.codigoBanco
    ).clientes--;
    console.log(
      `Banco ${banco.nomeBanco} removido do cliente ${this.nomeCliente}.`
    );
  }
}

function imprimirListaDeClientes(clientes) {
  console.log("Lista de Clientes:");
  clientes.forEach((cliente, index) => {
    console.log(
      `${index + 1}. Nome: ${cliente.nomeCliente}, CPF: ${cliente.cpf}`
    );
  });
}

// Adcionando clientes:
const cliente1 = new Cliente("Elvira Bruno", "123.456.789-00");
const cliente2 = new Cliente("Giovana Bruno", "321.654.987-01");
const cliente3 = new Cliente("Greice Giacomeli", "789.456.123-02");

//add e Remove cliente
//cliente1.adicionarBanco(banco1);
//cliente1.removerBanco(banco1);

const listaDeClientes = [cliente1, cliente2, cliente3];
imprimirListaDeClientes(listaDeClientes);

module.exports = Cliente;
