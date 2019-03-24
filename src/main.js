import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import 'echarts-gl'

import 'normalize.css';
import '@/assets/styles/flex-box.css'
import '@/assets/styles/main-style.css'

import {VueMasonryPlugin} from 'vue-masonry';
Vue.use(VueMasonryPlugin)


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
