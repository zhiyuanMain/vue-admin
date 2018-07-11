import { login, getInfo } from "@/api/login";
import { SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER } from "constants";
const user = {
    state: {
        token: '',
        name: '',
        avator: '',
        roles: []
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_NAME: (state, name) => {
            state.name = name;
        },
        SET_AVATOR: (state, avator) => {
            state.avator = avator;
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles;
        }
    },
    actions: {
        Login: ({ commit }, userInfo) => {
            const username = userInfo.username.trim();
            const pwd = userInfo.pwd;
            return new Promise((resolve, reject) => {
                login(username, pwd).then(response => {
                    commit('SET_TOKEN', response.token)
                    resolve();
                }).catch(error => {
                    reject(error);
                })
            })
        },
        GetInfo: ({ commit, state }) => {
            return new Promise((resolve, reject) => {
                getInfo(state.token).then(response => {
                    //将获取的用户信息添加到state中
                    const data = response;
                    commit('SET_NAME', data.name);
                    commit('SET_AVATOR', data.avator);
                    commit('SET_ROLES', data.roles);
                    resolve();
                }).catch(error => {
                    reject(error);
                })
            })
        }
    }
}

export default user;