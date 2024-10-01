const perguntasHTML = [
  {
    id: 1,
    pergunta: "Qual é a tag usada para definir um parágrafo em HTML?",
    alternativas: [
      { letra: "A", texto: "<p>", correta: true },
      { letra: "B", texto: "<para>", correta: false },
      { letra: "C", texto: "<text>", correta: false },
      { letra: "D", texto: "<paragraph>", correta: false },
    ],
  },
  {
    id: 2,
    pergunta: "Qual atributo é usado para especificar um link em uma tag `<a>`?",
    alternativas: [
      { letra: "A", texto: "src", correta: false },
      { letra: "B", texto: "href", correta: true },
      { letra: "C", texto: "link", correta: false },
      { letra: "D", texto: "url", correta: false },
    ],
  },
  {
    id: 3,
    pergunta: "Qual tag é usada para criar uma lista não ordenada?",
    alternativas: [
      { letra: "A", texto: "<ol>", correta: false },
      { letra: "B", texto: "<ul>", correta: true },
      { letra: "C", texto: "<li>", correta: false },
      { letra: "D", texto: "<list>", correta: false },
    ],
  },
  {
    id: 4,
    pergunta: "Qual é a tag HTML para definir uma imagem?",
    alternativas: [
      { letra: "A", texto: "<img>", correta: true },
      { letra: "B", texto: "<picture>", correta: false },
      { letra: "C", texto: "<image>", correta: false },
      { letra: "D", texto: "<src>", correta: false },
    ],
  },
  {
    id: 5,
    pergunta: "Qual é o atributo que torna um campo de entrada obrigatório?",
    alternativas: [
      { letra: "A", texto: "required", correta: true },
      { letra: "B", texto: "mandatory", correta: false },
      { letra: "C", texto: "validate", correta: false },
      { letra: "D", texto: "checked", correta: false },
    ],
  },
  {
    id: 6,
    pergunta: "Qual tag é usada para definir um cabeçalho de nível 1?",
    alternativas: [
      { letra: "A", texto: "<h1>", correta: true },
      { letra: "B", texto: "<header>", correta: false },
      { letra: "C", texto: "<heading>", correta: false },
      { letra: "D", texto: "<h0>", correta: false },
    ],
  },
  {
    id: 7,
    pergunta: "Como você cria um botão em HTML?",
    alternativas: [
      { letra: "A", texto: "<button>", correta: true },
      { letra: "B", texto: "<btn>", correta: false },
      { letra: "C", texto: "<click>", correta: false },
      { letra: "D", texto: "<input type='button'>", correta: false },
    ],
  },
  {
    id: 8,
    pergunta: "Qual tag é usada para inserir uma quebra de linha?",
    alternativas: [
      { letra: "A", texto: "<break>", correta: false },
      { letra: "B", texto: "<br>", correta: true },
      { letra: "C", texto: "<linebreak>", correta: false },
      { letra: "D", texto: "<lb>", correta: false },
    ],
  },
  {
    id: 9,
    pergunta: "Qual é a tag usada para definir uma tabela?",
    alternativas: [
      { letra: "A", texto: "<table>", correta: true },
      { letra: "B", texto: "<tab>", correta: false },
      { letra: "C", texto: "<data>", correta: false },
      { letra: "D", texto: "<chart>", correta: false },
    ],
  },
  {
    id: 10,
    pergunta: "Qual atributo é usado para fornecer uma descrição de uma imagem?",
    alternativas: [
      { letra: "A", texto: "desc", correta: false },
      { letra: "B", texto: "alt", correta: true },
      { letra: "C", texto: "title", correta: false },
      { letra: "D", texto: "caption", correta: false },
    ],
  },
];

export default perguntasHTML;
