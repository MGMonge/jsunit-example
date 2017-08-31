class TodoList {
    constructor(todos = []) {
        this.todos =  todos;
    }

    addItem(name) {
        this.todos.push({name, done: false});
    }

    get(name) {
        for (let todo of this.todos) {
            if (todo.name === name) {
                return todo;
            }
        }

        return null;
    }

    complete(name) {
        this.get(name).done = true;
    }

    completedTodos() {
        return this.todos.filter((todo) => todo.done);
    }
}

export default TodoList;