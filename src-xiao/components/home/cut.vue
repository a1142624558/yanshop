<template>
 <div class="cut-list">
        <div class="cut-item" v-for="(item,index) in cutList" :key="index">
          <div>
            <img :src="item.pic" />
          </div>
          <div>
            <p v-html="item.name"></p>
            <p v-html="item.characteristic"></p>
            <div class="cut-price">
              <div>
                <p>￥{{ item.minPrice }}</p>
                <p>低价</p>
              </div>
              <div>
                <p>￥{{item.originalPrice}}</p>
                <p>原价</p>
              </div>
              <div>
                <p>{{item.stores}}</p>
                <p>库存</p>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
 name: '',
    props:["cutList"],
 data() {
 return {}
 },
components: {},
methods:{},
}
</script>

<style scoped lang="scss">
.cut-list {
      width: 100%;
      .cut-item {
        width: 100%;
        display: flex;
        padding: 0.1rem;
        box-sizing: border-box;
        padding-bottom: 0.15rem;
        border-bottom: 1px solid #000;
        div:nth-of-type(1) {
          width: 30%;
          img {
            width: 100%;
            border-radius: 0.1rem;
          }
        }
        div:nth-of-type(2) {
          width: 65%;
          margin-left: 5%;
          p:nth-of-type(1) {
            font-size: 0.3rem;
            line-height: 0.65rem;
          }
          p:nth-of-type(2) {
            font-size: 0.25rem;
            line-height: 0.65rem;
            color: #505050;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
          }
          .cut-price {
            width: 100%;
            display: flex;
            div {
              width: 33%;
              text-align: center;
              margin-top: 0.3rem;
              p:nth-of-type(1) {
                font-size: 0.3rem;
                color: #505050;
              }

              p:nth-of-type(2) {
                font-size: 0.3rem;
              }
            }
          }
        }
      }
    }
</style>
