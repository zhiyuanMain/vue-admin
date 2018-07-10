<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 图表</el-breadcrumb-item>
                <el-breadcrumb-item>基础图表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="echarts-box">
                <div class="content-title">bar</div>
                <div class="echarts" id="bar"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'basecharts',
        data: () => ({
            barOption: {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            }
        }),
        mounted() {
            this.$echarts.init(document.getElementById('bar')).setOption(this.barOption);
        }
    }
</script>

<style scoped>
.echarts-box{
    display: inline-block;
    margin: 20px;
}
    .echarts{
        width: 500px;
        height: 400px;
    }
    .content-title{
        clear: both;
        font-weight: 400;
        line-height: 50px;
        margin: 10px 0;
        font-size: 22px;
        color: #1f2f3d;
    }
    
</style>