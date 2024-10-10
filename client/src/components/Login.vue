<template>
  <div class="wrapper"> 
    <form class="form-signin" v-on:submit.prevent="onLogin">       
      <h2 class="form-signin-heading">Login</h2>
      <input 
        type="email" 
        class="form-control" 
        id="email" 
        v-model="email" 
        placeholder="Email Address" 
        required 
        autofocus 
      />
      <input 
        type="password" 
        class="form-control" 
        id="password" 
        v-model="password" 
        placeholder="Password" 
        required
      />
      <label class="checkbox">
        <input 
          type="checkbox" 
          v-model="rememberMe"
        > Remember me
      </label>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button> 
      <button class="btn btn-lg btn-secondary btn-block" type="button" @click="goToSignUp">Sign Up</button>
      <div class="error" v-if="error">{{ error }}</div>
    </form>
  </div>
</template>

<script>
import AuthenService from "../services/AuthenService";
export default {
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,  // ฟิลด์ Remember Me
      error: null,
    };
  },
  methods: {
  async onLogin() {
    try {
      const response = await AuthenService.login({
        email: this.email,
        password: this.password,
      });

      this.$store.dispatch("setToken", response.data.token);
      this.$store.dispatch("setUser", response.data.user);

      this.$router.push({
        name: "users",
      });
    } catch (error) {
      console.log(error);
      this.error = error.response.data.error;
      this.email = "";
      this.password = "";
    }
  },
  
  // ฟังก์ชันที่จะพาไปยังหน้า CreateUser.vue
  goToSignUp() {
    this.$router.push({ name: "user-create" }); // เส้นทางที่คุณตั้งใน router
  },
}
};
</script>

<style scoped>
body {
  background: #eee !important;  
}

.wrapper {  
  margin-top: 80px;
  margin-bottom: 80px;
}

.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.1);  
}

.form-signin-heading,
.checkbox {
  margin-bottom: 30px;
}

.checkbox {
  font-weight: normal;
}

.form-control {
  position: relative;
  font-size: 16px;
  height: auto;
  padding: 10px;
  box-sizing: border-box;
}

input[type="text"],
input[type="email"] {
  margin-bottom: -1px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

input[type="password"] {
  margin-bottom: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
