<template>
  <div>
    <h1>创建新博客</h1>
    <form @submit.prevent="createBlog">
      <div>
        <label for="title">标题:</label>
        <input type="text" id="title" v-model="title" required />
      </div>
      <div>
        <label for="content">内容:</label>
        <textarea id="content" v-model="content" required></textarea>
      </div>
      <button type="submit">创建</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '', // 博客标题
      content: '' // 博客内容
    };
  },
  methods: {
    createBlog() {
      // 发送创建博客的请求的逻辑
      // 可以使用 axios 或者其他 HTTP 请求库发送 POST 请求
      // 将 this.title 和 this.content 作为请求体发送到后端
      // 处理成功后，可以重置表单字段
    }
  }
};
</script>
