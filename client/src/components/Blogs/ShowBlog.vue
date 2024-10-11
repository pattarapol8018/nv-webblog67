<template>
  <div class="background">
    <div class="header-background">
      <h1><center>Show Blog</center></h1>
      <div class="blog-container">
        <div class="blog-info">
          <p>id: {{ blog.id }}</p>
          <p>Brand: {{ blog.Brand }}</p>
          <p>CC: {{ blog.cc }}</p>
          <p>Model name: {{ blog.modelName }}</p>
          <p>ราคา: {{ blog.price }}</p>
          <p>ความเร็วสูงสุด KM/H: {{ blog.speed }}</p>
        </div>
        <div class="blog-image">
          <div v-html="blog.content"></div>
        </div>
      </div>
      <div class="button-container">
        <button v-on:click="navigateTo('/blog/edit/'+ blog.id)">Edit</button>
        <button v-on:click="deleteBlog(blog)">Delete</button>
        <button v-on:click="navigateTo('/blogs')">กลับ</button>
      </div>
    </div>
  </div>
</template>

<script>
import BlogsService from "@/services/BlogsService";
export default {
  data() {
    return {
      blog: null,
    };
  },
  async created() {
    try {
      let blogId = this.$route.params.blogId;
      this.blog = (await BlogsService.show(blogId)).data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteBlog(blog) {
      let result = confirm("Want to delete?");
      if (result) {
        try {
          await BlogsService.delete(blog);
          this.$router.push('/blogs');
        } catch (err) {
          console.log(err);
        }
      }
    },
  },
};
</script>

<style scoped>
.background {
  background-image: url('../../assets/BG5.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  height: 100%; 
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
}

.blog-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1); /* เพิ่มเงา */
}

.blog-info {
  flex: 1;
  padding-right: 20px;
  font-size: 18px; /* ปรับขนาดข้อความให้ใหญ่ขึ้น */
}

.blog-image {
  flex: 0 0 250px;
  display: flex;
  justify-content: center;
}

.blog-image img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-top: 20px;
}

button {
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #008CBA;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px; /* ปรับขนาดปุ่ม */
}

button:hover {
  background-color: #005f6b;
}

h1 {
  text-align: center;
  color: #4A90E2;
  font-size: 36px; /* ปรับขนาดหัวข้อ */
  margin-bottom: 20px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2); /* เพิ่มเงาที่ข้อความ */
}
</style>
