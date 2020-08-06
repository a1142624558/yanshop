<template>
  <div class="box">
    <div class="login">
      <p class="login-head">用户登录</p>
      <input type="text" class="inp" placeholder="请输入用户名" v-model="mobile" />
      <input type="password" class="inp" placeholder="请输入密码" v-model="pwd" />
      <van-button type="danger" block class="btn" @click="doLogin">立即登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  mounted() {},
  data() {
    return {
      mobile: "",
      pwd: "",

    };
  },
  beforeRouteEnter (to, from, next) {
    let data = localStorage.getItem("09C");
    if(data == null){
        next();
    }else{
        next("/index");//返回首页
    }
  },
  components: {},
  methods: {
    // 登录
    doLogin() {
      if (this.mobile == "" || this.pwd == "") {
        this.$toast.fail("用户名或密码不能为空");
        return false;
      }
      let rep = /^1[3456789]\d{9}$/; //手机号的正则表达式
      if (rep.test(this.mobile) == false) {
        this.$toast.fail("用户名不正确，请重新输入");
        return false;
      }

      let formdata = new FormData();
      formdata.append("mobile",this.mobile);
      formdata.append("pwd",this.pwd);
      this.$axios
        .post("user/m/login?deviceId=007&deviceName=monkey",formdata)
        .then((res) => {
          if (res.code != 0) {
            this.$toast.fail(res.msg);
            return false;
          }
          res.data.mobile = this.mobile;
          localStorage.setItem("09C",JSON.stringify(res.data));

          this.$router.go(-1);
        });
    },
  },
};
</script>

<style  lang="scss">
.box {
  width: 100%;
  padding: 0.2rem;
  .login {
    width: 90%;
    padding: 0.2rem;
    box-sizing: border-box;
    margin: 1rem auto;
    border: 1px solid #000;
    border-radius: 0.2rem;
    .login-head {
      width: 100;
      line-height: 0.88rem;
      font-size: 0.4rem;
      font-weight: bold;
      text-indent: 0.2rem;
      border: 1px solid #000;
    }
    .inp {
      width: 100%;
      height: 0.88rem;
      line-height: 0.88rem;
      border: 1px solid #000;
      border-radius: 0.3rem;
      text-indent: 0.2rem;
      margin-top: 0.3rem;
    }
    .btn {
      margin-top: 0.3rem;
    }
  }
}
</style>
