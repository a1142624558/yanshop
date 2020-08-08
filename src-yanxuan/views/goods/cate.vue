<template>
 <div>
     <van-nav-bar title="分类商品" left-arrow  @click-left="go"/>

     <Recomman :goodsList = "goodsList" v-if="goodsList.length>0"/>

     <van-empty description="还为找到您想要的商品" v-else/>
 </div>
</template>

<script>
import Recomman from "@/components/home/recommand.vue";
export default {
 name: '',
 mounted(){
    //  页面传递过来的分类ID

     this.c_id = this.$route.params.cid;
     console.log(this.c_id)
     this.getGoodsList();
 },
 data() {
 return {
     c_id:0,
     goodsList:[],
 }
 },
components: {
  Recomman
},
created(){
  console.log(this.$route.query.pid)
},
methods:{
    // 商品列表数据
    getGoodsList(){
      this.$axios({
        url:"https://api.it120.cc/small4/shop/goods/list"
      }).then(res=>{
        console.log(res.data);
        let data = res.data.filter(item=>{
          return item.categoryId ==this.c_id;//判断当前商品是否等于传递过来的分类ID

        }) 

        this.goodsList = data;
      })
    },
    go(){
      this.$router.go(-1);
    }
},
}
</script>

<style scoped>
</style>
