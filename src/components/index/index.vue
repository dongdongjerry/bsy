<template>
		<div class="index-wp">
			<router-view class="content"></router-view>
    	<vFooter></vFooter>
		</div>
</template>

<script>
	import vFooter from '#/common/vFooter'

export default {
  name: 'index',
  components: {
    vFooter
  },
  data () {
    return {}
  }
}
</script>

<style>
	.content{
		padding: .9rem 0 1rem;
	}
</style>
