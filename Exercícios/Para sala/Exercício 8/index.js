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
      this.constructor.updateAnimalsEnergy(this.name, this.energy);
      console.log(`Energia atual: ${this.energy}.`);
    }
  
    static updateAnimalsHungry(name, updatedHungry) {
      const animalIndex = this.animals.findIndex((animal) => animal.name === name);
      this.animals[animalIndex].hungry = updatedHungry;
    }
  
    static updateAnimalsEnergy(name, updatedEnergy) {
      const animalIndex = this.animals.findIndex((animal) => animal.name === name);
      this.animals[animalIndex].energy = updatedEnergy;
    }
  
    static animalsNeedSleep() {
      const animalsToSleep = this.animals.filter((animal) => animal.energy <= 5);
      if (animalsToSleep.length === 0) {
        console.log("Todos os animais estão bem energizados!");
      } else {
        console.log("Os seguintes animais precisam dormir:");
        animalsToSleep.forEach((animal) => console.log(`${animal.name} - Energia: ${animal.energy}`));
      }
    }
    /*static needToSleep () {
        this.animals.forEach ((animal)) => {
            if (animal.energy =< 5){
                console.log (`O animal ${animal.name} precisa dormir`)
            }
        }
    }*/
    static nextToEat() {
      const sortedByHungry = this.animals.sort((a, b) => b.hungry - a.hungry);
      console.log(
        `O próximo animal para comer é ${sortedByHungry[0].name}. Ele está com ${sortedByHungry[0].hungry} de fome.`
      );
    }
}
  
  // Exemplo de uso da classe Animal:
  
  const animal1 = new Animal("Gato", "Miau", 3, 8);
  const animal2 = new Animal("Cachorro", "Rex", 5, 6);
  const animal3 = new Animal("Coelho", "Pompom", 2, 3);
  
  animal1.eat();
  animal2.eat();
  animal3.eat();
  
  animal1.sleep(4);
  animal2.sleep(3);
  animal3.sleep(6);
  
  Animal.animalsNeedSleep();
  console.log(Animal.animals);
  
  