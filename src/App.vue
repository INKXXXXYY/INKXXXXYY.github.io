<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
 -->
<!-- 以上是原始内容 --> 
<!-- 日历 -->
<!-- <template>
  <div class="app">
    <h1>Web端日历样式记事本</h1>
    <calendar />
  </div>
</template>

<script>
import Calendar from './components/Calendar.vue';

export default {
  name: 'App',
  components: {
    Calendar,
  },
};
</script>

<style>
.app {
  text-align: center;
}
</style> -->

 
 <!-- 日历2 -->
<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.app {
  /* text-align: center; */
}
</style>