<template>
	<div class="vFooter">
		<router-link to="/index">首页</router-link>
    <router-link to="/strategy">攻略</router-link>
    <router-link to="/compose">图鉴</router-link>
    <router-link to="/active">活动</router-link>
	</div>
</template>

<script>
	export default {
	  name: 'vFooter'
	}
</script>

<style lang="scss" scoped>
	$src: '../../common/img/';
	.vFooter{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 1.22rem;
		background: #4f3f2c;
		display: flex;
		text-align: center;
		a{
			flex: 1;
			padding: .2rem 0;
			font-size: .24rem;
			color: #fff;
			&:before{
				content: '';
				display: block;
				width: .5rem;
				height: .55rem;
				margin: 0 auto;
			}
			&:nth-child(1):before{
				background: url( $src + 'ico-vFooter-home.png') no-repeat;
				background-size: 100% 100%;
			}
			&:nth-child(2):before{
				background: url( $src + 'ico-vFooter-strategy.png') no-repeat;
				background-size: 100% 100%;
			}
			&:nth-child(3):before{
				background: url( $src + 'ico-vFooter-compose.png') no-repeat;
				background-size: 100% 100%;
			}
			&:nth-child(4):before{
				background: url( $src + 'ico-vFooter-active.png') no-repeat;
				background-size: 100% 100%;
			}
			&.router-link-active{
				background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#4c3d29), to(#3d2e1b));
			}
		}
	}
</style>