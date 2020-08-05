<template>
  <div>
    <van-nav-bar title="我的购物车" left-arrow />
    <div class="list">
      <div class="item" v-for="(item,index) in this.$store.state.cartList" :key="index">
        <van-checkbox  class="inp" v-model="item.checked"/>

        <van-card :title="item.name" :thumb="item.img" :price="item.price">
          <template #num>
            <van-stepper v-model="item.nums" />
          </template>
        </van-card>
      </div>
    </div>
    <van-submit-bar :price="3050" button-text="提交订单" style="bottom:1rem">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  name: "",
  mounted() {
    this.cartList = this.$store.state.cartList;
  },
  data() {
    return {
      cartList: [],
      checked: true,
    };
  },
};
</script>

<style scoped lang="scss">
.list {
  width: 100%;
  background: #f0f0f0;
  .item {
    width: 100%;
    padding: .1rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .inp {
      width: 15%;
    }
    .van-card:not(:first-child){
        width: 100%;
    }
  }
}
</style>
