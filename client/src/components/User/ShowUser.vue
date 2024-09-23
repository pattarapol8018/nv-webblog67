<template>
  <div>
    <h1>Show User</h1>
    <p>ID: {{ user.id }} </p>
    <p>Name: {{ user.id }} </p>
    <p>Lastname: {{ user.lastname }} </p>
    <p>Email: {{ user.email }}</p>
    <p>Password: {{ user.password }}</p>
    <p>Status: {{ user.status }}</p>
    <p>Type: {{ user.type }}</p>
    <p>Created At: {{ user.createdAt }}</p>
  </div>
</template>

<script>
import UsersService from "@/services/UsersService";

export default { 
  data(){
    return {
      user: {}
    }
  },
  async created() {
    try{
      var userId = this.$route.params.userId;
      this.user = (await UsersService.show(userId)).data;
    }catch(err){
      console.log(err);
    }
    
    // console.log(this.user);
  },
  

}
</script>

<style>

</style>