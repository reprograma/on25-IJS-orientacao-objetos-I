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
      console.log(`O ${this.type} chamado ${this.name} está comendo`);
      this.hungry -= 2;
  
      this.constructor.updateAnimalsHungry(this.name, this.hungry);
    }
  
    sleep(hours) {
      console.log(`O ${this.type} chamado ${this.name} está dormindo`);
      this.energy += hours;
      console.log(`Energia atual: ${this.energy}`);

      this.constructor.updateEnergy(this.name, this.energy)
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
        `O próximo animal para comer é ${sortedByHungry[0].name}. Ele está com ${sortedByHungry[0].hungry} de fome`
      );
    }

    static updateEnergy(name, updatedEnergy){
        const animalIndex = this.animals.findIndex((animal) => animal.name === name)
        this.animals[animalIndex].energy = updatedEnergy

    }

    static needsToSleep(){
        this.animals.forEach((animal) => {
            if(animal.energy <= 5) {
                console.log(`O animal ${animal.name} precisa dormir porque sua energia é ${animal.energy}`)
            }
        })
    }
  }
  
  const aslam = new Animal('cachorro', 'Aslam', 3, 32);
  const caju = new Animal('gato', 'Caju', 3, 33);
  const cacau = new Animal('cachorro', 'Cacau', 3, 17);
  const pipoca = new Animal('gato', 'Pipoca', 3, 17);
  
  console.log(Animal.animals); // [{ name: 'Aslam', hungry: 32 }, { name: 'Caju', hungry: 33 }, { name: 'Cacau', hungry: 17 }, { name: 'Pipoca', hungry: 17 }]
  
  Animal.nextToEat(); // O próximo animal para comer é Caju. Ele está com 33 de fome
  
  caju.eat(); // O gato chamado Caju está comendo
  
  Animal.nextToEat(); // O próximo animal para comer é Aslam. Ele está com 32 de fome
  
//   caju.nextToEat();  TypeError: caju.nextToEat is not a function
aslam.sleep(3)
caju.sleep(7)
cacau.sleep(5)
pipoca.sleep(10)
Animal.needsToSleep()