<template>
	<div class="vTitle">
		<router-link to="/index" class="btn-return"></router-link>
		<h2 class="title">首页</h2>
		<router-link to="/search" class="btn-seach"></router-link>
	</div>
</template>

<script>
	export default {
	  name: 'vTitle',
	  data () {
	  	return {

	  	}
	  },
	  props:[
			"titleStyle"
		]
	}
</script>

<style lang="scss" scoped>
	$height: .9rem;
	$src: '../../common/img/';
	.vTitle{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: $height;
		line-height: $height;
		background: #4f3f2c;
		color: #fff;
		display: flex;
		text-align: center;
		h2{
			flex: 4;
			font-size: .3rem;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		a{
			flex: 1;
			&:after{
				content: '';
				display: inline-block;
				width: .33rem;
				height: .31rem;
				vertical-align: middle;
			}
			&.btn-seach:after{
				background: url( $src + 'ico-title-seach.png') no-repeat;
				background-size:auto .3rem;
			}
			&.btn-return:after{
				background: url( $src + 'ico-title-return.png') no-repeat;
				background-size:auto .3rem;
			}
		}
	}
</style>