<template>
  <div class="box">
    <!-- 头部 -->
    <div class="user-head">
      <div class="head-left">
        <van-uploader v-model="fileList">
          <van-icon name="add-o" size="80" color="#f0f0f0" v-show="fileList.length == 0" />
        </van-uploader>
      </div>
      <div class="head-right">
        <p v-show="isLogin == false" @click="$router.push('/login')">立即登录</p>
        <p>积分：2</p>
        <p v-show="isLogin == true" @click="logout">退出登录</p>
      </div>
    </div>

    <van-notice-bar left-icon="volume-o" text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />

    <!-- 订单区域 -->
    <div class="order">
      <div class="order-head">
        <p>
          <van-icon name="notes-o" size="20" />
        </p>
        <p>我的订单</p>
        <p>
          <van-icon name="arrow" size="20" />
        </p>
      </div>
      <div>
        <van-grid :border="false">
          <van-grid-item icon="paid" text="待付款" />
          <van-grid-item icon="gift-o" text="待发货" />
          <van-grid-item icon="logistics" text="待收货" />
          <van-grid-item icon="comment-o" text="待评价" />
        </van-grid>
      </div>
      <!-- 九宫格 -->
      <div style="margin-top: 0.3rem;">
        <van-grid column-num="3">
          <van-grid-item icon="after-sale" text="我的余额" />
          <van-grid-item icon="gift-o" text="我的砍价" />
          <van-grid-item icon="coupon-o" text="我的礼券" />
        </van-grid>
        <van-grid column-num="3">
          <van-grid-item icon="star-o" text="我的收藏" />
          <van-grid-item icon="location" text="我的地址" />
          <van-grid-item icon="service-o" text="联系客服" />
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  created() {
    let data = localStorage.getItem("09C");
    if (data == null) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }
  },
  data() {
    return {
      isLogin: false,
      fileList: [{ url: "/static/tree.jpg" }],
    };
  },
  components: {},
  methods: {
    logout() {
      localStorage.removeItem("09C");
      this.isLogin = false;
    },
  },
};
</script>

<style  lang="scss">
.box {
  width: 100%;
  background: #f0f0f0;
  .user-head {
    width: 100%;
    box-sizing: border-box;
    background: #c18193;
    padding: 0.2rem;
    display: flex;
    align-items: center;
    .head-right {
      width: 60%;
      p {
        line-height: 0.4rem;
      }
      p:nth-of-type(1) {
        font-size: 0.35rem;
        color: #f0f0f0;
      }
      p:nth-of-type(2) {
        background: #b3a078;
        padding: 0.15rem;
        font-size: 0.25rem;
        color: #f0f0f0;
        width: 1rem;
        height: 0.4rem;
        margin-top: 0.2rem;
      }
    }
    .van-uploader__preview-image {
      border-radius: 50% !important;
    }
    .head-left {
      width: 40% !important;
      .van-uploader {
        width: 100%;
        .van-uploader__preview {
          width: 100%;
        }
      }
      .van-uploader__preview-delete {
        left: 1.3rem;
        border-radius: 50%;
        text-align: center;
        line-height: 0.4rem;
      }
    }
  }
  .order {
    width: 100%;
    margin-top: 0.3rem;
    background: #f0f0f0;
    .order-head {
      border-bottom: 1px solid #000;
      padding: 0 0.2rem;
      box-sizing: border-box;
      line-height: 0.8rem;
      display: flex;
      align-items: center;
      p:nth-last-of-type(1) {
        width: 10%;
      }
      p:nth-last-of-type(2) {
        width: 80%;
        padding-left: 0.2rem;
      }
    }
  }
}
</style>
