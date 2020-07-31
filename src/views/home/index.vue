<template>
  <div class="box">
    <div id="banner">
      <!-- 轮播图插件 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in banner " :key="index" ><img :src="item.picUrl"></van-swipe-item>
      </van-swipe>
      <div class="icos">
        <div class="icon-items" >
          <van-icon name="like" size="35" />
          <p>签到</p>
        </div>
        <div class="icon-items">
          <van-icon name="invition" size="35" />
          <p>礼券</p>
        </div>
        <div class="icon-items" >
          <van-icon name="coupon" size="35"/>
          <p>砍价</p>
        </div>
        <div class="icon-items" >
          <van-icon name="cluster" size="35"/>
          <p>专栏</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  mounted(){
    this.geiBanners();
  },
  data() {
    return {
      banner:[],
    };
  },
  components: {},
  methods:{
    // 获取banner图的信息
    geiBanners(){
      this.$axios({
        url:"/banner/list"
      }).then(res=>{
        console.log(res)
        this.banner = res.data;
})
    }
  },
};
</script>

<style scoped lang="scss">
.box{
  width: 100%;
  background: #fff;
  #banner{
    width: 100%;
    position: relative;
    img{
      width: 100%;
    }
    .icos{
      width: 100%;
      height: 2rem;
      background: #f2f2f2;
      position: absolute;
      display: flex;
      bottom: 0;
      justify-content: space-around;
      border-top-left-radius: .5rem;
      border-top-right-radius: .5rem;
      align-items: center;
      
      p{
        text-align: center;
        margin-top: .4rem;
        font-size: .4rem;
      }
    }
  }
}
</style>
