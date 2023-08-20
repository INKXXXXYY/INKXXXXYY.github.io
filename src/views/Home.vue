<template>
  <div class="home">
    <!-- <h1>首页</h1> -->
	<div id="box">
		<!-- 个人资料卡片 -->
		<div class="meBox">
			<!-- 头像 -->
			<div class="headPhoto"></div>
			<!-- 介绍 -->
			<div class="meBox-title">
				<p>I'm Choiiie</p>
				<div class="fg"></div>
			</div>
			<div class="meBox-text">
				<p>
					Hello<img src="../components/img/hand_shack.png" alt="冰激凌"
						style="width: 25px; vertical-align: middle" /><br>
					我是黄巧仪 这是我的个人网站
				</p>
				<p>很高兴你能来到这里</p>
				<br>
				<p>计算机 AIGC 街舞</p>
				<p>摄影 旅游 睡觉</p>
				<p>啥有意思都能玩起来</p>
			</div>
			<!-- 两个按钮 -->
			<div class="meBox-Button">
				<a href="#">简历</a>
				<a href="#">博文</a>
				<!-- <div id="app"> -->
				<!-- <a href="">日记本</a> -->
				<!-- </div> -->
				<a @click="goToDiary">日记本</a>
			</div>
		</div>
	
		<!-- 伪终端介绍 -->
		<div id="cmdBox">
			<!-- 第一个终端 -->
			<div class="cmd">
				<!-- 三个按钮 -->
				<div class="click">
					<div class="red"></div>
					<div class="yellow"></div>
					<div class="green"></div>
				</div>
				<!-- 顶部标题 -->
				<div class="title">
					<span>hqy0309 - bash</span>
				</div>
				<!-- 终端内文字 -->
				<div class="cmdText">
					<span style="color: rgb(0, 190, 0)">root@hqy0309</span>
					<span style="color: blue">~</span>
					<span style="color: rgb(39, 39, 39)">./tianqi.sh</span>
					<br />
					<iframe scrolling="no" src="https://tianqiapi.com/api.php?style=tb&skin=pitaya" frameborder="0"
						width="350" height="24" allowtransparency="true"></iframe>
					<br />
					<span style="color: rgb(0, 190, 0)">root@hqy0309</span>
					<span style="color: blue">~</span>
					<span style="color: rgb(39, 39, 39)">cat /me.txt</span>
					<p>爱好计算机/人工智能，热衷于学习感兴趣的任何技术</p>
					<p>略懂游戏开发；爱好折腾去解决一切问题</p>
					<p>享受每一个项目从idea诞生到落实的全过程，无名的幸福与翻涌的欢喜</p>
					<p>正在迷茫的开启了人生新篇章</p>
					<p>还不确定前方的路想要往那个方向走，路上的坎也一定特别多</p>
					<p>但</p>
					<p>在我眼里</p>
					<p>没有什么问题是不能解决的，如果有那就多尝试几次、上百次</p>
					<p>所有的挫折终会有一天帮我幻化成蝶，挫败永远抵不过最终成功的喜悦</p>
					<span style="color: rgb(0, 190, 0)">root@hqy0309</span>
					<span style="color: blue">~</span>
					<span style="color: rgb(39, 39, 39)">sudo rm -rf /过去的自己/*</span>
				</div>
			</div>
			<!-- 第二个终端 -->
			<div class="cmd cmd2">
				<!-- 三个按钮 -->
				<div class="click">
					<div class="red"></div>
					<div class="yellow"></div>
					<div class="green"></div>
				</div>
				<!-- 顶部标题 -->
				<div class="title">
					<span>hqy0309 - bash</span>
				</div>
				<!-- 终端内文字 -->
				<div class="cmdText">
					<span style="color: rgb(0, 190, 0)">root@hqy0309</span>
					<span style="color: blue">~</span>
					<span style="color: rgb(39, 39, 39)">./links.sh</span>
					<p>点击空白处可以进入我的网站</p>
					<p>当然~你也可以在以下地方找到我</p>
					<ul class="ul">
						<li> <a href="https://github.com/INKXXXXYY">GitHub（整理中）</a> </li>
						<li> <a href="https://blog.csdn.net/weixin_52448178">CSDN博客(写的比较多，也在整理中)</a> </li>
					</ul>
					<p>联系方式</p>
					<ul class="ul">
						<li>
							<p>微信：choiiie</p>
						</li>
						<li>
							<p>QQ：1594618760</p>
						</li>
						<li>
							<p>邮箱：1594618760@qq.com</p>
						</li>
						<li>
							<p>您可以按喜欢的方式联系我，我永远对你的联系充满期待</p>
						</li>
					</ul>
					<span style="color: rgb(0, 190, 0)">root@hqy0309</span>
					<span style="color: blue">~</span>
				</div>
			</div>
		</div>
	</div>
	<!-- 页脚 -->
	<div id="footer">
		<p>© 2023 hqy0309</p>
	</div>
	
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToDiary() {
      this.$router.push('/diary');
    },
  },
};
</script>

<style scoped>
.home {
  /* margin-top: 100px; */
}
</style>
