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
            <div class="echarts-box">
                <div class="content-title">line</div>
                <div class="echarts" id="line"></div>
            </div>
            <div class="echarts-box">
                <div class="content-title">pie</div>
                <div class="echarts" id="pie"></div>
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
            },
            lineOption: {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
            },
            pieOption: {
                title : {
                    text: '用户访问来源',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['直接访问','邮件营销','联盟广告','视频广告']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
        }),
        mounted() {
            this.$echarts.init(document.getElementById('bar')).setOption(this.barOption);
            this.$echarts.init(document.getElementById('line')).setOption(this.lineOption);
            this.$echarts.init(document.getElementById('pie')).setOption(this.pieOption);
        }
    }
</script>

<style lang="scss" scoped>
    .echarts-box{
        display: inline-block;
        margin: 20px;
    }
    .echarts{
        width: 300px;
        height: 300px;
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