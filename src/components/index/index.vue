<template>
		<div class="index-wp">
			<vTitle :title="title"></vTitle>
			<router-view class="content"></router-view>
    	<vFooter></vFooter>
		</div>
</template>

<script>
	import vFooter from '#/common/vFooter'
	import vTitle from '#/common/vTitle'

  export default {
    name: 'index',
	  components: {
	  	vFooter,
	  	vTitle
	  },
	  data () {
	  	return {
	  		title: '首页1'
	  	}
	  }
  }
</script>

<style>
	.content{
		padding: .9rem 0 1rem;
	}
</style>
