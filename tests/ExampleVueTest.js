import Example from "../src/Example.vue";
import VueTestCase from "petrol/core/VueTestCase.js";

export default class ExampleVueTest extends VueTestCase {
    beforeEach() {
        this.SUT = this.mount(Example);
    }

    /** @test */
    it_displays_the_list_of_todos_with_completed_class() {
        this.SUT.todos = [
            {name: 'Do task 1', done: true},
            {name: 'Do task 2', done: false},
            {name: 'Do task 3', done: false}
        ];

        this.nextTick(() => {
            this.assertElementExists('.todos');
            this.assertNumberOfElements('.todos li', 3);
            this.assertNumberOfElements('.todos li.completed', 1);
            this.assertElementContains('.todos li.completed', 'Do task 1');
            this.assertElementNotContains('.todos li.completed', 'Do task 2');
            this.assertElementNotContains('.todos li.completed', 'Do task 3');
            this.assertElementNotExists('.foobar');
        });
    }

    /** @test */
    async it_toggles_completed_state() {
        this.SUT.todos = [
            {name: 'Do task 1', done: false},
        ];

        await this.nextTick();
        this.assertNumberOfElements('.todos li.completed', 0);

        this.click('.todos li:first-child');

        await this.nextTick();
        this.assertNumberOfElements('.todos li.completed', 1);

        this.click('.todos li:first-child');
        await this.nextTick();
        this.assertNumberOfElements('.todos li.completed', 0);
    }
}