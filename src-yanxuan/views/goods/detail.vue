<template>
  <div class="box">
    <!-- 商品轮播图区域 -->
    <div id="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in banners" :key="index">
          <img :src="item.pic" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 商品简介 -->
    <div id="good-info">
      <p v-html="goodsInfo.name"></p>
      <p v-html="goodsInfo.characteristic"></p>
      <div>
        <p>低价: ￥{{goodsInfo.minPrice}}</p>
        <p>原价: ￥{{goodsInfo.originalPrice}}</p>
        <p>库存: {{goodsInfo.stores}}件</p>
      </div>
    </div>
    <!-- 商品介绍 -->
    <div id="good-intro">
      <van-tabs>
        <van-tab title="商品内容">
          <p v-html="content"></p>
        </van-tab>
        <van-tab title="商品评价">商品评价</van-tab>
      </van-tabs>
    </div>
    <!-- 底部商品的提交栏 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        @click="$router.push('/cart')"
        :badge="this.$store.getters.totalNums"
      />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button type="danger" text="立即购买" />
      <van-goods-action-button type="warning" text="加入购物车" @click="skuShow=!skuShow" />
    </van-goods-action>

    <van-sku v-model="skuShow" :sku="sku" :goods="goods" @add-cart="addCart" />
    <!-- 返回按钮 -->
    <div id="back" @click="$router.go(-1)">
      <van-icon name="arrow-left" size="25"></van-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  mounted() {
    //  接收商品ID
    this.gid = this.$route.params.id;
    // 获取商品的详情信息
    this.getGoodsInfo();
  },
  data() {
    return {
      gid: 0,
      banners: [],
      goodsInfo: [],
      content: "",
      //   sku的基本信息
      skuShow: false,
      sku: {
        tree: [
          {
            k: "颜色",
            k_s: "c1",
            v: [
              { id: 1, name: "红色" },
              { id: 2, name: "白色" },
              { id: 3, name: "蓝色" },
            ],
          },
          {
            k: "尺码",
            k_s: "s1",
            v: [
              { id: 8, name: "L" },
              { id: 9, name: "XL" },
            ],
          },
        ],
        list: [
          {
            id: 1,
            c1: 1,
            s1: 8,
            price: 100,
            stock_num: 100,
          },
          {
            id: 1,
            c1: 1,
            s1: 9,
            price: 100,
            stock_num: 100,
          },
          {
            id: 1,
            c1: 2,
            s1: 8,
            price: 100,
            stock_num: 100,
          },
          {
            id: 1,
            c1: 2,
            s1: 9,
            price: 100,
            stock_num: 100,
          },
          {
            id: 1,
            c1: 3,
            s1: 8,
            price: 100,
            stock_num: 100,
          },
          {
            id: 1,
            c1: 3,
            s1: 9,
            price: 100,
            stock_num: 100,
          },
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
      },
      goods: {
        picture: "",
      },
    };
  },
  components: {},
  methods: {
    // 获取商品的详情信息
    getGoodsInfo() {
      this.$axios({
        url: "/shop/goods/detail",
        params: {
          id: this.gid,
        },
      }).then((res) => {
        console.log(res);
        this.banners = res.data.pics; //商品详情页面的轮播图区域
        this.goodsInfo = res.data.basicInfo; //商品详情
        this.content = res.data.content; //商品详情
        this.goods.picture = res.data.pics[0].pic;
        this.sku.price = res.data.basicInfo.originalPrice;
        this.sku.stock_num = res.data.basicInfo.stores;
      });
    },
    // 加入购物车
    addCart() {
      // 判断用户是否登录

      let data = localStorage.getItem("09C");

      if (data == null) {
        this.$toast.fail("请先登录您的账户");
        this.$router.push("/login");
        return false;
      }
      // 加入购物车的操作
      let cartList = this.$store.state.cartList;
      let index = cartList.findIndex((item) => {
        return item.id == this.gid;
      });
      if (index > -1) {
        // 购物车中存在当前商品
        cartList.map((item) => {
          //判断添加的商品当前商品是否一致
          if (item.id == this.gid) {
            item.nums++;
          }
        });
      } else {
        // 购物车中不存在当前商品
        // 实例化购物车的对象信息
        let object = new Object();
        object.id = this.gid;
        object.name = this.goodsInfo.name;
        object.price = this.goodsInfo.originalPrice;
        object.img = this.goods.picture;
        object.nums = 1;
        object.checked = true;
        cartList.push(object);
      }

      this.$store.commit("addCart", cartList); //添加购物车的对象

      this.$toast.success("加入购物车成功");

      this.skuShow = false;
    },
  },
};
</script>

<style  lang="scss">
.box {
  width: 100%;
  background: #f0f0f0;
  #back {
    padding: 0.3rem;
    position: fixed;
    top: 0.5rem;
    left: 0.2rem;
    border-radius: 50%;
    background: #fff;
  }
  #banner {
    width: 100%;
    img {
      width: 100%;
    }
  }
  #good-info {
    width: 100%;
    padding: 0.2rem 0.3rem;
    box-sizing: border-box;
    background: #fff;
    p:nth-of-type(1) {
      line-height: 0.7rem;
      font-size: 0.35rem;
    }
    p:nth-of-type(2) {
      color: #808;
      font-size: 0.3rem;
      line-height: 0.7rem;
      margin-left: 0.2rem;
    }
    div {
      display: flex;
      width: 100%;
      align-items: center;
      p:nth-of-type(1) {
        color: #808080;
        width: 30%;
        font-size: 0.25rem;
      }
      p:nth-of-type(2) {
        color: #ff0000;
        width: 30%;
        font-size: 0.25rem;
      }
      p:nth-of-type(3) {
        flex: 1;
        text-align: right;
      }
    }
  }
  #good-intro {
    margin-top: 0.2rem;
    background: #fff;
    p {
      width: 100% !important;
      ul {
        width: 100%;
        li {
          height: 0.5rem;
          line-height: 0.27rem;
          padding-left: 0.14rem;
          padding-right: 0.24rem;
        }
      }
    }
    img {
      width: 100% !important;
    }
  }
}
</style>
