<template>
  <div>
    <!-- 头部的搜索框 -->
    <van-search placeholder="请输入商品的名字" v-model="keyWord" @keydown.enter="setHistory">
      <template #left>
        <van-icon name="arrow-left" size="30" @click="$router.go(-1)"/>
      </template>
    </van-search>
    <!-- 历史记录结构 -->
    <div class="history" v-show="historyFlag">
      <p>
        <span>历史记录</span>
        <van-icon name="delete" size="20" @click="removeHistory"/>
      </p>
      <div class="history-list">
        <div class="item"  v-for="(item,index) in historyList" :key="index">{{item}}</div>
      </div>
    </div>
    <Recomman :goodsList="searchGoods" v-show="!historyFlag"/>
  </div>
</template>

<script>
import Recomman from "@/components/home/recommand.vue";
export default {
  name: "",
    mounted() {
    this.getCategory();
    this.getHistory();
  },
  data() {
    return {
      keyWord: "",
      goodsList: [],
      historyList:[],//历史记录
      historyFlag:true,
    };
  },
  components: {
    Recomman,
  },
  computed: {
    searchGoods() {
      //先把商品所有商品的数据付给变量
      let data = this.goodsList;
      //判断搜索框是否为空
      if (this.keyWord == "") {
        this.historyFlag = true;//历史记录显示
        return [];
      }

      this.historyFlag = false; //历史记录隐藏
      return data.filter((item) => {
        return item.name.indexOf(this.keyWord) > -1;
      });
    },
  },

  methods: {
    // 商品列表信息
    getCategory() {
      this.$axios
        .get("https://api.it120.cc/small4/shop/goods/list")
        .then((res) => {
          this.goodsList = res.data;
        });
    },
    // 获取历史搜索信息
    getHistory() {
      let data = localStorage.getItem("09c");
      if (data != null) {
        this.historyList = JSON.parse(data);//解析数据返回history
      }else{
        this.historyList=[];
      }
    },
    // 设置历史记录的信息
    setHistory() {
        // 搜索的关键字为空，不让他添加了
      if (this.keyWord == "") {
        return false;
      }
      // 插入新记录到数字的第一条
      this.historyList.unshift(this.keyWord);
      // 最多存储8条记录
      if(this.historyList.length>8){
        this.historyList.pop();
      }
      localStorage.setItem("09c",JSON.stringify(this.historyList));
      this.keyWord=""
    },

    removeHistory() {
        localStorage.removeItem('09c')
        this.getHistory();
    },
  },
};
</script>

<style scoped lang="scss">
#sub_cate {
  width: 65%;
  max-height: 85%;
  position: fixed;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .item {
    width: 31%;
    margin: 1%;
    text-align: center;
    img {
      width: 96%;
      margin-left: 2%;
    }
    p {
      line-height: 0.55rem;
    }
  }
}

.history {
  width: 100%;
  padding: 0.2rem;
  box-sizing: border-box;

  p {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.88rem;
    span {
      font-size: 0.35rem;
      font-weight: bold;
    }
  }
  .history-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 23%;
      padding: 0.2rem;
      margin: 1%;
      box-sizing: border-box;
      background: #f0f0f0;
      border-radius: 0.2rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
    }
  }
}
</style>
