import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

// 注册全局组件
import myComponents from "./utils/globalComponents.js";
myComponents(Vue);

// 导入axios
import myAxios from './utils/commonAxios'
Vue.prototype.$axios = myAxios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
