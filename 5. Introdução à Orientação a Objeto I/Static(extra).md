<h1 align="center">
  <img src="../assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

### Resumo

- [Métodos e propriedades estáticas](#métodos-e-atributos-estáticas)

  - [Conceito](#conceito)
  - [Propriedades estáticas](#propriedades-estáticas)
  - [Métodos estáticos](#métodos-estáticos)
  - [Considerações](#considerações)

- [Links Úteis](#links-úteis)

# Métodos e propriedades estáticas

## Conceito

Métodos e propriedades **estáticas** são aquelas que pertencem à classe, não aos objetos instanciados a partir dela. Para isso, utilizamos a palavra-chave `static`

## Propriedades estáticas
Podemos criar um exemplo, uma propriedade que conta a quantidade de animais criados a partir da nossa classe animal:

```javascript
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
    console.log(`O ${this.type} chamado ${this.name} está comendo`);
    this.hungry -= 2;
  }

  sleep(hours) {
    console.log(`O ${this.type} chamado ${this.name} está dormindo`);
    this.energy += hours;
    console.log(`Energia atual: ${this.energy}`);
  }
}

console.log(Animal.animals); //[]

const aslam = new Animal('cachorro', 'Aslam', 3, 32);
const caju = new Animal('gato', 'Caju', 3, 33);
const cacau = new Animal('cachorro', 'Cacau', 3, 17);
const pipoca = new Animal('gato', 'Pipoca', 3, 17);

console.log(Animal.animals); // [{ name: 'Aslam', hungry: 32 }, { name: 'Caju', hungry: 33 }, { name: 'Cacau', hungry: 17 }, { name: 'Pipoca', hungry: 17 }]
```

No exemplo acima, o array `animals` pertence à classe Animal, não a algum objeto instanciado. Portanto, conseguimos acessar essa propriedade sem precisar chamar nenhum objeto.

## Métodos estáticos
Podemos ainda criar métodos estáticos, como por exemplo:

```javascript
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
    console.log(`O ${this.type} chamado ${this.name} está comendo`);
    this.hungry -= 2;

    this.constructor.updateAnimalsHungry(this.name, this.hungry);
  }

  sleep(hours) {
    console.log(`O ${this.type} chamado ${this.name} está dormindo`);
    this.energy += hours;
    console.log(`Energia atual: ${this.energy}`);
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
}

const aslam = new Animal('cachorro', 'Aslam', 3, 32);
const caju = new Animal('gato', 'Caju', 3, 33);
const cacau = new Animal('cachorro', 'Cacau', 3, 17);
const pipoca = new Animal('gato', 'Pipoca', 3, 17);

console.log(Animal.animals); // [{ name: 'Aslam', hungry: 32 }, { name: 'Caju', hungry: 33 }, { name: 'Cacau', hungry: 17 }, { name: 'Pipoca', hungry: 17 }]

Animal.nextToEat(); // O próximo animal para comer é Caju. Ele está com 33 de fome

caju.eat(); // O gato chamado Caju está comendo

Animal.nextToEat(); // O próximo animal para comer é Aslam. Ele está com 32 de fome

caju.nextToEat(); // TypeError: caju.nextToEat is not a function
```

Agora, criamos um método estático `updateAnimalsHungry`, que atualiza a array estática `animals` a cada vez que um animal come, e um método estático `nextToEat` que retorna o nome do próximo animal que deve comer, de acordo com o tamanho da fome da lista de animais que criamos.

## Considerações
Perceba que, para se referir a métodos ou propriedades estáticas dentro da própria classe:
- Se estivermos fazendo isso de dentro de um método estático, fazemos da seguinte maneira:

```javascript
static nomeDaPropEstatica;

static metodoEstatico() {
  console.log(this.nomeDaPropEstatica);
}

static outroMetodoEstatico() {
  this.metodoEstatico();
}
```
Nesse caso, apenas nos referimos normalmente com o `this`.

- Porém, se estivermos dentro de um método normal ou do constructor, fazemos da seguinte maneira:

```javascript
static nomeDaPropEstatica;

static metodoEstatico(){}

metodoNaoEstatico() {
  console.log(this.constructor.nomeDaPropEstatica);
  this.constructor.metodoEstatico();
}
```

Nesse caso, precisamos utilizar o `this.constructor`, não apenas o `this`.

Outro ponto a se observar é que, ao tentar chamar uma propriedade estática através de um objeto instanciado, o retorno é `undefined`, pois ele procura por uma propriedade não estática com aquele nome, e como não encontra, retorna `undefined`.
Ao mesmo tempo que, ao tentar chamar um método estático através de um objeto instanciado, recebemos um erro, pois esse método não existe (pelo menos, não para o objeto).

#### → Vamos aplicar? [Exercício 8](../Exerc%C3%ADcios/Para%20sala/Exerc%C3%ADcio%208/)

# Links Úteis
- [Alura - Métodos e atributos estáticos](https://site.alura.com.br/apostila-csharp-orientacao-objetos/metodos-e-atributos-estaticos)

---

[Voltar para o início](../README.md)

<p align="center">
  Desenvolvido com &#128156
</p>