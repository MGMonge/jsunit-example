<template>
    <div>
        <form action="#">
            <input type="text" v-model="form.email" class="email" />
            <input type="password" v-model="form.password" class="password" />
            <textarea v-model="form.message" class="message"></textarea>
            <input type="checkbox" v-model="form.terms" class="terms"> Accept Terms
            <select v-model="form.method" class="method">
                <option value="">Select method</option>
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
            </select>
            <input type="radio" class="active" v-model="form.active" value="Yes"> Yes
            <input type="radio" class="active" v-model="form.active" value="No"> No
        </form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                    terms: false,
                    select: '',
                    radio: 'No'
                }
            }
        }
    }
</script>