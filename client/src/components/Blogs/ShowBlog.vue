<template>
    <div>
      <h1>Show Blog</h1>
      <div class="blog-container">
        <div class="blog-info">
          <p>id: {{ blog.id }}</p>
          <p>Brand: {{ blog.Brand }}</p>
          <p>CC: {{ blog.cc }}</p>
          <p>Model name: {{ blog.modelName }}</p>
        </div>
        <div class="blog-image">
          <!-- ใช้ content ในการแสดงรูปภาพ -->
          <div v-html="blog.content"></div>
        </div>
      </div>
      <p>
        <button v-on:click="navigateTo('/blog/edit/'+ blog.id)">Edit</button>
        <button v-on:click="deleteBlog(blog)">Delete</button>
        <button v-on:click="navigateTo('/blogs')">กลับ</button>
      </p>
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
      navigateTo(route) {
    this.$router.push(route);
  },
  async deleteBlog(blog) {
    let result = confirm("Want to delete?");
    if (result) {
      try {
        await BlogsService.delete(blog);
        this.$router.push('/blogs'); // Navigate back to All motorcycle page
      } catch (err) {
        console.log(err);
      }
    }
  }
    },
  };
  </script>
  
  <style scoped>
.blog-container {
  display: flex;
  justify-content: space-between;  /* ให้ข้อมูลและรูปภาพมีระยะห่าง */
  align-items: flex-start;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}

.blog-info {
  flex: 1;
  padding-right: 20px;
}

.blog-image {
  flex: 0 0 250px; /* กำหนดขนาดของรูปภาพ */
  display: flex;
  justify-content: center;
}

.blog-image img {
  max-width: 100%;
  height: auto;
  border-radius: 5px; /* ทำให้ภาพมีมุมโค้งเล็กน้อย */
}

.button-container {
  display: flex;
  justify-content: flex-start;  /* จัดปุ่มให้ชิดซ้าย */
  padding-top: 20px;
}

button {
  margin-right: 10px;
  padding: 10px 15px;
  background-color: #008CBA; /* สีปุ่ม */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #005f6b; /* สีปุ่มเมื่อเอาเมาส์ไปชี้ */
}
</style>

  