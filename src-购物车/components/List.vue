<template >
  <div class="list">
      
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <div class="inp">
          <input type="checkbox" :checked="item.check" @click="click(index)" />
        </div>
        <div class="img">
          <img :src="'/static/img/'+item.productImage"/>
        </div>
        <div class="content">
          <h4 v-html="item.productName"></h4>
          <p>￥{{item.salePrice}}</p>
        </div>
        <div class="btn">
          <span>
            <button @click="jia(index)">+</button>
            {{item.num}}
            <button @click="jian(index)">-</button>
          </span>
        </div>
      </li>
    </ul>
    <footer>
      <input type="checkbox" :checked="num == list.length ? true : false" @change="all($event)" />
      全选 合计：￥{{money}}
    </footer>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      list: JSON.parse(window.localStorage.getItem("cart")) || [],
      num: 0,
    };
  },
  methods: {
    jia(index) {
      this.list[index].num++;
      window.localStorage.setItem("cart", JSON.stringify(this.list));
    },
    jian(index) {
      this.list[index].num--;

      if (this.list[index].num <= 1) {
        this.list[index].num = 1;
      }
      window.localStorage.setItem("cart", JSON.stringify(this.list));
    },
    all(e) {
      this.num = 0;
      this.list.forEach((item) => {
        item.check = e.target.checked;
        if (item.check) {
          this.num++;
        } else {
          this.num = 0;
        }
      });
    },
    click(index) {
      this.list[index].check = !this.list[index].check;
      this.list[index].check ? this.num++ : this.num--;
    },
  },
  computed: {
    money() {
      let sum = 0;
      this.list.forEach((item) => {
        if (item.check == true) {
          sum += item.salePrice * item.num;
        }
      });
      return sum;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
.inp {
  width: 10%;
}
.inp input {
  display: block;
  margin: auto;
  margin-top: 40px;
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
  width: 55%;
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
span {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
footer {
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: 0;
  left: 0;
}
footer > input {
  margin-left: 20px;
}
.sotrt{

}
</style>
