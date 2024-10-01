const perguntasAngular = [
    {
      id: 1,
      pergunta: "O que é Angular?",
      alternativas: [
        { letra: "A", texto: "Uma biblioteca JavaScript", correta: false },
        { letra: "B", texto: "Um framework para aplicações web", correta: true },
        { letra: "C", texto: "Uma linguagem de programação", correta: false },
        { letra: "D", texto: "Um sistema de gerenciamento de banco de dados", correta: false },
      ],
    },
    {
      id: 2,
      pergunta: "Qual comando é usado para criar um novo projeto Angular?",
      alternativas: [
        { letra: "A", texto: "ng new project-name", correta: true },
        { letra: "B", texto: "ng create project-name", correta: false },
        { letra: "C", texto: "angular create project-name", correta: false },
        { letra: "D", texto: "npm init angular", correta: false },
      ],
    },
    {
      id: 3,
      pergunta: "O que são componentes em Angular?",
      alternativas: [
        { letra: "A", texto: "Funções reutilizáveis", correta: false },
        { letra: "B", texto: "Elementos da interface de usuário", correta: true },
        { letra: "C", texto: "Serviços", correta: false },
        { letra: "D", texto: "Módulos", correta: false },
      ],
    },
    {
      id: 4,
      pergunta: "Qual é a extensão de arquivo para arquivos de componente em Angular?",
      alternativas: [
        { letra: "A", texto: ".html", correta: false },
        { letra: "B", texto: ".js", correta: false },
        { letra: "C", texto: ".ts", correta: true },
        { letra: "D", texto: ".css", correta: false },
      ],
    },
    {
      id: 5,
      pergunta: "Como você define uma diretiva em Angular?",
      alternativas: [
        { letra: "A", texto: "@Directive", correta: true },
        { letra: "B", texto: "@Component", correta: false },
        { letra: "C", texto: "@Module", correta: false },
        { letra: "D", texto: "@Pipe", correta: false },
      ],
    },
    {
      id: 6,
      pergunta: "Qual comando é usado para iniciar o servidor de desenvolvimento?",
      alternativas: [
        { letra: "A", texto: "ng serve", correta: true },
        { letra: "B", texto: "ng start", correta: false },
        { letra: "C", texto: "ng run", correta: false },
        { letra: "D", texto: "npm start", correta: false },
      ],
    },
    {
      id: 7,
      pergunta: "O que é o Angular CLI?",
      alternativas: [
        { letra: "A", texto: "Uma interface de linha de comando para gerenciamento de pacotes", correta: false },
        { letra: "B", texto: "Uma ferramenta para construir e gerenciar projetos Angular", correta: true },
        { letra: "C", texto: "Um framework para estilização", correta: false },
        { letra: "D", texto: "Uma biblioteca de componentes", correta: false },
      ],
    },
    {
      id: 8,
      pergunta: "Como você injeta um serviço em um componente?",
      alternativas: [
        { letra: "A", texto: "constructor(private myService: MyService)", correta: true },
        { letra: "B", texto: "@Inject(MyService)", correta: false },
        { letra: "C", texto: "this.myService = MyService", correta: false },
        { letra: "D", texto: "import MyService", correta: false },
      ],
    },
    {
      id: 9,
      pergunta: "Qual é a função do decorador `@NgModule`?",
      alternativas: [
        { letra: "A", texto: "Definir um componente", correta: false },
        { letra: "B", texto: "Configurar um módulo Angular", correta: true },
        { letra: "C", texto: "Criar uma diretiva", correta: false },
        { letra: "D", texto: "Definir uma rota", correta: false },
      ],
    },
    {
      id: 10,
      pergunta: "Como você define uma rota em Angular?",
      alternativas: [
        { letra: "A", texto: "@Route()", correta: false },
        { letra: "B", texto: "@Router()", correta: false },
        { letra: "C", texto: "Usando o módulo `RouterModule`", correta: true },
        { letra: "D", texto: "@Routing()", correta: false },
      ],
    },
  ];
  
  export default perguntasAngular;
  