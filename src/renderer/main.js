import Vue from 'vue'
import axios from 'axios'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import App from './App'
import router from './router'
import store from './store'
import './common.less'
import './styles.css'
// import electron from 'electron'
import { VuePlugin } from 'vuera'
// const BrowserWindow = electron.remote.BrowserWindow;
// const win = new BrowserWindow()

// win.setProgressBar(0.5)
Vue.use(VuePlugin)
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.use(Antd);
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
