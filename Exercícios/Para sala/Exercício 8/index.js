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
  }

  static updateAnimalEnergy(name, updateEnergy) {
    const animalIndex = this.animals.findIndex((animal) => animal.name == name);
    this.animals[animalIndex].energy = updateEnergy;
  }

  static needToSleep() {
    this.animals.forEach((animal) => {

      if(animal.energy <= 5) {
        console.log(`O animal ${animal.name} precisa dormir.`)
      }

    })
  }

  static updateAnimalsHungry(name, updatedHungry) {
		const animalIndex = this.animals.findIndex(
			(animal) => animal.name === name
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