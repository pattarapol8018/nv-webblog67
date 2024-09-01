<template>
  <div>
    <h1>Show User</h1>
    <p>User ID: </p>
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
    var userId = this.$route.params.userId;
    this.user = (await UsersService.show(userId)).data;
    console.log(this.user);
  },

}
</script>

<style>

</style>