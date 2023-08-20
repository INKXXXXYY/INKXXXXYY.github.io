<template>
  <div>
    <h2>{{ diary.title }}</h2>
    <p>{{ diary.content }}</p>
  </div>
</template>

<script>
export default {
  name: 'DiaryDetail',
  data() {
    return {
      diary: null,
    };
  },
  created() {
    // 根据路由参数获取日记本详情数据
    const diaryId = this.$route.params.id;
    // 在这里从数据库或其他地方获取日记本详情数据，并将其赋值给diary变量
    this.diary = {
      id: diaryId,
      title: `Diary ${diaryId}`,
      content: 'This is the content of the diary.',
    };
  },
};
</script>
