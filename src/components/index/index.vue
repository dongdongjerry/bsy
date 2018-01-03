<template>
		<div class="index-wp">
			<vTitle></vTitle>
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
	  }
  }
</script>

<style>
	.content{
		padding: .9rem 0 1rem;
	}
</style>
