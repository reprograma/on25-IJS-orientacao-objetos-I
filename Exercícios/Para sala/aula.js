/*class Animal {
    type;
    name;
    age;
    energy;

    constructor(tipo, nome, idade){
        this.type = tipo;
        this.name = nome;
        this.age = idade;
        this.energy = 10;
    }
    sleep(hour) {
        console.log(`O animal chamado ${this.name} está dormindo.`);
        this.energy = this.energy + hour;
        console.log(`Energia atual: ${this.energy}`);
    }
}

const animal1 = new Animal('gato', 'kissa', 17, 10)
console.log (`${animal1.name} está falando mandarin`)
console.log(animal1);

const hoursOfSleep = 3;
animal1.sleep(hoursOfSleep);

class Funcionario {
    nome;
    salario;
  
    constructor(nome, salario) {
      this.nome = nome;
      this.salario = salario;
    }
  
    receberAumento(aumento) {
      this.salario = this.salario + aumento;
    }
  }
  const func = ("Elvira", 10)


class Conta {
  cod_banco;
  num_conta;
  saldo;
  limite;

  ConsultarSaldo() {
    console.log(`Conta: + ${this.num_conta}`);
    console.log(`Saldo: + ${this.saldo}`);
  }

Depositar(valor) {
      this.saldo = this.saldo + valor;
  }
Sacar(valor) {
      this.saldo = this.saldo - valor;
  }
}
const conta = ("2", "21", 10, 50)
//console.log(conta)

//GET chamado
class Curso {
	materia;
	professor;
	duracao;

	constructor(materia, professor, duracao) {
		this.materia = materia;
		this.professor = professor;
		this.duracao = duracao;
	}
	get prof() { // METODO GET
		return this.professor;
	}
}

const poo = new Curso(
	'Programação orientada a objetos',
	'Rafaella',
	'1 semestre'
);
console.log(poo.prof); //Rafaella

class Boletim {
  constructor(participacao, prova, trabalho) {
    this.participacao = participacao;
    this.prova = prova;
    this.trabalho = trabalho;
  }
  get media() {
    return parseInt((this.participacao + this.prova + this.trabalho) / 3);
  }
}

let boletimSemestral = new Boletim(8, 6, 7.5);
console.log(boletimSemestral.media); //7*/

class Conta {
  ehAdm;
  #senha = 123;

  constructor(ehAdm) {
    this.ehAdm = ehAdm;
  }

  get senha() {
    if(this.ehAdm) {
      return this.#senha;
    }
  }
}

const conta1 = new Conta(true)
console.log(conta1.senha) //123

const conta2 = new Conta(false)
console.log(conta2.senha) //undefined