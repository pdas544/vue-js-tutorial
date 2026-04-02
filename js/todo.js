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
      } else {
        alert("Please enter a to-do item.");
      }
    },
  },
};

Vue.createApp(todoApp).mount("#app");
