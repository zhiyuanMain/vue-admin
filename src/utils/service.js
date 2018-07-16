import axios from 'axios';
import  { Message, MessageBox } from 'element-ui';
// const imgPath = 'http://127.0.0.1:8011/img/';
// const apiPath = 'http://127.0.0.1:8010/';

// Ajax 通用配置
const Service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 5000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
});

// request拦截器
Service.interceptors.request.use(config => {
    // config.headers['x-token'] = 'token123456';
    return config;
}, error => {
    console.log(error);
    Promise.reject(error);
})
// 添加响应拦截器
Service.interceptors.response.use(response => {
    const res = response.data;
    // 根据具体业务修改
    if(res.status !== 200) {
        Message({
            message: res.statusText,
            type: 'error',
            duration: 5000
        })
        // 50008: 非法token; 50012: 其他客户端登陆; 20014: Token过期了
        if(res.code === 50008 || res.code === 50012 || res.code === 50014) {
            MessageBox.confirm('您已被登出，可以取消继续留在本页，或者重新登陆', '确定登出', {
                confirmButtonText: '重新登陆',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                localStorage.removeItem('ms_username');
                window.location.href = '/login'
                // this.$router.push('/login');
            })
        }
        return Promise.reject('error');
    }else {
        return res;
    }
});

export default Service;