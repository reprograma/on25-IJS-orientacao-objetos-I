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
      console.log(`O/a ${this.type} chamado(a) ${this.name} está comendo.`);
      this.hungry -= 2;
  
      this.constructor.updateAnimalsHungry(this.name, this.hungry);
    }
  
    sleep(hours) {
      console.log(`O/a ${this.type} chamado(a) ${this.name} está dormindo.`);
      this.energy += hours;
      console.log(`Energia atual: ${this.energy}.`);

      this.constructor.updateEnergy(this.name, this.energy);
      console.log(`Após a dormidinha, ${this.name} está com ${this.energy} pontos de energia`);
    }

    static findIndex(name){
        const animalIndex = this.animals.findIndex(
            (animal) => animal.name === name
        );
        return animalIndex;
    }
  
    static updateAnimalsHungry(name, updatedHungry) {
        let animalIndexOf = this.findIndex(name);
  
        this.animals[animalIndexOf].hungry = updatedHungry;
    }
  
    static nextToEat() {
      const sortedByHungry = this.animals.sort((a, b) => {
        return b.hungry - a.hungry;
      });
  
      console.log(
        `O próximo animal para comer é ${sortedByHungry[0].name}. Ele está com ${sortedByHungry[0].hungry} de fome.`
      );
    }

    static updateEnergy(name, updatedEnergy){
        let animalIndexOf = this.findIndex(name);

        this.animals[animalIndexOf].energy = updatedEnergy;
    }

    static animalsNeedToSleep(){
        this.animals.forEach(animal => {
            if(animal.energy <= 5){
                console.log(`${animal.name} precisa dormir!`);
            }
        });
    }
}

const rudolph = new Animal("rena", "Rudolph", 124, 6);
Animal.updateEnergy("Rudolph", 9);
rudolph.eat();

const mingau = new Animal("gato", "Mingau", 10, 7);
Animal.updateEnergy("Mingau", 2);

const floquinho = new Animal("cachorro", "Floquinho", 10, 2);
Animal.updateEnergy("Floquinho", 3);
floquinho.sleep(7);

const zozo = new Animal("arara", "Zozo", 30, 5);
Animal.updateEnergy("Zozo", 5);

console.log(Animal.animals);
Animal.animalsNeedToSleep();