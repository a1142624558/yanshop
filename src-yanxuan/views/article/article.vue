<template>
  <div class="marn">
    <van-nav-bar title="精选专题" left-arrow @click-left="$router.go(-1)"/>
    <div class="list">
      <div class="item" v-for="(item,index) in articleList " :key="index">
        <img :src="item.pic" />
        <p v-html="item.title"></p>
        <p v-html="item.descript"></p>
        <van-button type="primary" plain round class="btn" @click="$router.push('/article/detail/'+item.id)">查看详情</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  mounted() {
    this.getArtcle();
  },
  data() {
    return {
      articleList: [],
    };
  },
  components: {},
  methods: {
    getArtcle() {
      this.$axios({
        url: "cms/news/list",
      }).then((res) => {
        console.log(res);
        this.articleList = res.data;
      });
    },
  },
};
</script>

<style scoped lang="scss">
.marn {
  width: 100%;
  background: #f0f0f0;
  .list {
    width: 100%;
    .item {
      width: 96%;
      position: relative;
      padding: 0.1rem ;
      box-sizing: border-box;
      margin-top: .2rem;
      img {
        width: 100%;
        height: 4.2rem;
      }
      p {
        position: absolute;
        width: 100%;
        text-align: center;
        color: #f0f0f0;
      }
      p:nth-of-type(1) {
        top: 0.3rem;
        line-height: 0.7rem;
        font-size: 0.4rem;
      }
      p:nth-of-type(2) {
        top: 0.8rem;
        text-align: center;
        width: 100%;
        font-size: 0.25rem;
        line-height: 1rem;
        color: #f0f0f0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
      }
      .btn{
          position: absolute;
          bottom: 1rem;
          display: block;
          left: 50%;
        transform: translateX(-50%);
        background: none;
        color: #f0f0f0;
      }
    }
  }
}
</style>
