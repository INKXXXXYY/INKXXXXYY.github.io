<template>
  <div>
    <ul>
      <li v-for="diary in diaries" :key="diary.id">
        <router-link :to="`/diary/${diary.id}`">{{ diary.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DiaryList',
  data() {
    return {
      diaries: [
        { id: 1, title: 'Diary 1' },
        { id: 2, title: 'Diary 2' },
        { id: 3, title: 'Diary 3' },
      ],
    };
  },
};
</script>
