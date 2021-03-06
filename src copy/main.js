// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "@/store/index";
Vue.config.productionTip = false
import "@/assets/style/reset.css";
import axios from "@/utils/request";
Vue.prototype.$axios=axios;

//引入vant 组件
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
