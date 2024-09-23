<template>
    <div>
        <h1>User Login</h1>
        <form v-on:submit.prevent="onLogin">
            <div>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" v-model="email" required>
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" v-model="password" required>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>
<script>
import AuthenService from '../services/AuthenService';
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async onLogin() {
            try{
                const response = await AuthenService.login({
                email: this.email,
                password: this.password
                });

                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)
                
                console.log(response);
            }catch(error){
                console.log(error);
            }
        }
    }
}
</script>
<style>
</style>