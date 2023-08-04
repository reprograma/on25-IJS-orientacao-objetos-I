class Animal {
    name;
    type;
    age;
    energy;

    constructor(name, type, age) {
        this.name = name;
        this.type = type;
        this.age = age;
    };

    sleep(hours) {
        console.log(`O animal chamado ${this.name} dorme bem.`);
        this.energy = this.energy + hours;
        console.log(`A energia atual está ${this.energy}`); //undefined porque não defini valor dentro do constructor e nem na class
    };
};

const animal1 = new Animal('Mingau', 'gato', 2, 'alta');
console.log(animal1);
console.log(`${animal1.name} está miando!!`);