import Vue from 'vue';
import Vuex from 'vuex';
import app from './module/app';
import user from './module/user';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        app,
        user
    },
    getters
})

export default store;