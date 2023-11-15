const {createApp} = Vue;

createApp({
    data() {
        return {
            newTodo: "",
            todoList: []
        }
    },
    methods: {
        addTodo: function() {
            this.todoList.push(this.newTodo);
            this.newTodo = "";
        },
        removeTodo: function(todoIndex) {
            this.todoList.splice(todoIndex, 1)
        }
    }
}).mount("#app");