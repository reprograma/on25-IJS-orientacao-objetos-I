

// Faça as seguintes modificações:

//  Dentro da propriedade estática animals, salve também a energy de cada animal (além de name e hungry).
//  Crie um método estático que atualize a energy de cada animal dentro da array animals (igual estamos fazendo com hungry).
//  Dentro do método sleep, chame o método de atualização de energy criado no passo anterior, informando, como propriedades, o nome e a nova energia do animal.
//  Por fim, crie um método estático que informe quais animais precisam dormir (perceba que pode ser mais de 1). Para isso, a regra é: se a energia estiver menor ou igual a 5, esse animal precisa dormir.
//Teste tudo o que foi criado.

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
      this.constructor.animals.push({ name: this.name, hungry: this.hungry, energy: this.energy });
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
      this.constructor.updateAnimalsEnergy(this.name, this.energy);
    }
  
    static updateAnimalsHungry(name, updatedHungry) {
        const animalIndex = this.animals.findIndex((animal) => animal.name === name);
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
    static updateAnimalsEnergy(name, updatedEnergy) {
        const animalIndex = this.animals.findIndex((animal) => animal.name === name);
        this.animals[animalIndex].energy = updatedEnergy;
    }
    static animalsToSleep() {
        const animalsToSleep = this.animals.filter((animal) => animal.energy <= 5);
        console.log(animalsToSleep);
    }
}

const dog = new Animal('cachorro', 'Rex', 3, 10);
const cat = new Animal('gato', 'Mingau', 2, 15);
const bird = new Animal('pássaro', 'Piu Piu', 1, 7);
console.log(Animal.animals); 
dog.sleep(2);
cat.sleep(3);
bird.sleep(4); 
Animal.animalsToSleep(); 
