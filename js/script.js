const {createApp} = Vue;

createApp({
    data() {
        return {
            newTodo: {
                text: "",
                done: false
            },
            todoList: []
        }
    },
    methods: {
        addTodo: function() {
            this.todoList.push({...this.newTodo});
            this.newTodo.text = "";
        },
        removeTodo: function(todoIndex) {
            this.todoList.splice(todoIndex, 1)
        },
        setDone: function(todoIndex) {
            this.todoList[todoIndex].done = !this.todoList[todoIndex].done;
        }
    }
}).mount("#app");