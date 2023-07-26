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
    this.constructor.animals.push({
      name: this.name,
      hungry: this.hungry,
      energy: this.energy,
    });
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

  static updateAnimalsEnergy(name, updateEnergy) {
    const animalIndex = this.animals.findIndex(
      (animal) => animal.name === name
    );

    this.animals[animalIndex].energy = updateEnergy;
  }

  static updateAnimalsHungry(name, updatedHungry) {
    const animalIndex = this.animals.findIndex(
      (animal) => animal.name === name
    );

    this.animals[animalIndex].hungry = updatedHungry;
  }

  static needToSleep() {
    this.animals.forEach((animal) => {
      if (animal.energy <= 5) {
        console.log(
          `O animal ${animal.name} está dormindo. Ela está com ${animal.energy} de energia.`
        );
      }
    });
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

const filo = new Animal('dog', 'Filó', 3, 50)
const fofo = new Animal('dog', 'Fófó', 1, 10 )
console.log(Animal.animals)

filo.eat()
fofo.eat()
Animal.needToSleep()
filo.sleep(6)
fofo.sleep(1)
Animal.needToSleep()
console.log(Animal.animals)
console.log(filo)
