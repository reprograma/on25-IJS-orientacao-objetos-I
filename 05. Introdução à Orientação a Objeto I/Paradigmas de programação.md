<h1 align="center">
  <img src="../assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

### Resumo
- [Paradigmas de programação](#paradigmas-de-programação)
  - [Conceito](#conceito)


- [Exercícios](#exercícios)
- [Material da aula](#material-da-aula)
- [Links Úteis](#links-úteis)

# Paradigmas de programação

## Conceito

**Paradigma** é um _método_ ou _modelo_ de como resolver determinado problema ou realizar uma tarefa.
Por exemplo, a fórmula de _bhaskara_ pode ser considerada um paradigma para encontrar as raízes em uma equação de 2º grau.

<div style="text-align:center;">
  <img src="https://github.com/reprograma/on25-IJS-orientacao-objetos-I/assets/26902816/c1f97e73-f50c-4678-b536-ee67680f64bf" width="200px"  />
</div>

Em programação, paradigma é uma **abordagem para resolver problemas usando alguma linguagem de programação**, ou ainda, um método para resolver um problema usando ferramentas e técnicas que estão disponíveis para nós seguindo alguma abordagem específica.

Em outras palavras, os paradigmas são como regras que determinadas linguagens devem se encaixar. Eles são, antes de tudo, um meio de **qualificar** a linguagem com base em sua funcionalidade.

O que acontece é o seguinte: com tantas linguagens de programação existentes, é importante que elas sigam algumas regras na hora de serem implementadas. São essas regras, por sua vez, que ficaram conhecidas como paradigmas.

Da mesma forma, quando uma nova linguagem de programação é desenvolvida, ela tende a se enquadrar em um paradigma ou até mesmo em mais de um, conforme suas peculiaridades. 

Então, além da grande variedade de linguagens de programação, existem diversos paradigmas para atender a cada diferente demanda.

Toda linguagem é baseada em um paradigma. É importante destacar que há também linguagens baseadas em vários paradigmas, sendo consideradas, nestes casos, **multiparadigmas**.
São exemplos algumas como: Java, Javascript e Python.

Caso queira entender melhor sobre, assista o vídeo abaixo:

<a href="https://www.youtube.com/watch?v=EefVmQ2wPlM" target="_blank">
  <img src="https://img.youtube.com/vi/EefVmQ2wPlM/0.jpg"   />
</a>

## Tipos de paradigmas
A verdade é que existem inúmeras opções de paradigmas de programação. Por isso, vamos destacar os mais importantes levando em consideração dois grupos principais: os imperativos e os declarativos.

### Paradigmas Imperativos
Paradigmas de Programação Imperativos são os que instruem a máquina exatamente o que fazer. Ou seja, eles são focados em instruções exatas que devem ser passadas ao computador na sequência em que serão executadas. 

Aqui, basicamente, o programador instrui a máquina sobre como devem ser computados os processos, em uma espécie de passo a passo detalhado dos procedimentos.

Entre as vantagens dos paradigmas que pertencem a esse grupo estão a eficiência e flexibilidade, além da possibilidade de permitir uma modelagem tal qual o mundo real.

No entanto, trata-se de um paradigma relativamente complexo e, por isso, ele é mais indicado na construção de aplicações que não demandam manutenção no curto prazo ou mudanças muito frequentes.

Dentro dos paradigmas de programação do tipo imperativo, alguns são:

#### Programação Estruturada
No paradigma estruturado, as instruções passadas ao computador podem ser formadas por 3 estruturas, sendo: (1) sequência: as instruções são codificadas na sequência a serem executadas; (2) condição: um bloco de código só é executado se uma condição for verdadeira; (3) repetição: um trecho de código pode ser executado repetidas vezes.

<div style="text-align:center;">
  <img src="https://github.com/reprograma/on25-IJS-orientacao-objetos-I/assets/26902816/2ddb73ba-0ebb-47a1-83ed-a16b2054b01f" />
</div>

**Vantagens:**
- A estrutura do programa é clara, já que as instruções estão mais conectadas ou relacionadas entre si;
- Capacidade de modularização criando funções ou sub-rotinas;
- Fácil de manter, debugar e testar.

**Desvantagens:**
- Tipos de dados são resultado de muitas funções em um programa estruturado. Quando ocorrem alterações nesses tipos de dados, a alteração correspondente deve ser feita em todos os locais que atuam nesses tipos de dados dentro do programa;
- Não é adequada para o desenvolvimento de grandes programas.

**Exemplos de linguagens procedurais:**
- C;
- PHP;
- COBOL;
- Go;
- JavaScript.

#### Programação Orientada a Objetos (POO ou OOP ou OO)
A programação orientada a objetos é um paradigma que fornece um modelo no qual um programa é uma coleção de objetos que interagem entre si, passando mensagens que transformam seu estado.

Neste caso, todos os objetos possuem determinados estados e comportamentos. Enquanto os estados são descritos pelas classes como atributos, a forma como eles se comportam é definida por meio de métodos. 

O paradigma de orientação à objetos é eficiente, possui diversos benefícios e é o mais popular do mundo!

Isso se deve, principalmente, aos seus inúmeros benefícios, como a modularidade do código e a capacidade de associar diretamente problemas reais em termos de código.

Uma das grandes preocupações do POO é realçar o que é realmente importante. Não por acaso, ele surgiu com o objetivo de permitir o desenvolvimento mais ágil de programas, com maior confiabilidade e redução de custos.

**Vantagens:**
- Aumento da produtividade de desenvolvimento, objetos podem ser reutilizados e extendidos;
- Melhorias mais rápidas;
- Redução de custo de desenvolvimento;
- Promoção de boas práticas, gerando software de qualidade.

**Desvantagens:**
- Programas maiores por conta de diversas classes e objetos;
- Em geral, os programas possuem execução mais lenta por conta dos requisitos requeridos;
- Curva de aprendizado aumentada.

**Exemplos de linguagens procedurais:**
- C++;
- Java;
- C#;
- Ruby;
- JavaScript.

Caso queira entender melhor sobre, assista o vídeo abaixo:

<a href="https://www.youtube.com/watch?v=QY0Kdg83orY" target="_blank">
  <img src="https://img.youtube.com/vi/QY0Kdg83orY/0.jpg"   />
</a>

### Paradigmas Declarativos
Paradigmas de Programação Declarativos falam para a máquina o que se deseja obter, mas não o processo para isso.

Neste caso, o programador apenas declara as propriedades do resultado desejado, mas não informa a máquina sobre como devem ser feitos os cálculos relacionados. 

Em outras palavras, os paradigmas declarativos focam mais no “quê” deve ser resolvido e não em “como” fazê-lo. 

Ao utilizá-los, portanto, o desenvolvedor deve declarar verdades lógicas imutáveis, para as quais os resultados serão sempre os mesmos.

Entre as principais vantagens associadas a essa categoria estão a facilidade de acesso a banco de dados e o maior nível de abstração do código.

Além disso, os programas feitos com uma linguagem declarativa costumam ser menores, já que é preciso usar menos código para realizar um objetivo.

Dentro dos paradigmas de programação do tipo imperativo, podemos destacar:

#### Programação Funcional
Considerado uma das derivações mais famosas do paradigma declarativo, o paradigma funcional recebe esse nome por se basear no uso de funções lógicas. 

Neste caso, o programa é composto de funções curtas, no qual todo o código está dentro de uma função e todas as variáveis têm escopo definido para a função.

Na programação funcional, portanto, os programas são construídos **aplicando e compondo funções**. É um paradigma de programação declarativa em que as definições de funções são árvores de expressões que mapeiam valores para outros valores, em vez de uma sequência de instruções imperativas que atualizam o estado de execução do programa.

No paradigma de programação funcional, as funções não modificam nenhum valor fora do escopo dessa função e as próprias funções não são afetadas por nenhum valor fora do escopo.

Aqui, subdivide-se o problema proposto e as funções implementadas ficam responsáveis por fazer os cálculos lógicos.

**Vantagens:**
- Código possui alto nível de abstração e por isso é mais curto;
- Maior flexibilidade das linguagens e da estrutura.

**Desvantagens:**
- Linguagens puramente funcionais funcionam mais lentamente do que as tabelas de hash e, para alguns aplicativos, isso pode ser crítico.
- A programação funcional não é adequada para algoritmos em grafos;
- Possui poucos frameworks, ferramentas e usuários.

**Exemplos de linguagens procedurais:**
- JavaScript;
- Scheme;
- Scala.

Caso queira entender melhor sobre, assista o vídeo abaixo:

<a href="https://www.youtube.com/watch?v=BxbHGPivjdc" target="_blank">
  <img src="https://img.youtube.com/vi/BxbHGPivjdc/0.jpg"   />
</a>

### Outros paradigmas
- Procedural
- Computação Paralela
- Lógico/Restritivo
- Orientado a Dados
- Orientado a Eventos

<!-- ### Exercícios

- [Exercício para sala](/exercicios/para-sala/)
- [Exercício para casa](/exercicios/para-casa/)

### Material da aula

- [Material](/material)

### Links Úteis
- [Geek Hunter - Quais são os paradigmas de programação mais importantes?](https://blog.geekhunter.com.br/quais-sao-os-paradigmas-de-programacao/)
- [Medium - Paradigmas de Programação](https://medium.com/zeroeumas/paradigmas-de-programacao-845ecf7b4aaf)

### Contatos da prô

- [LinkedIn](https://www.linkedin.com/in/luarakerlen/)
- [Github](https://github.com/luarakerlen)
- [Instagram](https://www.instagram.com/luaratech/) -->

---
[Voltar para o início](https://www.linkedin.com/in/luarakerlen/)

<p align="center">
  Desenvolvido com &#128156
</p>
