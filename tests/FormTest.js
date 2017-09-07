import Form from "../src/Form.vue";
import VueTestCase from "petrol/core/VueTestCase.js";

export default class ExampleVueTest extends VueTestCase {
    beforeEach() {
        this.SUT = this.mount(Form);
    }

    /** @test */
    async it_populates_the_form() {
        this.fillField('.email', 'maxi@sneekdigital.co.uk');
        this.fillField('.password', '123456');
        this.fillField('.message', 'This is a message');
        this.checkOption('.terms');
        this.selectOption('.method', 'POST');
        this.selectOption('.active', 'Yes');

        await this.nextTick();

        this.assertEquals('maxi@sneekdigital.co.uk', this.SUT.form.email);
        this.assertEquals('123456', this.SUT.form.password);
        this.assertEquals('This is a message', this.SUT.form.message);
        this.assertTrue(this.SUT.form.terms);
        this.assertEquals('POST', this.SUT.form.method);
        this.assertEquals('Yes', this.SUT.form.active);

        this.uncheckOption('.terms');
        await this.nextTick();

        this.assertFalse(this.SUT.form.terms);
    }
}