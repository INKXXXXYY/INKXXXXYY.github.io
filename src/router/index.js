// import Vue from 'vue'
// import Router from 'vue-router'
// import Calendar from './components/calendar.vue'
// // import home from '@/components/home'
// // import blog from '@/components/blog'

// Vue.use(Router)


// const routes = [
//   {
//     path: '/calendar',
//     name: 'Calendar',
//     component: Calendar
//   }
// ]

// const router = new VueRouter({
//   routes
// })

// export default router
// export default new Router({
	// routes: [{
	// 		path: '/home',
	// 		name: 'home',
	// 		component: home
	// 	},
	// 	{
	// 		path: '/blog',
	// 		name: 'blog',
	// 		component: blog
	// 	},
	// 	// 容错机制
	// 	{
	// 		path: '*',
	// 		name: 'error',
	// 		redirect: '/home',
	// 		component: home
	// 	},
	// 	{
	// 		path: '/',
	// 		name: 'home-default',
	// 		redirect: '/home',
	// 		component: home
	// 	},
	// 	// 携带参数
	// 	{
	// 		path: '/blog/display/:id',
	// 		name: '/blog/display',
	// 		component: display
	// 	}
	// ]
// })
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Diary from '../views/Diary.vue';
import DiaryDetail from '../components/DiaryDetail.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/diary', component: Diary },
  { path: '/diary/:id', component: DiaryDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
