<template>
  <div>
    <h1>Create User</h1>
    <form v-on:submit.prevent = "createUser">
      <div>name: <input type="text" v-model="user.name"></div>
      <div>lastname: <input type="text" v-model="user.lastname"></div>
      <div>email: <input type="text" v-model="user.email"></div>
      <div>password: <input type="password" v-model="user.password"></div>
      <div><button type="submit">create user</button></div>
    </form>
  </div>
</template>

<script>
import UsersService from '../../services/UsersService';
export default {
  data(){
    return {
      user: {
        name: '',
        lastname: '',
        email: '',
        password: '',
        status: 'active'
      }
    }
  },
  methods:{
    async createUser(){
      try{
        await UsersService.post(this.user);
        this.$router.push('/users');
      }catch(err){
        console.log(err);
      }
      
    }
  }

}
</script>

<style>

</style>