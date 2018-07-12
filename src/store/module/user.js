import { login, getInfo, logout } from "@/api/login";
import { getToken, setToken, removeToken } from "@/util/auth";
const user = {
    state: {
        token: getToken(),
        name: '',
        avator: '',
        roles: [],
        role: '',
        message: 0
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
        },
        SET_ROLE: (state, role) => {
            state.role = role;
        },
        SET_MESSAGE: (state, message) => {
            state.message = message;
        }
    },
    actions: {
        Login: ({ commit }, userInfo) => {
            const username = userInfo.username.trim();
            const pwd = userInfo.pwd;
            return new Promise((resolve, reject) => {

                login(username, pwd).then(res => {
                    commit('SET_TOKEN', res.token);
                    setToken(res.token);
                    resolve();
                }).catch(error => {
                    reject(error);
                })
            })
        },
        GetInfo: ({ commit, state }) => {
            return new Promise((resolve, reject) => {
                getInfo(state.token).then(res => {
                    //将获取的用户信息添加到state中
                    const data = res;
                    commit('SET_NAME', data.name);
                    commit('SET_AVATOR', data.avator);
                    commit('SET_ROLES', data.roles);
                    commit('SET_ROLE', data.role);
                    commit('SET_MESSAGE', data.message)
                    resolve(res);
                }).catch(error => {
                    reject(error);
                })
            })
        },
        Logout: ({ commit, state}) => {
            return new Promise((resolve, reject) => {
                logout().then(res => {
                    commit('SET_NAME', '');
                    commit('SET_AVATOR', '');
                    commit('SET_ROLES', []);
                    commit('SET_TOKEN', '');
                    removeToken();
                    resolve();
                }).catch(error => {
                    reject(error);
                })
            })
        },
        Fedout: () => {
            return new Promise((resolve, reject) => {
                commit('SET_TOKEN', '');
                removeToken();
                resolve();
            })
        }
    }
}

export default user;