const perguntasCSS = [
    {
      id: 1,
      pergunta: "Qual é a propriedade usada para alterar a cor do texto?",
      alternativas: [
        { letra: "A", texto: "color", correta: true },
        { letra: "B", texto: "font-color", correta: false },
        { letra: "C", texto: "text-color", correta: false },
        { letra: "D", texto: "foreground-color", correta: false },
      ],
    },
    {
      id: 2,
      pergunta: "Como você seleciona todos os parágrafos em CSS?",
      alternativas: [
        { letra: "A", texto: "p", correta: true },
        { letra: "B", texto: "paragraph", correta: false },
        { letra: "C", texto: "select p", correta: false },
        { letra: "D", texto: "*p", correta: false },
      ],
    },
    {
      id: 3,
      pergunta: "Qual propriedade é usada para alterar o tamanho da fonte?",
      alternativas: [
        { letra: "A", texto: "font-weight", correta: false },
        { letra: "B", texto: "font-size", correta: true },
        { letra: "C", texto: "text-size", correta: false },
        { letra: "D", texto: "text-style", correta: false },
      ],
    },
    {
      id: 4,
      pergunta: "Como você aplica uma borda de 1 pixel sólida preta a um elemento?",
      alternativas: [
        { letra: "A", texto: "border: 1px solid black;", correta: true },
        { letra: "B", texto: "border: black 1px solid;", correta: false },
        { letra: "C", texto: "border: 1px black solid;", correta: false },
        { letra: "D", texto: "border: solid black 1px;", correta: false },
      ],
    },
    {
      id: 5,
      pergunta: "Qual propriedade controla o espaçamento entre linhas?",
      alternativas: [
        { letra: "A", texto: "line-height", correta: true },
        { letra: "B", texto: "spacing", correta: false },
        { letra: "C", texto: "text-spacing", correta: false },
        { letra: "D", texto: "height", correta: false },
      ],
    },
    {
      id: 6,
      pergunta: "Como você cria um comentário em CSS?",
      alternativas: [
        { letra: "A", texto: "<!-- Comment -->", correta: false },
        { letra: "B", texto: "// Comment", correta: false },
        { letra: "C", texto: "/* Comment */", correta: true },
        { letra: "D", texto: "# Comment", correta: false },
      ],
    },
    {
      id: 7,
      pergunta: "Qual unidade de medida é relativa ao tamanho da fonte do elemento pai?",
      alternativas: [
        { letra: "A", texto: "px", correta: false },
        { letra: "B", texto: "em", correta: true },
        { letra: "C", texto: "pt", correta: false },
        { letra: "D", texto: "cm", correta: false },
      ],
    },
    {
      id: 8,
      pergunta: "Qual propriedade é usada para definir a transparência de um elemento?",
      alternativas: [
        { letra: "A", texto: "opacity", correta: true },
        { letra: "B", texto: "transparency", correta: false },
        { letra: "C", texto: "visible", correta: false },
        { letra: "D", texto: "alpha", correta: false },
      ],
    },
    {
      id: 9,
      pergunta: "Como você altera a cor de fundo de um elemento?",
      alternativas: [
        { letra: "A", texto: "background-color", correta: true },
        { letra: "B", texto: "color-background", correta: false },
        { letra: "C", texto: "bg-color", correta: false },
        { letra: "D", texto: "background", correta: false },
      ],
    },
    {
      id: 10,
      pergunta: "Qual é a maneira correta de adicionar uma classe a um elemento?",
      alternativas: [
        { letra: "A", texto: "<div class='minha-classe'>", correta: true },
        { letra: "B", texto: "<div class='minha classe'>", correta: false },
        { letra: "C", texto: "<div class='minha_classe'>", correta: false },
        { letra: "D", texto: "<div class='minha-classe'>", correta: false },
      ],
    },
  ];
  
  export default perguntasCSS;
  