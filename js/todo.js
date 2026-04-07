var todos = [
  { text: "Learn JavaScript", done: true },
  { text: "Learn Vue", done: false },
];

const todoApp = {
  data() {
    return {
      todos: todos,
      newTodo: {
        done: false,
      },
    };
  },
  methods: {
    addTodo: function () {
      if (this.newTodo.text) {
        this.todos.push(this.newTodo);
        this.newTodo = {};
        localStorage.setItem("todos", JSON.stringify(this.todos));
      } else {
        alert("Please enter a to-do item.");
      }
    },
    
  },
  created(){
      const savedTodos = localStorage.getItem("todos");
      if (savedTodos) {
        this.todos = JSON.parse(savedTodos);
      }
  },
  updated(){
      localStorage.setItem("todos", JSON.stringify(this.todos));
  }
};

Vue.createApp(todoApp).mount("#app");
