import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import '@/styles/index.scss';    // global css
import "babel-polyfill";
import Echarts from 'echarts';   // echarts
import Axios from 'axios';       // axios
import '@/permission';           // permission routes
import store from './store';                // store
Vue.prototype.$echarts = Echarts;
Vue.prototype.$axios = Axios;
Vue.use(ElementUI, { size: 'small' });

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');