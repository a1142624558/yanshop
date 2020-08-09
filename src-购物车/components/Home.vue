<template>
  <div class="hello">
    <p @click="sheng">升</p>
    <p @click="jiang">降</p>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <div class="img">
          <img :src="'/static/img/'+item.productImage" />
        </div>
        <div class="content">
          <h4 v-html="item.productName"></h4>
          <p>￥{{item.salePrice}}</p>
        </div>
        <div class="btn">
          <button @click="add(item)">+</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      list: "",
      flag: false,
    };
  },
  created() {
    axios.get("/static/data.json").then((res) => {
      console.log(res.data.result.list);
      this.list = res.data.result.list;
    });
  },
  methods: {
    add(item) {
      let car = JSON.parse(window.localStorage.getItem("cart")) || [];
      console.log(car);
      let index = car.findIndex((a, b) => {
        return item.productId == a.productId;
      });
      let obj = {
        productId: item.productId,
        productName: item.productName,
        productImage: item.productImage,
        num: 1,
        salePrice: item.salePrice,
        check: false,
      };
      if (index == -1) {
        car.push(obj);
      } else {
        car[index].num++;
      }
      window.localStorage.setItem("cart", JSON.stringify(car));
      this.$router.push("/list");
    },
    sheng() {
      this.flag = false;
      this.list.sort((a, b) => {
        return a.salePrice - b.salePrice;
      });
    },
    jiang() {
      this.flag = true;
      this.list.sort((a, b) => {
        return b.salePrice - a.salePrice;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  width: 100%;
}
li {
  width: 95%;
  height: 100px;
  box-shadow: 0 2px 3px #ccc;
  margin: 10px auto;
  display: flex;
}
.img {
  width: 20%;
}
img {
  width: 50px;
  height: 85px;
  display: block;
  margin: auto;
}
.content {
  width: 65%;
}
.content h4 {
  margin-top: 5px;
}
.content p {
  margin-top: 25px;
}
.btn {
  width: 15%;
  position: relative;
}
button {
  position: absolute;
  right: 5px;
  bottom: 10px;
  width: 30px;
  height: 20px;
  background: purple;
  color: #fff;
  border-radius: 20px;
  border: none;
  outline: none;
}
</style>
