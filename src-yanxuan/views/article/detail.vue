<template>
  <div>
    <van-nav-bar title="文章详情" left-arrow @click-left="$router.go(-1)" />
    <div class="article">
      <p v-html="articleInfo.title"></p>
        <img :src="articleInfo.pic">
      <p v-html="articleInfo.content"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  mounted() {
      this.aid = this.$route.params.id;
      this.getArticleInof();
  },
  data() {
    return {
        aid:0,
        articleInfo:{},
    };
  },
  components: {},
  methods: {
      getArticleInof(){
          this.$axios({
              url:"cms/news/detail",
              params:{
                  id:this.aid
              }
          }).then(res=>{
              console.log(res);
              this.articleInfo = res.data;
          })
      }
  },
};
</script>

<style scoped lang="scss">
.article{
    width: 100%;
    padding: .2rem;
    box-sizing: border-box;
    img{
        width: 100%;
    }
    p:nth-of-type(1){
        line-height: .88rem;
        font-size: 0.25rem;
        text-indent: 0;
    }
    p{
      line-height: .6rem;
      text-indent: 2em;
    }
}
</style>

