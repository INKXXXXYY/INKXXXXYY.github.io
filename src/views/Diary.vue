<template>
  <div class="centered">
    <div class="diary">
      <h1>日记记事本</h1>
      <calendar />
    </div>
  </div>
</template>

<script>
import Calendar from '../components/Calendar.vue';

export default {
  name: 'Diary',
  components: {
    Calendar,
  },
};
</script>

<style scoped>
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.diary{
	text-align: center;
}
</style>
