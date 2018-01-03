<template>
		<div class="index-wp">
			<vTitle :titleStyle="2"></vTitle>
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
	  		titleStyle: 2
	  	}
	  }
  }
</script>

<style>
	.content{
		padding: .9rem 0 1rem;
	}
</style>
