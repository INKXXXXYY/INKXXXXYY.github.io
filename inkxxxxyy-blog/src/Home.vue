<template>
	<div>
		<p>Hello</p>
		<p>我是黄巧仪，这是我的个人网站。 </p>
		<p>很高兴你来到这里, 你可以在以下的网站找到我</p>

		<ul>
			<li> <a href="https://github.com/INKXXXXYY">GitHub（整理中）</a> </li>
			<li> <a href="https://blog.csdn.net/weixin_52448178">CSDN博客(写的比较多，也在整理中)</a> </li>
		</ul>
	</div>
	<div>
		<h1>博客列表</h1>
		<ul>
			<li v-for="blog in blogs" :key="blog.id">
				<h2>{{ blog.title }}</h2>
				<p>{{ blog.content }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'HomePage',

		data() {
			return {
				blogs: [] // 博客列表数据
			};
		},
		mounted() {
			// 在组件挂载后，获取博客列表数据
			this.fetchBlogs();
		},
		methods: {
			fetchBlogs() {
				// 从后端获取博客列表数据的逻辑
				// 可以使用 axios 或者其他 HTTP 请求库发送请求
				// 并将返回的数据赋值给 this.blogs
			}
		}
	};
</script>