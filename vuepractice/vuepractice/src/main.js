// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './index'
import router from './router'
import iView from 'iview';
import axios from 'axios'
import 'iview/dist/styles/iview.css';
// 状态管理
import store from './store'
// 全局引入axios
Vue.prototype.$http = axios;

Vue.use(iView)
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
 
})
