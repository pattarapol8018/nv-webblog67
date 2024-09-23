<template>
  <div>
    <h1>Edit User</h1>
    <form v-on:submit.prevent = "editUser">
      <div>name: <input type="text" v-model="user.name"></div>
      <div>lastname: <input type="text" v-model="user.lastname"></div>
      <div>email: <input type="text" v-model="user.email"></div>
      <div>password: <input type="password" v-model="user.password"></div>
      <div><button type="submit">Edit user</button></div>
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
  async created(){
    try{
      var userId = this.$route.params.userId;
      this.user = (await UsersService.show(userId)).data;
    }catch(err){
      console.log(err);
    }
  },
  methods:{
    async editUser(){
      try{
        await UsersService.put(this.user);
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