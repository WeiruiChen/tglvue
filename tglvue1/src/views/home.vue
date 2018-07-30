
<template>
    <div class="home">
        <search></search>
        <scroll>
            <div class='scroll_view'>
                <slider ref="slide" v-if="slideImages!=null&&slideImages.length>0">
                    <img @load="loadImg"  v-for="(img,index) in slideImages" :src="img" :key="index" class="imgg">
                </slider>
                <!--
                    <notice :notice-text="noticeText"></notice>
                -->
                <hot :hotItems="hotItems"></hot>
                <worth :worthItems="worthItems"></worth>
            </div>
        </scroll>
        <router-view ></router-view>
        <order></order>
    </div>
</template>

hot<script>
    import Slider from '../base/slider/slider'
    //import Notice from '../components/notice/notice'
    import Hot from "../components/recommend/hot"
    import Worth from '../components/recommend/worth'
    import Scroll from '../base/scroll/scroll'
    import order from '../components/order/order'
    import request from '../utils/request'
    import search from '../components/search/search'
    import {getHotItems,getSliderImgs,getWorthItems,getNotices} from '../api/home'
    import {domain} from '../const/img'

    export default {
        created(){
          this.initSlider();
          this.initNotice();
          this.initHot();
          this.initWorth();
        },
        data(){
            return {
                imgPath:domain,
                slideImages:['https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1327247921,1390999968&fm=27&gp=0.jpg','https://ps.ssl.qhimg.com/dr/_110_100/t014dd5998d7f5edf41.jpg#1531211189#1531211189'],
                noticeText:'',
                hotItems:[{
                    img:'https://ps.ssl.qhimg.com/sdmt/127_135_100/t013e8c87626d1228cf.jpg',
                    name:'[新华]悦界娱乐',
                    details:'长沙市岳麓区麓谷科技园'
                },
                {
                    img:'https://ps.ssl.qhimg.com/dr/_110_100/t014dd5998d7f5edf41.jpg#1531211189#1531211189',
                    name:'[新华]悦界娱乐',
                    details:'长沙市岳麓区麓谷科技园'
                },
                                {
                    img:'https://ps.ssl.qhimg.com/dr/_110_100/t014dd5998d7f5edf41.jpg#1531211189#1531211189',
                    name:'[新华]悦界娱乐',
                    details:'长沙市岳麓区麓谷科技园'
                },
                                {
                    img:'https://ps.ssl.qhimg.com/sdmt/127_135_100/t013e8c87626d1228cf.jpg',
                    name:'[新华]悦界娱乐',
                    details:'长沙市岳麓区麓谷科技园'
                }
                ],
                worthItems:[{
                    img:'https://ps.ssl.qhimg.com/dr/_110_100/t014dd5998d7f5edf41.jpg#1531211189#1531211189',
                    name:'[新华]悦界娱乐',
                    details:'长沙市岳麓区麓谷科技园1'
                },
                {
                    img:'https://ps.ssl.qhimg.com/dr/_110_100/t014dd5998d7f5edf41.jpg#1531211189#1531211189',
                    name:'[新华]悦界娱乐',
                    details:'长沙市岳麓区麓谷科技园1'
                },
                                {
                    img:'https://ps.ssl.qhimg.com/dr/_110_100/t014dd5998d7f5edf41.jpg#1531211189#1531211189',
                    name:'[新华]悦界娱乐',
                    details:'长沙市岳麓区麓谷科技园1'
                },
                                {
                    img:'https://ps.ssl.qhimg.com/dr/_110_100/t014dd5998d7f5edf41.jpg#1531211189#1531211189',
                    name:'[新华]悦界娱乐',
                    details:'长沙市岳麓区麓谷科技园'
                }]
            }
        },
        components: {
            Worth,
            Hot,
            Slider,
            //Notice,
            Scroll,
            order,
            search
        },
        methods:{
            //初始化幻片
            initSlider(){
               console.log(111);
                getSliderImgs().then(res=>{
                    console.log( res.data);
                    this.slideImages = res.data;
                })
            },
            loadImg(){
                this.$refs.slide.resetWidth()
            },
            //初始化通知
            initNotice(){
                getNotices().then(res=>{
                    if(res.data){
                        //let notice = res.data[0]
                        // this.noticeText = notice.userName+"一分钟前预定了"+notice.sellerName
                    }
                })
            },
            //初始化推荐
            initHot(){
                getHotItems().then(res=>{
                    this.hotItems = res.data;
                    console.log(4444);
                    console.log(this.hotItems)
                })
            },
            //初始化超值
            initWorth(){
                getWorthItems().then(res=>{
                    this.worthItems = res.data
                })
            },
            selectItem(id) {
                this.$router.push({
                    path:`/${id}`
                })
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
    .home
        background #f5f5f5
        position fixed
        top: 0
        left 0
        right 0
        bottom 60px
        .scroll_view
            width 100%
            .imgg
                width 100%
                height 260px
</style>
