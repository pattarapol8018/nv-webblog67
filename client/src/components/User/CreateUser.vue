<template>
  <div class="signin-container">
    <h1>Sign in</h1>
    <form v-on:submit.prevent="createUser">
      <div class="form-group">
        ชื่อ: <input type="text" v-model="user.name" />
      </div>
      <div class="form-group">
        นามสกุล: <input type="text" v-model="user.lastname" />
      </div>
      <div class="form-group">
        Email: <input type="text" v-model="user.email" />
      </div>
      <div class="form-group">
        Password: <input type="password" v-model="user.password" />
      </div>
      <div>
        <button type="submit" class="signin-button">Sign in</button>
      </div>
    </form>
  </div>
</template>

<script>
import UsersService from '../../services/UsersService';
export default {
  data() {
    return {
      user: {
        name: '',
        lastname: '',
        email: '',
        password: '',
        status: 'active'
      }
    };
  },
  methods: {
    async createUser() {
      try {
        await UsersService.post(this.user);
        this.$router.push('/login');
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style>
/* ปรับ CSS เพื่อความสวยงาม */
.signin-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.signin-container h1 {
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.form-group input:focus {
  border-color: #4CAF50;
}

.signin-button {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.signin-button:hover {
  background-color: #45a049;
}
</style>
