<template>
    <div class="map">
    <div id="content">
    </div>
    </div>
</template>
<script>
    // import {TMap} from './TMap'
    import qq from 'qq'

    export default {
        props:{
            lng:{
                type:Number,
                default:112.93
            },
            lat:{
                type:Number,
                default:28.23
            }
        },
        data() {
            return {
            }
        },
        mounted() {
            this.$nextTick(()=>{
                this.initMap()
            })

        },
        methods: {
            initMap() {
                var center = new qq.maps.LatLng(this.lat,this.lng);
                 let map = new qq.maps.Map(document.getElementById('content'),{
                    center: center,
                    zoom: 13
                });
                //获取  城市位置信息查询 接口
                this.citylocation = new qq.maps.CityService({
                    //设置地图
                    map : map,
                    complete : function(results){
                         map.setCenter(results.detail.latLng);
                            new qq.maps.Marker({//设置marker标记
                            map:map,
                            position: results.detail.latLng
                        });
                    }
                });
                this.citylocation.searchCityByLatLng(center)
            }
        },
        created: function () {
        }
    }
</script>
<style>
    #content {
        width: 336px;
        height: 185px;
        overflow: hidden;
    }
</style>