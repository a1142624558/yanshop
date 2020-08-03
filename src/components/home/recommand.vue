<template>
 <div class="goods-list">
        <div class="goods-item" v-for="(item,index) in goodsList" :key="index">
          <img :src="item.pic" />
          <p v-html="item.name"></p>
          <p item.characteristic></p>
          <p>￥{{item.originalPrice}}</p>
        </div>
      </div>
</template>

<script>
export default {
 name: '',
 props:["goodsList"],
 data() {
 return {}
 },
components: {},
methods:{},
}
</script>

<style scoped lang="scss">
.goods-list {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      .goods-item {
        width: 46%;
        line-height: 0.5rem;
        padding: 0.1rem;
        img {
          width: 100%;
          border-radius: 0.1rem;
        }
        p {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          word-break: break-all;
        }
        p:nth-of-type(1) {
          font-size: 0.3rem;
        }
        p:nth-of-type(2) {
          font-size: 0.2rem;
          color: #b2b2b2;
        }
        p:nth-of-type(3) {
          font-size: 0.25rem;
          color: #ff0000;
        }
      }
    }
</style>
