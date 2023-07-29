class Animal{
    type; // atributos da classe 
    name;
    age;
    energy;

    constructor(tipo, nome, idade){ //podemos usar palavras diferentes aqui, esse "tipo" recebemos de fora de algum objeto que estamos criando usando a class Animal
        this.type=tipo; // e aqui atribuimos o atributo da classe ao que recebemos no constructor
        this.name=nome;
        this.age=idade;
    }
    sleep(hours) {
        console.log(`O ${this.type} chamado ${this.name} está dormindo`);
        this.energy = this.energy+ hours;
        console.log(`Energia atual: ${this.energy}`);
      }
    }

    const safira = new Animal("Dog", "Safira", 7)
    console.log(safira)

    // abstração - UML

    class PessoaAdulta{
      nome;
      #cpf;
      endereço;
      idade;
     
  
      constructor(nome, cpf, endereço, idade){
        this.nome = nome
        this.#cpf = cpf
        this.endereço = endereço
        this.idade = idade
      }
      pagarBoleto(){
      }
      
      trabalhar(){
      }
  
  
  }