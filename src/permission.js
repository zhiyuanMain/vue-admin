// router
import router from './router';
// store
import store from './store';
// nprogress
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
// message
import { Message, Alert } from 'element-ui';
import { getToken } from './utils/auth';

//使用钩子函数对路由进行权限跳转
const whiteList = ['/login'];
router.beforeEach((to, from, next) => {
    NProgress.start();
    const token = getToken();
    if(!token) { // 无token 重定向到登陆页
        if(whiteList.indexOf(to.path) !== -1) {
            next();
        }else {
            next('/login');
            // NProgress.done();
        }
    }else { // 有token拉取最新的信息
        if(!store.getters.roles.length) {
            store.dispatch('GetInfo').then((res) => {
                if(!res.roles.length && to.path !== '/login'){
                    next('/login');
                }else if(to.meta.permission){
                    // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
                    res.roles.indexOf('admin') > -1 ? next() : next('/403');
                }else{
                    // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
                    if(navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor'){
                        Alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                            confirmButtonText: '确定'
                        });
                    }else{
                        next();
                    }
                }
            }).catch(error => {
                store.dispatch('Fedout').then(() => {
                    Message.error('验证失败，请重新登陆');
                    next({
                        path: '/login'
                    })
                })
            });
        }else if(to.meta.permission){
            // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
            store.getters.roles.indexOf('admin') > -1 ? next() : next('/403');
        }else {
            next();
        }
    }
})

router.afterEach(() => {
    NProgress.done();
})