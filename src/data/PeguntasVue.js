const perguntasVue = [
    {
      id: 1,
      pergunta: "O que é Vue.js?",
      alternativas: [
        { letra: "A", texto: "Uma biblioteca JavaScript para manipulação de DOM", correta: false },
        { letra: "B", texto: "Um framework progressivo para construir interfaces de usuário", correta: true },
        { letra: "C", texto: "Uma linguagem de programação", correta: false },
        { letra: "D", texto: "Um sistema de gerenciamento de banco de dados", correta: false },
      ],
    },
    {
      id: 2,
      pergunta: "Qual comando é usado para criar um novo projeto Vue.js usando Vue CLI?",
      alternativas: [
        { letra: "A", texto: "vue create my-project", correta: true },
        { letra: "B", texto: "npm init vue my-project", correta: false },
        { letra: "C", texto: "vue new my-project", correta: false },
        { letra: "D", texto: "create-vue my-project", correta: false },
      ],
    },
    {
      id: 3,
      pergunta: "Qual é a sintaxe correta para declarar uma nova instância Vue?",
      alternativas: [
        { letra: "A", texto: "new Vue({})", correta: true },
        { letra: "B", texto: "Vue.create({})", correta: false },
        { letra: "C", texto: "Vue.new({})", correta: false },
        { letra: "D", texto: "instance Vue({})", correta: false },
      ],
    },
    {
      id: 4,
      pergunta: "Como você define uma propriedade reativa em Vue?",
      alternativas: [
        { letra: "A", texto: "data: { myProp: value }", correta: true },
        { letra: "B", texto: "prop: { myProp: value }", correta: false },
        { letra: "C", texto: "reactive: { myProp: value }", correta: false },
        { letra: "D", texto: "state: { myProp: value }", correta: false },
      ],
    },
    {
      id: 5,
      pergunta: "Qual é a diretiva usada para renderizar listas em Vue?",
      alternativas: [
        { letra: "A", texto: "v-for", correta: true },
        { letra: "B", texto: "v-list", correta: false },
        { letra: "C", texto: "v-repeat", correta: false },
        { letra: "D", texto: "v-each", correta: false },
      ],
    },
    {
      id: 6,
      pergunta: "Como você faz o binding bidirecional de um input em Vue?",
      alternativas: [
        { letra: "A", texto: "v-bind", correta: false },
        { letra: "B", texto: "v-model", correta: true },
        { letra: "C", texto: "v-input", correta: false },
        { letra: "D", texto: "v-link", correta: false },
      ],
    },
    {
      id: 7,
      pergunta: "Qual é a função do `v-if` em Vue?",
      alternativas: [
        { letra: "A", texto: "Criar classes dinâmicas", correta: false },
        { letra: "B", texto: "Condicionalmente renderizar elementos", correta: true },
        { letra: "C", texto: "Fazer requisições HTTP", correta: false },
        { letra: "D", texto: "Estilizar componentes", correta: false },
      ],
    },
    {
      id: 8,
      pergunta: "Como você define um componente em Vue?",
      alternativas: [
        { letra: "A", texto: "Vue.component('my-component', {})", correta: true },
        { letra: "B", texto: "new Vue.component('my-component', {})", correta: false },
        { letra: "C", texto: "component('my-component', {})", correta: false },
        { letra: "D", texto: "defineComponent('my-component', {})", correta: false },
      ],
    },
    {
      id: 9,
      pergunta: "Qual é a função do `mounted` em um componente Vue?",
      alternativas: [
        { letra: "A", texto: "Inicializar dados", correta: false },
        { letra: "B", texto: "Executar código após o componente ser montado no DOM", correta: true },
        { letra: "C", texto: "Renderizar o componente", correta: false },
        { letra: "D", texto: "Definir propriedades", correta: false },
      ],
    },
    {
      id: 10,
      pergunta: "Como você importa um componente em outro componente em Vue?",
      alternativas: [
        { letra: "A", texto: "import MyComponent from './MyComponent.vue'", correta: true },
        { letra: "B", texto: "require('./MyComponent.vue')", correta: false },
        { letra: "C", texto: "include './MyComponent.vue'", correta: false },
        { letra: "D", texto: "import './MyComponent.vue'", correta: false },
      ],
    },
  ];
  
  export default perguntasVue;
  