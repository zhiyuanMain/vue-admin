import request from '@/util/service';
export function login(username, passward) {
    return request({
        url: '/login',
        method: 'get',
        params: {
            username: username,
            passward: passward
        }
    })
}

export function getInfo(token) {
    return request({
        url: '/getInfo',
        method: 'get',
        params: {
            token
        }
    })
}