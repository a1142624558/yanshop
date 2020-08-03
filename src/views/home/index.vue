<template>
  <div class="box">
    <div id="banner">
      <!-- 轮播图插件 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in banner " :key="index">
          <img :src="item.picUrl" />
        </van-swipe-item>
      </van-swipe>
      <div class="icos">
        <div class="icon-items">
          <van-icon name="like" size="35" />
          <p>签到</p>
        </div>
        <div class="icon-items">
          <van-icon name="invition" size="35" />
          <p>礼券</p>
        </div>
        <div class="icon-items">
          <van-icon name="coupon" size="35" />
          <p>砍价</p>
        </div>
        <div class="icon-items">
          <van-icon name="cluster" size="35" />
          <p>专栏</p>
        </div>
      </div>
    </div>

    <!-- 砍价区域 -->
    <div id="cut">
      <div class="cut-head">
        <span>全民砍价</span>
        <van-icon name="arrow" />
      </div>
      <!-- 组件通信父传子 -->
      <Cut :cutList="cutList"/>
      
    </div>
    <!-- 精选专题区域 -->
    <div class="article">
      <div class="article-head">
        <span>精选专题</span>
        <van-icon name="arrow" />
      </div>
      <div class="article-list">
        <ul>
          <li v-for="(item,index) in articleist" :key="index">
            <img :src="item.pic" />
            <p v-html="item.title"></p>
            <p v-html="item.descript"></p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 人气推荐 -->
    <div class="recommand">
      <div class="recommand-head">
        <span>人气推荐</span>
        <van-icon name="arrow" />
      </div>
      <Recomman :goodsList="goodsList"/>
    </div>
  </div>
</template>

<script>
import Cut from "@/components/home/cut.vue";//组件拆分 导入砍价的组件
import Recomman from "@/components/home/recommand.vue";
export default {
  name: "",
  mounted() {
    this.geiBanners();
    this.getCutList(); //调用砍价信息
    this.getArticleList();
    this.getGoodsList();
  },
  data() {
    return {
      banner: [],
      cutList: [],
      articleist: [],
      goodsList: [],
    };
  },
  components: {
    Cut,
    Recomman,
  },
  methods: {
    // 获取banner图的信息
    geiBanners() {
      this.$axios({
        url: "/banner/list",
      }).then((res) => {
        // console.log(res);
        this.banner = res.data;
      });
    },
    //获取砍价信息
    getCutList() {
      // 获取url地址
      this.$axios({
        url: "https://api.it120.cc/small4/shop/goods/kanjia/list",
      }).then((res) => {
        // 获取对象中所有的key值;
        let ids = Object.keys(res.data.goodsMap).splice(-3);
        ids.forEach((item) => {
        // console.log(res);
          this.cutList.push(res.data.goodsMap[item]);
        });
      });
    },
    //精选专题
    getArticleList() {
      this.$axios({
        url: "https://api.it120.cc/small4/cms/news/list",
      }).then((res) => {
        // console.log(res);
        this.articleist = res.data;
      });
    },
    // 人气推荐
    getGoodsList(){
      this.$axios({
        url:"https://api.it120.cc/small4/shop/goods/list"
      }).then(res=>{
        console.log(res.data);
        let data = res.data.filter(item=>{
          return item.name.indexOf("测试")== -1;
        }) 
        this.goodsList = data.slice(-6);
      })
    }
  },
};
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  background: #fff;
  padding-bottom: 1rem;
  // 轮播
  #banner {
    width: 100%;
    position: relative;
    img {
      width: 100%;
    }
    .icos {
      width: 100%;
      height: 2rem;
      background: #f2f2f2;
      position: absolute;
      display: flex;
      bottom: 0;
      justify-content: space-around;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
      align-items: center;

      p {
        text-align: center;
        margin-top: 0.4rem;
        font-size: 0.4rem;
      }
    }
  }
  // 砍价
  #cut {
    width: 100%;
    margin-top: 0.3rem;
    background: #fff;
    .cut-head {
      line-height: 1rem;
      text-align: center;
      font-size: 0.35rem;
      background: #f3f3f3;
      border: 1px solid #ddd;
    }
    
  }
  // 精选专题
  .article {
    width: 100%;
    background: #fff;
    .article-head {
      line-height: 1rem;
      text-align: center;
      font-size: 0.35rem;
      background: #f3f3f3;
      border: 1px solid #ddd;
    }
    .article-list {
      width: 100%;
      height: 4rem;
      overflow: auto;
      padding: 0.1rem;
      box-sizing: border-box;
      ul {
        width: 26rem;
        display: flex;

        li {
          width: 5rem;
          height: 2.8rem;
          margin-right: 0.2rem;
          img {
            width: 100%;
            height: 3rem;
          }
          p {
            width: 100%;
            line-height: 0.4rem;
          }
          p:nth-of-type(1) {
            font-size: 0.3rem;

            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
          }
          p:nth-of-type(2) {
            font-size: 0.2rem;
            color: #ff0000;

            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
          }
        }
      }
    }
  }
  .recommand {
    width: 100%;
    background: #fff;
    .recommand-head {
      line-height: 1rem;
      text-align: center;
      font-size: 0.35rem;
      background: #f3f3f3;
      border: 1px solid #ddd;
    }
    
  }
}
</style>
