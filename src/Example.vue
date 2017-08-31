<template>
    <div>
        <ul class="todos">
            <li v-on:click="toggle(todo)" class="todo-item" v-for="todo in todos" :class="{'completed' : todo.done}">
                {{ todo.title }}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                todos: []
            }
        },

        methods: {
            addTodo(title) {
                this.todos.push({name: title, done: false});
            },

            toggle(todo) {
                todo.done = !todo.done;
            }
        }
    }
</script>