<template>
  <div class="background">
    <h1>All Users</h1>
    <hr>
    <div v-if="users.length" class="user-info-container">
      <div><b>จำนวนผู้ใช้งาน:</b> {{ users.length }}</div>
      <div v-for="user in users" v-bind:key="user.id" class="user-card">
        <div><b>id:</b> {{ user.id }}</div>
        <div><b>ชื่อผู้ใช้:</b> {{ user.name }} {{ user.lastname }}</div>
        <div><b>อีเมล:</b> {{ user.email }}</div>
        <div><b>status:</b> {{ user.status }}</div>
        <div><b>type:</b> {{ user.type }}</div>
        <div>
          <button v-on:click="navigateTo('/user/'+user.id)">ดูข้อมูล</button>
          <button v-on:click="navigateTo('/user/edit/'+user.id)">แก้ไขข้อมูล</button>
          <button v-on:click="deleteUser(user)">ลบข้อมูล</button>
        </div>
        <hr>
      </div>
    </div>
    <div><button v-on:click="logout">Logout</button></div>
  </div>
</template>

<script>
import UsersService from "@/services/UsersService";
export default {
  data() {
    return {
      users: []
    };
  },
  async created() {
    try {
      this.users = (await UsersService.index()).data;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      this.$router.push({
        name: 'login'
      });
    },
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteUser(user) {
      let result = confirm("คุณต้องการลบข้อมูลใช่หรือไม่?");
      if (result) {
        try {
          await UsersService.delete(user);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      try {
        this.users = (await UsersService.index()).data;
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style scoped>
button {
  background-color: #007bff; /* สีพื้นหลังปุ่ม */
  border: none; /* ไม่แสดงขอบ */
  color: white; /* สีตัวอักษร */
  padding: 10px 20px; /* ระยะห่างขอบใน */
  text-align: center; /* จัดให้อยู่กึ่งกลาง */
  text-decoration: none; /* ไม่มีเส้นใต้ */
  display: inline-block; /* จัดให้เป็นบล็อก */
  font-size: 16px; /* ขนาดตัวอักษร */
  margin: 4px 2px; /* ระยะห่างระหว่างปุ่ม */
  cursor: pointer; /* เปลี่ยนเป็น pointer เมื่อ hover */
  border-radius: 5px; /* ขอบโค้ง */
  transition: background-color 0.3s ease; /* เพิ่มการเปลี่ยนสีพื้นหลังอย่างนุ่มนวล */
}

button:hover {
  background-color: #0056b3; /* สีพื้นหลังเมื่อ hover */
}

button:active {
  background-color: #003d80; /* สีพื้นหลังเมื่อกดปุ่ม */
}
.background {
  background-image: url('../../assets/BG2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  min-height: 100vh; 
  height: 100%; 
  width: 100%;
}

h1 {
  text-align: center;
  margin-top: 20px;
  color: #333; /* สีของข้อความ */
}

.user-info-container {
  background-color: rgba(212, 0, 0, 0.8); /* พื้นหลังขาวโปร่งใส */
  padding: 20px;
  border-radius: 10px;
  width: 50%; /* ปรับความกว้างของพื้นที่สีขาว */
  margin: 0 auto; /* จัดให้อยู่กึ่งกลาง */
  margin-top: 20px; /* เพิ่มระยะห่างจากด้านบน */
}

.user-card {
  background-color: rgba(255, 255, 255, 0.9); /* พื้นหลังโปร่งใส */
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  color: #333;
}

</style>
