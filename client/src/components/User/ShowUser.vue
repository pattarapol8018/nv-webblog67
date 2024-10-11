<template>
  <div class="background">
    <div class="show-user-header">
      <h1>Show User</h1>
    </div>
    <div class="user-info-box">
      <div class="user-info">
        <p><b>ID:</b> {{ user.id }} </p>
        <p><b>Name:</b> {{ user.name }} </p>
        <p><b>Lastname:</b> {{ user.lastname }} </p>
        <p><b>Email:</b> {{ user.email }}</p>
        <p><b>Password:</b> {{ user.password }}</p>
        <p><b>Status:</b> {{ user.status }}</p>
        <p><b>Type:</b> {{ user.type }}</p>
        <p><b>Created At:</b> {{ user.createdAt }}</p>
      </div>
    </div>
    <div>
      <button v-on:click="navigateToUsers" class="back-button">กลับ</button>
    </div>
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
  },
  methods: {
    navigateToUsers() {
      this.$router.push('/users'); // การนำทางไปที่หน้า All Users
    }
  }
}
</script>

<style scoped>
.background {
  background-image: url('../../assets/BG3.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh; 
  height: 100%; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* แทนที่ center ด้วย flex-start เพื่อให้อยู่ด้านบน */
  padding-top: 50px; /* เพิ่ม padding บนเพื่อกำหนดตำแหน่ง */
}

.show-user-header {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 20px;
  width: 500px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px; /* เพิ่มค่า margin-top เพื่อนำกล่อง Show User ขึ้นมา */
}

.user-info-box {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 30px;
  width: 600px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  text-align: left;
}

h1 {
  color: #4A90E2;
  margin: 0;
}

.user-info p {
  margin: 10px 0;
  font-size: 18px;
  color: #333;
}

.user-info p b {
  color: #4A90E2;
}

.back-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}

.back-button:hover {
  background-color: #0056b3;
}
</style>
