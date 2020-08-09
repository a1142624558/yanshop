<template>
  <div class="lativ">
    <!-- 搜索框 -->
    <van-search placeholder="搜索商品" shape="round" />
    <!-- 顶部导航 -->
    <van-tabs v-model="active" color="#50500" line-height="1px" @change="changeItem">
      <van-tab :title="item.title" :name="item._id" v-for="(item,index) in cate" :key="index"></van-tab>
    </van-tabs>
    <!-- 价格排序 -->
    <div class="sorp">
      <p>综合</p>
      <p>销量</p>
      <p>新品</p>
      <p @click="changeSort">
        价格
        <van-icon name="arrow-up" v-show="sort==1" />
        <van-icon name="arrow-down " v-show="sort==2" />
      </p>
    </div>

    <!-- 商品列表区域 -->
    <div class="main">
      <div class="item" v-for="(item,index) in searchGoods" :key="index">
        <div class="img">
          <img :src="item.pic" />
        </div>
        <p v-html="item.title"></p>
        <div>
          <p class="price">
            ￥{{item.price}}
            <s>￥{{item.old_price}}</s>
          </p>
          <van-icon name="cart-o" class="icon" size="25" />
        </div>
      </div>
    </div>
    <div class="top" v-show="topShow == true" @click="goTop">
      <van-icon name="arrow-up" size="20" />
    </div>
  </div>
</template>

<script >
export default {
  name: "",
  mounted() {
    this.getCategory();
    this.getList();
  },
  data() {
    return {
      active: "",
      cate: [],
      cid: 0,
      sort: 0, //0
      list: [],
      topShow: false,
    };
  },
  components: {},
  computed: {
    searchGoods() {
      let data = this.list;
      data.sort((a, b) => {
        if (this.sort == 1) {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
      if (this.cid == 0) {
        return data;
      }
      data = data.filter((item) => {
        return item.cid == this.cid;
      });
      return data;
    },
  },
  methods: {
    //   获取商品打分类
    getCategory() {
      this.$axios({
        url: "/static/fenlei.json",
      }).then((res) => {
        console.log(res);
        this.cate = res.result;
      });
    },

    //   切换tab栏的信息
    changeItem(name, title) {
      console.log(name, title);
      this.cid = name;
    },
    //   点击切换升序降序
    changeSort() {
      if (this.sort == 0 || this.sort == 2) {
        this.sort = 1;
      } else {
        this.sort = 2;
      }
    },
    // 数据列表信息
    getList() {
      this.$axios({
        url: "/static/list.json",
      }).then((res) => {
        console.log(res);
        this.list = res.result;
      });
    },
    // 返回顶部
    goTop() {
      let html = document.documentElement || document.body;
      html.scrollTop = 0;
    },
  },
};
</script>

<style lang="scss">
.lativ {
  width: 100%;
  background: #f8f8f8;
  .top {
    position: fixed;
    padding: 0.2rem;
    background: #000;
    border-radius: 50%;
    bottom: 0.88rem;
    right: 0.15rem;
  }
  .sorp {
    line-height: 0.88rem;
    background: #fff;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #000;
    p {
      width: 15%;
      text-align: center;
    }
    p:nth-of-type(4) {
      color: red;
    }
  }
  .main {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 46%;
      margin: 2%;
      background: #fff;
      .img {
        img {
          width: 100%;
          height: 3.5rem;
          border-radius: 0.2rem;
        }
      }
      p {
        line-height: 0.6rem;
        width: 100%;
        font-size: 0.32rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
        s {
          text-decoration: line-through;
          color: #f0f0f0;
          font-size: 0.3rem;
          margin-left: 0.1rem;
        }
      }
      div:nth-of-type(2) {
        width: 100%;
        display: flex;
        p {
          color: red;
        }
        .icon {
          width: 1rem;
        }
      }
    }
  }
}
</style>
