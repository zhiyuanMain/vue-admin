<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-location"></i> 地图</el-breadcrumb-item>
                <el-breadcrumb-item>百度地图</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div id="lbsMap"></div>
        </div>
    </div>
</template>

<script>
import BMap from "BMap";
export default {
    name: "",
    data() {
        return {};
    },
    methods: {
        initMap() {
        var map = new BMap.Map('lbsMap');
        var point = new BMap.Point(108.952, 34.223);
        map.centerAndZoom(point, 14);
        map.addControl(new BMap.MapTypeControl());
        map.enableScrollWheelZoom(true);
        map.enableDoubleClickZoom(true);
        var marker = new BMap.Marker(point);
        map.addOverlay(marker);
        }
    },
    mounted() {
        this.initMap();
    }
};
</script>

<style lang="scss" scoped>
#lbsMap {
  width: 100%;
  height: 450px;
}
</style>
