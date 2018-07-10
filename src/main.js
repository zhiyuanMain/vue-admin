import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import '@/styles/index.scss';    // global css

import "babel-polyfill";

// echarts
import Echarts from 'echarts';
Vue.prototype.$echarts = Echarts;

// axios
import Axios from 'axios';
Vue.prototype.$axios = Axios;

Vue.use(ElementUI, { size: 'small' });
import '@/permission';  // permission routes

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');