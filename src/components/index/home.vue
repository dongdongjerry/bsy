<template>
  <div>
    <vTitle title="首页"></vTitle>
    <div class="home">
      <vArticle :articleList="articleLists"></vArticle>
    </div>
  </div>
</template>

<script>
  import vTitle from '#/common/vTitle'
  import vArticle from '#/common/vArticle'
  export default {
    components: {
      vTitle,
      vArticle
    },
    data: () => {
      return {
        articleLists: [
          {
            title: '文章1',
            imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515044294587&di=b31a6ee4e2aa1b37b4ea331133a9b0ed&imgtype=0&src=http%3A%2F%2Fimg.bbs.wisenjoy.com%2Fforum%2F201501%2F30%2F160555lrghalttstfsdfdc.jpg',
            author: '大德',
            link: '..',
            time: '2018-1-1'
          }
        ]
      }
    }
  }
</script>

<style type="text/scss" lang="scss">

</style>
