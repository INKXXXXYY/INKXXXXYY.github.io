import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import blog from '@/components/blog'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/home',
			name: 'home',
			component: home
		},
		{
			path: '/blog',
			name: 'blog',
			component: blog
		},
		// 容错机制
		{
			path: '*',
			name: 'error',
			redirect: '/home',
			component: home
		},
		{
			path: '/',
			name: 'home-default',
			redirect: '/home',
			component: home
		},
		// 携带参数
		{
			path: '/blog/display/:id',
			name: '/blog/display',
			component: display
		}
	]
})