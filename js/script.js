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
            
            if(!this.newTodo.text == ""){
                
                this.todoList.push({...this.newTodo});
                this.newTodo.text = "";
            }          

        },
        removeTodo: function(todoIndex) {
            console.log("removetodo");
            this.todoList.splice(todoIndex, 1);

        },
        setDone: function(todoIndex) {
            
            console.log("setdone")
            this.todoList[todoIndex].done = !this.todoList[todoIndex].done;
            
            
        }

    }
}).mount("#app");