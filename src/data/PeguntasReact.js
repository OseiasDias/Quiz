const perguntasReact = [
    {
      id: 1,
      pergunta: "O que é React?",
      alternativas: [
        { letra: "A", texto: "Um framework para aplicações web", correta: false },
        { letra: "B", texto: "Uma biblioteca JavaScript para construir interfaces de usuário", correta: true },
        { letra: "C", texto: "Um sistema de gerenciamento de banco de dados", correta: false },
        { letra: "D", texto: "Uma linguagem de programação", correta: false },
      ],
    },
    {
      id: 2,
      pergunta: "Qual é o comando para criar um novo aplicativo React usando Create React App?",
      alternativas: [
        { letra: "A", texto: "npx create-react-app my-app", correta: true },
        { letra: "B", texto: "npm init react-app my-app", correta: false },
        { letra: "C", texto: "create-react-app my-app", correta: false },
        { letra: "D", texto: "ng create my-app", correta: false },
      ],
    },
    {
      id: 3,
      pergunta: "Qual é a sintaxe para criar um componente funcional em React?",
      alternativas: [
        { letra: "A", texto: "function MyComponent() {}", correta: true },
        { letra: "B", texto: "const MyComponent = () => {}", correta: false },
        { letra: "C", texto: "Ambas as anteriores", correta: true },
        { letra: "D", texto: "class MyComponent {}", correta: false },
      ],
    },
    {
      id: 4,
      pergunta: "O que é JSX?",
      alternativas: [
        { letra: "A", texto: "Uma extensão de sintaxe para JavaScript", correta: true },
        { letra: "B", texto: "Um tipo de componente", correta: false },
        { letra: "C", texto: "Uma linguagem de programação", correta: false },
        { letra: "D", texto: "Um framework", correta: false },
      ],
    },
    {
      id: 5,
      pergunta: "Como você passa dados de um componente pai para um componente filho?",
      alternativas: [
        { letra: "A", texto: "Usando props", correta: true },
        { letra: "B", texto: "Usando state", correta: false },
        { letra: "C", texto: "Usando context", correta: false },
        { letra: "D", texto: "Usando hooks", correta: false },
      ],
    },
    {
      id: 6,
      pergunta: "Qual é a função do hook `useState`?",
      alternativas: [
        { letra: "A", texto: "Gerenciar o ciclo de vida do componente", correta: false },
        { letra: "B", texto: "Gerenciar o estado em componentes funcionais", correta: true },
        { letra: "C", texto: "Criar um novo componente", correta: false },
        { letra: "D", texto: "Estilizar componentes", correta: false },
      ],
    },
    {
      id: 7,
      pergunta: "Como você faz uma requisição HTTP em um componente React?",
      alternativas: [
        { letra: "A", texto: "Usando `fetch` ou `axios`", correta: true },
        { letra: "B", texto: "Usando `get`", correta: false },
        { letra: "C", texto: "Usando `request`", correta: false },
        { letra: "D", texto: "Usando `http`", correta: false },
      ],
    },
    {
      id: 8,
      pergunta: "O que é o Virtual DOM em React?",
      alternativas: [
        { letra: "A", texto: "Uma cópia do DOM real", correta: true },
        { letra: "B", texto: "O DOM original", correta: false },
        { letra: "C", texto: "Um tipo de componente", correta: false },
        { letra: "D", texto: "Um framework de estilização", correta: false },
      ],
    },
    {
      id: 9,
      pergunta: "Qual é a sintaxe correta para criar uma chave (key) em uma lista?",
      alternativas: [
        { letra: "A", texto: "key={index}", correta: false },
        { letra: "B", texto: "key={item.id}", correta: true },
        { letra: "C", texto: "key={item.key}", correta: false },
        { letra: "D", texto: "key={i}", correta: false },
      ],
    },
    {
      id: 10,
      pergunta: "Qual é a função do hook `useEffect`?",
      alternativas: [
        { letra: "A", texto: "Gerenciar o estado do componente", correta: false },
        { letra: "B", texto: "Executar efeitos colaterais em componentes funcionais", correta: true },
        { letra: "C", texto: "Renderizar componentes", correta: false },
        { letra: "D", texto: "Criar novos hooks", correta: false },
      ],
    },
  ];
  
  export default perguntasReact;
  