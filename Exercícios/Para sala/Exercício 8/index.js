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

    this.constructor.updateAnimalsEnergy(this.name, this.energy); // atualizar a energia do animal
	}

  static updateAnimalsEnergy(name, updatedEnergy) {
    const animalIndex = this.animals.findIndex((animal) => animal.name === name);
    this.animals[animalIndex].energy = updatedEnergy;
  }

  static needToSleep() {
    this.animals.forEach((animal) => { //forEach = passar por cada elemento do array. "Para cada elemento do array, faça isso"
      if(animal.energy <= 5) {
        console.log(`O animal ${animal.name} precisa dormir.`);
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

const aslam = new Animal('cachorro', 'Aslam', 3, 32);
const caju = new Animal('gato', 'Caju', 3, 33);
const cacau = new Animal('cachorro', 'Cacau', 3, 17);
const pipoca = new Animal('gato', 'Pipoca', 3, 17);

// console.log(Animal.animals);
aslam.sleep(3);
caju.sleep(7);
cacau.sleep(5);
pipoca.sleep(10);
Animal.needToSleep();