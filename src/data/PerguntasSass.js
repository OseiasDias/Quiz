const perguntasSass = [
    {
      id: 1,
      pergunta: "O que é Sass?",
      alternativas: [
        { letra: "A", texto: "Uma linguagem de programação", correta: false },
        { letra: "B", texto: "Um pré-processador CSS", correta: true },
        { letra: "C", texto: "Uma biblioteca JavaScript", correta: false },
        { letra: "D", texto: "Um framework HTML", correta: false },
      ],
    },
    {
      id: 2,
      pergunta: "Qual símbolo é usado para criar uma variável em Sass?",
      alternativas: [
        { letra: "A", texto: "$", correta: true },
        { letra: "B", texto: "@", correta: false },
        { letra: "C", texto: "#", correta: false },
        { letra: "D", texto: "%", correta: false },
      ],
    },
    {
      id: 3,
      pergunta: "Como você aninha seletores em Sass?",
      alternativas: [
        { letra: "A", texto: "Usando chaves", correta: false },
        { letra: "B", texto: "Usando dois pontos", correta: false },
        { letra: "C", texto: "Simplesmente escrevendo o seletor dentro de outro", correta: true },
        { letra: "D", texto: "Usando colchetes", correta: false },
      ],
    },
    {
      id: 4,
      pergunta: "Qual é a extensão de arquivo padrão para arquivos Sass?",
      alternativas: [
        { letra: "A", texto: ".css", correta: false },
        { letra: "B", texto: ".scss", correta: true },
        { letra: "C", texto: ".sass", correta: false },
        { letra: "D", texto: ".sassc", correta: false },
      ],
    },
    {
      id: 5,
      pergunta: "O que faz a função `@mixin`?",
      alternativas: [
        { letra: "A", texto: "Cria uma nova variável", correta: false },
        { letra: "B", texto: "Permite reutilizar um conjunto de estilos", correta: true },
        { letra: "C", texto: "Adiciona um estilo ao final do CSS", correta: false },
        { letra: "D", texto: "Define um novo seletor", correta: false },
      ],
    },
    {
      id: 6,
      pergunta: "Como você importa um arquivo Sass?",
      alternativas: [
        { letra: "A", texto: "@import 'file.scss';", correta: true },
        { letra: "B", texto: "import 'file.scss';", correta: false },
        { letra: "C", texto: "@include 'file.scss';", correta: false },
        { letra: "D", texto: "require 'file.scss';", correta: false },
      ],
    },
    {
      id: 7,
      pergunta: "Qual é a sintaxe correta para um `@for` loop em Sass?",
      alternativas: [
        { letra: "A", texto: "@for $i from 1 to 10 {}", correta: true },
        { letra: "B", texto: "@for $i in 1 to 10 {}", correta: false },
        { letra: "C", texto: "for $i from 1 to 10 {}", correta: false },
        { letra: "D", texto: "loop $i from 1 to 10 {}", correta: false },
      ],
    },
    {
      id: 8,
      pergunta: "O que a função `&` representa em Sass?",
      alternativas: [
        { letra: "A", texto: "O pai do seletor", correta: true },
        { letra: "B", texto: "Uma variável", correta: false },
        { letra: "C", texto: "Um mixin", correta: false },
        { letra: "D", texto: "Um loop", correta: false },
      ],
    },
    {
      id: 9,
      pergunta: "Como você cria uma função em Sass?",
      alternativas: [
        { letra: "A", texto: "@function myFunction() {}", correta: true },
        { letra: "B", texto: "function myFunction() {}", correta: false },
        { letra: "C", texto: "myFunction() {}", correta: false },
        { letra: "D", texto: "@define myFunction() {}", correta: false },
      ],
    },
    {
      id: 10,
      pergunta: "Qual é o propósito de `@extend` em Sass?",
      alternativas: [
        { letra: "A", texto: "Adicionar novos estilos a um seletor", correta: false },
        { letra: "B", texto: "Compartilhar propriedades entre seletores", correta: true },
        { letra: "C", texto: "Criar uma nova variável", correta: false },
        { letra: "D", texto: "Importar um arquivo CSS", correta: false },
      ],
    },
  ];
  
  export default perguntasSass;
  