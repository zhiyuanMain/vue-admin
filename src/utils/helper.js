const Helper = {
    // 获取今天时间戳
    getTodayTime: function () {
        const date = new Date();
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime();
    },
    // 获取上一天日期
    prevDay: function (timestamp = (new Date()).getTime()) {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = date.getMonth() + 1 < 10
            ? '0' + (date.getMonth() + 1)
            : date.getMonth() + 1;
        const day = date.getDate() < 10
            ? '0' + date.getDate()
            : date.getDate();
        return year + '' + month + '' + day;
    }
};
export default Helper;