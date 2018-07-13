import request from './utils/service';
export function getTableList({ page }) {
    return request({
        url: '/getTableList',
        method: 'get',
        params: {
            page: page
        }
    })
}