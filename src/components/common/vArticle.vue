<template>
  <div class="article-list">
    <div class="item" v-for="(item, index) in articleList">
    	<a :href="item.link">
    		<div class="img-box">
    			<img :src="item.imgSrc" :alt="item.title">
    		</div>
    		<h3 class="title">{{item.title}}</h3>
    		<div class="info">
    			<span class="author">{{item.author}}</span>
    			<span class="time">{{item.time}}</span>
    		</div>
    	</a>
    </div>
  </div>
</template>

<script>
export default {
  props:[
	'articleList'
  ],
  data () {
	return {

	}
  }
}
</script>

<style type="text/scss" lang="scss">
    .article-list{
        padding: 0 .2rem;
        .item{
            position: relative;
            padding: .2rem 0 .2rem 2.6rem;
            border-top: 1px #cdc1b2 solid;
            border-bottom: 1px #cdc1b2 solid;
            min-height: 1.82rem;
            .img-box{
                position:absolute;
                left: 0;
                top: .2rem;
                width: 2.4rem;
                height: 1.4rem;
                img{
                    border-radius: 5px;
                }
            }
            .title{
                font-size: .34rem;
                color: #3c180c;
            }
            .info{
                margin-top: .25rem;
                font-size: .28rem;
            }
        }
    }
</style>
