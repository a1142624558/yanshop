<template>
  <div>
      <router-view></router-view>
    <van-tabbar route active-color="#ff0000">
      <van-tabbar-item icon="wap-home-o" to="/index">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/categort">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/cart"  :badge="this.$store.getters.totalNums">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/me">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
</style>
