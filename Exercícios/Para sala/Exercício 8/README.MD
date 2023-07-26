Observe a classe Animal que criamos no exemplo da aula:

class Animal {
  type;
  name;
  age;
  hungry;
  energy;

  static animals = [];

  constructor(type, name, age, hungry) {
    this.type = type;
    this.name = name;
    this.age = age;
    this.energy = 0;
    this.hungry = hungry;
    this.constructor.animals.push({ name: this.name, hungry: this.hungry });
  }

  eat() {
    console.log(`O ${this.type} chamado ${this.name} está comendo.`);
    this.hungry -= 2;

    this.constructor.updateAnimalsHungry(this.name, this.hungry);
  }

  sleep(hours) {
    console.log(`O ${this.type} chamado ${this.name} está dormindo.`);
    this.energy += hours;
    console.log(`Energia atual: ${this.energy}.`);
  }

  static updateAnimalsHungry(name, updatedHungry) {
		const animalIndex = this.animals.findIndex(
			(animal) => animal.name === name;
		);

		this.animals[animalIndex].hungry = updatedHungry;
	}

  static nextToEat() {
    const sortedByHungry = this.animals.sort((a, b) => {
      return b.hungry - a.hungry;
    });

    console.log(
      `O próximo animal para comer é ${sortedByHungry[0].name}. Ele está com ${sortedByHungry[0].hungry} de fome.`
    );
  }
}

Faça as seguintes modificações:

    Dentro da propriedade estática animals, salve também a energy de cada animal (além de name e hungry).
    Crie um método estático que atualize a energy de cada animal dentro da array animals (igual estamos fazendo com hungry).
    Dentro do método sleep, chame o método de atualização de energy criado no passo anterior, informando, como propriedades, o nome e a nova energia do animal.
    Por fim, crie um método estático que informe quais animais precisam dormir (perceba que pode ser mais de 1). Para isso, a regra é: se a energia estiver menor ou igual a 5, esse animal precisa dormir.

Teste tudo o que foi criado.

Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

    Fiz o fork do repositório.
    Clonei o fork na minha máquina (git clone url-do-meu-fork).
    Resolvi o exercício dentro da pasta resolução.
    Adicionei as mudanças. (git add . para adicionar todos os arquivos, ou git add nome_do_arquivo para adicionar um arquivo específico)
    Commitei a cada mudança significativa ou na finalização do exercício (git commit -m "Mensagem do commit")
    Pushei os commits na minha branch (git push origin nome-da-branch)
