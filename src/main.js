// import './assets/main.css'

// import $ from 'jquery';
// // import defaultsDeep from 'lodash.defaultsdeep'

// import { createApp } from 'vue'
// import App from './App.vue'
// // import VueQuickCalendar from 'vue-full-calendar'
// // import VueRouter from 'vue-router'
// import { createRouter, createWebHistory } from 'vue-router';

// import router from './router';

// createApp(App).use(router).mount('#app');
// import Home from './components/HelloWorld.vue';


// Vue.use(router)
// createApp(App).mount('#app')
// const routes = [
//   { path: '/', component: Home }
// ]

// const router = new VueRouter({
//   routes
// })

// new Vue({
//   router
// }).$mount('#app')
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import Diary from './views/Diary.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/diary', component: Diary },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
