<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Tema da Aula

Turma Online 25 - Imersão JavaScript | Semana 5 - Introdução à Orientação a Objeto I | 2023 | Professora: [Luara Kerlen](https://github.com/luarakerlen)

### Instruções

Antes de começar, vamos organizar nosso setup.

- Fork esse repositório
- Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
- Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)

### Objetivo

- Introduzir o conceito de paradigma de programação;
- Entender o que são classes e objetos e qual é a diferença entre os dois conceitos.

### Resumo

O que veremos na aula de hoje?

- [Tema da Aula](#tema-da-aula)

  - [Instruções](#instruções)
  - [Objetivo](#objetivo)
  - [Resumo](#resumo)

- [Conteúdo](#conteúdo)

  - [Recapitulando](#recapitulando)

    - [ES6 Instantiation](#es6-instantiation)

  - [Paradigmas de programação](./5.%20Introdu%C3%A7%C3%A3o%20%C3%A0%20Orienta%C3%A7%C3%A3o%20a%20Objeto%20I//5.1%20-%20Paradigmas%20de%20programa%C3%A7%C3%A3o.md)
  - [Programação Orientada a Objetos](./5.%20Introdu%C3%A7%C3%A3o%20%C3%A0%20Orienta%C3%A7%C3%A3o%20a%20Objeto%20I//5.2%20-%20Programa%C3%A7%C3%A3o%20Orientada%20a%20Objetos.md)
  - [Pilares de OO - Abstração](./5.%20Introdu%C3%A7%C3%A3o%20%C3%A0%20Orienta%C3%A7%C3%A3o%20a%20Objeto%20I//5.3%20-%20Abstra%C3%A7%C3%A3o.md)
  - [Pilares de OO - Encapsulamento](./5.%20Introdu%C3%A7%C3%A3o%20%C3%A0%20Orienta%C3%A7%C3%A3o%20a%20Objeto%20I//5.4%20-%20Encapsulamento.md)
  - [Métodos e propriedades estáticas (extra)](./5.%20Introdu%C3%A7%C3%A3o%20%C3%A0%20Orienta%C3%A7%C3%A3o%20a%20Objeto%20I/5.5%20-%20Static%20(extra).md)

- [Exercícios](#exercícios)
- [Material da aula](#material-da-aula)
- [Links Úteis](#links-úteis)
- [Contatos](#contatos)

# Conteúdo

## Recapitulando...

### ES6 Instantiation

ES6 é um encurtamento de ECMAScript 6. A `ES6 Instantiation` utiliza a palavra-chave `class` ao invés de criar uma função regular. A classe então se torna uma função construtora quando criamos o `constructor` dentro dela.

Os métodos para o objeto também são implementados dentro do escopo da classe:

```javascript
class Animal {
  type;
  name;
  age;
  energy;

  constructor(type, name, age) {
    this.type = type;
    this.name = name;
    this.age = age;
    this.energy = 0;
  }

  eat() {
    console.log(`O ${this.type} chamado ${this.name} está comendo`);
  }

  sleep(hours) {
    console.log(`O ${this.type} chamado ${this.name} está dormindo`);
    this.energy += hours;
    console.log(`Energia atual: ${this.energy}`);
  }
}

const animal1 = new Animal('cachorro', 'Aslam', 3);
console.log(animal1);
```

Spoiler: quando escrevemos nosso programa dessa maneira, estamos utilizando a **Programação Orientada a Objetos**. Dá pra perceber desde já o porquê ela leva esse nome, né? Estamos tratando, desde o início, de objetos e de maneiras de criá-los e modificá-los.

## [Paradigmas de programação](./5.%20Introdu%C3%A7%C3%A3o%20%C3%A0%20Orienta%C3%A7%C3%A3o%20a%20Objeto%20I//5.2%20-%20Programa%C3%A7%C3%A3o%20Orientada%20a%20Objetos.md)

## [Programação Orientada a Objetos](./5.%20Introdu%C3%A7%C3%A3o%20%C3%A0%20Orienta%C3%A7%C3%A3o%20a%20Objeto%20I//5.2%20-%20Programa%C3%A7%C3%A3o%20Orientada%20a%20Objetos.md)

## [Pilares de OO - Abstração](./5.%20Introdu%C3%A7%C3%A3o%20%C3%A0%20Orienta%C3%A7%C3%A3o%20a%20Objeto%20I//5.3%20-%20Abstra%C3%A7%C3%A3o.md)

## [Pilares de OO - Encapsulamento](./5.%20Introdu%C3%A7%C3%A3o%20%C3%A0%20Orienta%C3%A7%C3%A3o%20a%20Objeto%20I//5.4%20-%20Encapsulamento.md)

### Exercícios

- [Exercício para sala](./Exerc%C3%ADcios/Para%20sala/)
- [Exercício para casa](./Exerc%C3%ADcios/Para%20casa/)

### Material da aula

- [Material](./5.%20Introdu%C3%A7%C3%A3o%20%C3%A0%20Orienta%C3%A7%C3%A3o%20a%20Objeto%20I/)

### Links Úteis
- [Javascript.info - Array methods](https://javascript.info/array-methods)
- [Mozilla - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Contatos da prô

- [LinkedIn](https://www.linkedin.com/in/luarakerlen/)
- [Github](https://github.com/luarakerlen)
- [Instagram](https://www.instagram.com/luaratech/)

<p align="center">
  Desenvolvido com &#128156
</p>
