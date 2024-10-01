const perguntasJavaScript = [
    {
      id: 1,
      pergunta: "Qual é o símbolo usado para declarar uma variável em JavaScript?",
      alternativas: [
        { letra: "A", texto: "var", correta: true },
        { letra: "B", texto: "left", correta: false },
        { letra: "C", texto: "const", correta: false },
        { letra: "D", texto: "Todos os anteriores", correta: false },
      ],
    },
    {
      id: 2,
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array?",
      alternativas: [
        { letra: "A", texto: "add()", correta: false },
        { letra: "B", texto: "push()", correta: true },
        { letra: "C", texto: "append()", correta: false },
        { letra: "D", texto: "insert()", correta: false },
      ],
    },
    {
      id: 3,
      pergunta: "Qual é a forma correta de criar uma função em JavaScript?",
      alternativas: [
        { letra: "A", texto: "function myFunction() {}", correta: true },
        { letra: "B", texto: "func myFunction() {}", correta: false },
        { letra: "C", texto: "create myFunction() {}", correta: false },
        { letra: "D", texto: "def myFunction() {}", correta: false },
      ],
    },
    {
      id: 4,
      pergunta: "Qual é o resultado de `typeof NaN`?",
      alternativas: [
        { letra: "A", texto: "undefined", correta: false },
        { letra: "B", texto: "number", correta: true },
        { letra: "C", texto: "NaN", correta: false },
        { letra: "D", texto: "string", correta: false },
      ],
    },
    {
      id: 5,
      pergunta: "Como você cria um objeto em JavaScript?",
      alternativas: [
        { letra: "A", texto: "var obj = {}", correta: true },
        { letra: "B", texto: "var obj = []", correta: false },
        { letra: "C", texto: "var obj = ()", correta: false },
        { letra: "D", texto: "var obj = <obj>", correta: false },
      ],
    },
    {
      id: 6,
      pergunta: "Qual método é usado para converter uma string em um número inteiro?",
      alternativas: [
        { letra: "A", texto: "parseInt()", correta: true },
        { letra: "B", texto: "Number()", correta: false },
        { letra: "C", texto: "toInteger()", correta: false },
        { letra: "D", texto: "convertToInt()", correta: false },
      ],
    },
    {
      id: 7,
      pergunta: "Qual é o operador usado para comparação estrita em JavaScript?",
      alternativas: [
        { letra: "A", texto: "==", correta: false },
        { letra: "B", texto: "===", correta: true },
        { letra: "C", texto: "!=", correta: false },
        { letra: "D", texto: "!==", correta: false },
      ],
    },
    {
      id: 8,
      pergunta: "Como você adiciona um evento de clique a um elemento?",
      alternativas: [
        { letra: "A", texto: "element.onclick = function() {}", correta: true },
        { letra: "B", texto: "element.addEventListener('click', function() {})", correta: false },
        { letra: "C", texto: "Ambas as opções", correta: false },
        { letra: "D", texto: "element.click()", correta: false },
      ],
    },
    {
      id: 9,
      pergunta: "O que faz o método `Array.isArray()`?",
      alternativas: [
        { letra: "A", texto: "Verifica se um valor é um array", correta: true },
        { letra: "B", texto: "Cria um novo array", correta: false },
        { letra: "C", texto: "Adiciona um elemento a um array", correta: false },
        { letra: "D", texto: "Remove um elemento de um array", correta: false },
      ],
    },
    {
      id: 10,
      pergunta: "Como você faz um loop em um array?",
      alternativas: [
        { letra: "A", texto: "forEach()", correta: true },
        { letra: "B", texto: "for()", correta: false },
        { letra: "C", texto: "loop()", correta: false },
        { letra: "D", texto: "each()", correta: false },
      ],
    },
  ];
  
  export default perguntasJavaScript;
  