const clientes = require("./cliente");

class Banco {
  codigoBanco;
  nomeBanco;
  #taxaTransferencia;

  static bancosCriados = [];

  constructor(codigoBanco, nomeBanco, taxaTransferencia) {
    this.codigoBanco = codigoBanco;
    this.nomeBanco = nomeBanco;
    this.#taxaTransferencia = taxaTransferencia;
    Banco.bancosCriados.push({
      codigoBanco: this.codigoBanco,
      numeroClientes: 0,
    });
  }

  static buscarBancoPorCodigo(codigoBanco) {
    return (
      Banco.bancosCriados.find((banco) => banco.codigoBanco === codigoBanco) ||
      null
    );
  }

  aumentarNumeroClientes(codigoBanco) {
    const bancoEncontrado = Banco.buscarBancoPorCodigo(codigoBanco);
    if (bancoEncontrado) {
      bancoEncontrado.numeroClientes++;
      console.log(
        `Número de clientes do banco ${bancoEncontrado.codigoBanco} aumentado para ${bancoEncontrado.numeroClientes}.`
      );
    } else {
      console.log(`O banco com código ${codigoBanco} não foi encontrado.`);
    }
  }

  get taxaTransferencia() {
    return this.#taxaTransferencia;
  }

  set taxaTransferencia(novaTaxaTransferencia) {
    this.#taxaTransferencia = novaTaxaTransferencia;
  }
}

const banco1 = new Banco(100, "Banco A", 0.01);
const banco2 = new Banco(200, "Banco B", 0.02);
const banco3 = new Banco(300, "Banco C", 0.03);

const codigoBancoDesejado = 200;
const bancoEncontrado = Banco.buscarBancoPorCodigo(codigoBancoDesejado);

if (bancoEncontrado) {
  console.log(`O banco com código ${codigoBancoDesejado} existe.`);
} else {
  console.log(`O banco com código ${codigoBancoDesejado} não foi encontrado.`);
}

console.log(Banco.bancosCriados);

module.exports = Banco;

//banco1.aumentarNumeroClientes(100);
