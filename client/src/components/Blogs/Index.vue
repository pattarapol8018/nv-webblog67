<template>
    <div>
        <p><button v-on:click="logout" class="btn btn-primary">Logout</button></p>
      <h2>All motorcycle</h2>
      <h4>จำนวน motorcycle : {{blogs.length}}</h4>
  
      <div v-for="blog in blogs" v-bind:key="blog.id" class="blog-container">
        <div class="blog-info">
          <p>Name: {{ blog.Brand }}</p>
          <p>Detail: {{ blog.cc }}</p>
          <p>Model name: {{ blog.modelName }}</p>
          <p>Price: {{ blog.price }}</p>
          <p>
            <button v-on:click="navigateTo('/blog/'+ blog.id)" class="btn btn-info">ดูข้อมูล</button>
          </p>
        </div>
        <div class="blog-image">
          <!-- แสดงรูปภาพตรงกลางตามขนาดที่ content กำหนด -->
          <div v-html="blog.content"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import BlogsService from '@/services/BlogsService'
  
  export default {
    data() {
      return {
        BASE_URL: "http://localhost:8081/assets/uploads/",
        blogs: []
      };
    },
    async created() {
      this.blogs = (await BlogsService.index()).data;
    },
    methods: {
      logout() {
        this.$store.dispatch('setToken', null);
        this.$store.dispatch('setBlog', null);
        this.$router.push({
          name: 'login'
        });
      },
      navigateTo(route) {
        this.$router.push(route);
      }
    }
  };
  </script>
  
  <style scoped>
  .blog-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 10px;
  }
  
  .blog-info {
    flex: 2;
    padding-right: 20px;
  }
  
  .blog-image {
    flex: 1;
    text-align: center;
  }
  
  .blog-image img {
    max-width: 200px;
    height: auto;
    border-radius: 10px;
  }
  
  .btn {
    margin-top: 10px;
  }
  
  h2, h4 {
    text-align: center;
  }
  
  </style>
  