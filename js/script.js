const {createApp} = Vue;

createApp({
    data() {
        return {
            newTodo: {
                text: "",
                done: false
            },
            todoList: []
        };
    },
    methods: {
        addTodo: function() {
            this.newTodo.text.trim()
            if(!this.newTodo.text == ""){
                
                this.todoList.push({...this.newTodo});
                this.newTodo.text = "";
            }          

        },
        removeTodo: function(todoIndex) {

            this.todoList.splice(todoIndex, 1);

        },
        setDone: function(todoIndex) {

            if(!this.todoList.length === 0){
                this.todoList[todoIndex].done = !this.todoList[todoIndex].done;
            }
            
        }

    }
}).mount("#app");