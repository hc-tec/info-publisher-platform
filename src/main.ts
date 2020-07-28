import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { taskList } from './task-list'
import neumorphic from 'neumorphic-ui-vue';
import global from './utils/global'
// 将 taskList 配置到全局，方便数据的传输与修改
Vue.prototype.$taskList = taskList;
Vue.use(neumorphic);
// 全局变量
Vue.config.productionTip = false

new Vue({
  router,
  data() {
    return global
  },
  render: h => h(App)
}).$mount('#app')

