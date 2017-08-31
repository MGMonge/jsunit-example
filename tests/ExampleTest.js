import TestCase from "petrol/core/TestCase";
import TodoList from "../src/TodoList";

export default class ExampleTest extends TestCase {

    /** @test */
    it_can_be_constructed_without_todo_items() {
        let SUT = new TodoList;

        this.assertCount(0, SUT.todos);
    }

    /** @test */
    it_can_be_constructed_with_todo_items() {
        let SUT = new TodoList([
            {name: 'Wake up', done: false},
            {name: 'Have some breakfast', done: false},
            {name: 'Brush my teeth', done: false},
            {name: 'Go to work', done: false},
        ])

        this.assertCount(4, SUT.todos);
    }

    /** @test */
    it_can_add_new_items() {
        let SUT = new TodoList;

        SUT.addItem('Go shopping');

        this.assertCount(1, SUT.todos);
    }

    /** @test */
    it_get_a_sigle_todo_item() {
        let SUT = new TodoList([{name: 'Go shopping', done: false}]);

        this.assertEquals({name: 'Go shopping', done: false}, SUT.get('Go shopping'));
    }

    /** @test */
    it_returns_null_when_todo_was_not_found() {
        let SUT = new TodoList;

        this.assertEquals(null, SUT.get('Go shopping'));
    }

    /** @test */
    it_can_complete_a_todo_item() {
        let SUT = new TodoList([{name: 'Go shopping', done: false}]);

        SUT.complete('Go shopping');

        this.assertEquals([{name: 'Go shopping', done: true}], SUT.todos);
    }

    /** @test */
    it_returns_only_completed_todos() {
        let SUT = new TodoList([
            {name: 'Wake up', done: true},
            {name: 'Have some breakfast', done: true},
            {name: 'Brush my teeth', done: false},
            {name: 'Go to work', done: false},
        ])

        let expected = [
            {name: 'Wake up', done: true},
            {name: 'Have some breakfast', done: true},
        ];

        this.assertEquals(expected, SUT.completedTodos());
    }
}
