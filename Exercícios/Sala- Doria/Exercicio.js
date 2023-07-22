class Animal {
    type;
    name;
    age;
    energy;
 constructor (type,name, age){
    this.name = name;
    this.type = type;
    this.age = age;
 }

 sleep(hours){
    console.log(`O animal chamado ${this.name}, está dormindo`);
    this.energy = this.energy + hours;
    console.log(`Energia atual: ${this.energy}`)
 }
 
}