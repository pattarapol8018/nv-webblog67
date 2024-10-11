<template>
  <div class="background">
    <div class="edit-user-container">
      <h1>Edit User</h1>
      <form v-on:submit.prevent="editUser">
        <div class="form-group">
          <label>name:</label>
          <input type="text" v-model="user.name" />
        </div>
        <div class="form-group">
          <label>lastname:</label>
          <input type="text" v-model="user.lastname" />
        </div>
        <div class="form-group">
          <label>email:</label>
          <input type="text" v-model="user.email" />
        </div>
        <div class="form-group">
          <label>password:</label>
          <input type="password" v-model="user.password" />
        </div>
        <div class="form-group">
          <button type="submit" class="edit-btn">Edit user</button>
        </div>
      </form>
    </div>
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
  async created() {
    try {
      var userId = this.$route.params.userId;
      this.user = (await UsersService.show(userId)).data;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async editUser() {
      try {
        await UsersService.put(this.user);
        this.$router.push('/users');
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style scoped>
.background {
  background-image: url('../../assets/BG4.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh; 
  height: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.edit-user-container {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: left;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #4A90E2;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #333;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.edit-btn {
  width: 100%;
  padding: 10px;
  background-color: #4A90E2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.edit-btn:hover {
  background-color: #357ABD;
}
</style>
