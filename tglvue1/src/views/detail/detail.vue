<template>

    <!--
    <transition name="slide">
    -->
        <div class="detail">
            <div class="header">
                <span class="title">{{seller.name}}</span>
            </div>
            <scroll>
                <div class="scroll_view">
                    <slider ref="slide">
                        <!--
                            <img v-for="(img,index) in getImgs()" :key="index" :src="imgPath+img" alt="" >
                        --> 
                        <img @load="loadImg" v-for="(img,index) in getImgs()" :src="img" :key="index" width="100%" height="260px">
                    </slider>
                    <div class="address">
                        <h4>{{seller.details}}</h4>
                    </div>
                    <div class="meal">
                        <div class="title">
                            <img src="./meal.png" alt="" class="icon">
                            <span class="text">套餐福利</span>
                        </div>
                        <div class="content">
                           {{seller.meal}}
                           <!--端午节送大果盘一份<br/>
                           中秋节送啤酒10瓶<br/>
                           中秋节送啤酒10瓶<br/>
                           中秋节送啤酒10瓶<br/>
                           中秋节送啤酒10瓶<br/>
                           -->
                        </div>
                    </div>
                    <div class="sp-content">
                        <div class="spec">
                            <h3 class="title">包间规格</h3>
                            <!--<span>10人包/20人包/30人包</span>-->
                            <span>{{seller.spec}}</span>
                        </div>
                        <div class="perPrice">
                            <h3 class="title">人均消费</h3>
                            <div class="_span">
                            <span>{{seller.perCapita}}</span>
                            </div>
                        </div>
                    </div>


                    <div class="scores">
                        <div>
                            <h2 class="title">客户综合评价</h2>
                            <div class="score">
                                <span class="name">环境感受:</span>
                                <Star :point="getScores()[0]"></Star>
                            </div>
                            <div class="score">
                                <span class="name">视觉感受:</span>
                                <Star :point="getScores()[1]"></Star>
                            </div>
                            <div class="score">
                                <span class="name">服务感受:</span>
                                <Star :point="getScores()[2]"></Star>
                            </div>
                        </div>
                        
                        <div class="manager-avatar" @click="showManager=true" >
                            <img :src="imgPath+seller.manager" alt="">
                            <!--
                            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1327247921,1390999968&fm=27&gp=0.jpg" alt="">
                            -->
                        </div>
                        <div class="manager" v-if="showManager" @click="showManager=false">
                            <img :src="imgPath+seller.manager" alt="">
                            <span>{{seller.managerInfo}}</span>
                        </div>
                    </div>
                    <!--
                        <score :scores="getScores()">
                        </score>
                    -->

                    <mvp :users=topConsumeList></mvp>
                    
                    <info :text="seller.info"></info>
                    
                    <QQMAP :lat="seller.lat" :lng="seller.lng" class="map"></QQMAP>
                </div>
            </scroll>

            <router-view></router-view>
            <order></order>
        </div>
        <!--
    </transition>
    -->
</template>

<script>
    import Slider from "../../base/slider/slider"
    import Score from '../../components/score/score'
    import Star from '../../base/star/star'
    import Mvp from '../../components/mvp/mvp'
    import Scroll from '../../base/scroll/scroll'
    import Info from '../../components/info/info'
    import QQMAP from  '../../base/qqmap/qqmap'
    import {mapGetters} from 'vuex'
    import {domain} from "../../const/img"
    import {getTopConsume} from "../../api/home"
    import  Order from '../../components/order/order'

    export default {
        created() {
            this.getConsume()
        },
        data(){
            return {
                imgPath:domain,
                topConsumeList:[
                    {
                        avatar:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4078573376,790732008&fm=27&gp=0.jpg',
                        userName:'工藤新一',
                        levelName:'荣耀王者'
                    },
                    {
                        avatar:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2068977402,107443255&fm=27&gp=0.jpg',
                        userName:'毛利兰',
                        levelName:'星耀'
                    },
                    {
                        avatar:'http://img3.imgtn.bdimg.com/it/u=2289522371,4230489104&fm=27&gp=0.jpg',
                        userName:'灰原哀',
                        levelName:'钻石'
                    }
                ],
                showManager : false,
            }
        },
        components: {Slider, Score, Mvp, Scroll, Info, QQMAP,Order,Star},
        methods:{
            loadImg(){
                this.$refs.slide.resetWidth()
            },
            getScores(){
                let scores = [this.seller.ambient, this.seller.vision, this.seller.service]
                return scores
            },
            getImgs(){
                //return this.seller.img.split(",")
                return ['https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1327247921,1390999968&fm=27&gp=0.jpg','https://ps.ssl.qhimg.com/dr/_110_100/t014dd5998d7f5edf41.jpg#1531211189#1531211189']
            },
            getConsume(){
                console.log(this.seller)
                let params = {"sellerId":this.seller.sellerId}
                getTopConsume(params).then(res => {
                    this.topConsumeList = res.data
                })
            }
        },
        computed:{
            ...mapGetters([
                'seller'
            ])
        }
    }
</script>

<style scoped lang="stylus">
    .scores
        display flex;
        margin-left 5%;
        margin-top 25px
        background-color:white;
        border: 1px solid #700DDA
        border-radius: 10px
        width:90%;
        .title
            height:20px
            font-size:14px
            font-family:PingFangSC-Regular
            color:#700DDA
            line-height:20px
            margin-bottom 9px
            margin-top:3px;
            margin-left 14px;
        .score
            margin-bottom 5px
            margin-left 14px;
            .name
                height:20px
                font-size:14px
                font-family:PingFangSC-Regular
                color:rgba(85,85,85,1)
                line-height:20px
    .scroll_view
        margin-top -40px
        width 100%
        .imgg
            width 100%
            height 20px
    ._span{
        //background-color:red;
        display:flex;
        margin-left:46px;
        margin-top:7px;;
        width:40%;
    }
    .detail
        background #f5f5f5
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        z-index 1
    .header
        z-index 2
        background-color:#700DDA
        width 100%
        text-align center
        height 51px
        .title
            vertical-align middle
            font-size: 18px
            color: white
            line-height: 51px
    .address
        font-size: 9px
        font-family: PingFangSC-Regular
        color: rgba(0, 0, 0, 1)
        line-height: 13px
        margin 14px 0 24px 0
        text-align center

    .meal
        background-color: white
        border-radius: 10px
        border: 1px solid #700DDA
        //margin 0 20px 16px 20px
        //background-color:cyan;
        width:90%;
        margin-left:5%;
        margin-bottom:25px;
        .title
            height: 50px;
            background: white
            //box-shadow: 0px 1px 0px 0px #700DDA
            border-radius: 10px
            border-top: 1px solid #700DDA
            margin-top:-1px;
            .icon
                width 26px
                height 26px
                margin 9px 10px 15px 19px
                vertical-align middle
            .text
                font-size: 18px;
                font-family: DFLiKingHei-XB-HK-BF
                //color: #C86DD7
                color:#700DDA
                line-height: 19px
                vertical-align middle
        .content
            font-size: 15px
            font-family: HiraMaruPro-W4
            color: rgba(85, 85, 85, 1);
            line-height: 20px
            //text-align center
            width 80%;
            //height:25px;
            margin-top:-10px;
            margin-left:55px;
            margin-bottom:8px;
            //background-color:yellow;
    .sp-content
        margin 0 21px 0
        display flex
        justify-content space-between
        .spec
            width 198px
            border-radius: 10px
            border: 1px solid #700DDA
            padding 9px 0 12px 0
            background-color:white
            h3
                color #3023AE
                height: 20px;
                font-size: 14px;
                font-family: HiraMaruPro-W4;
                line-height 21px
                margin 0 0 5px 14px
            span
                font-size: 12px
                font-family: HiraMaruPro-W4
                color: rgba(85, 85, 85, 1);
                line-height: 18px
                margin-left:14px
                //background-color:cyan
        .perPrice
            width: 117px
            border-radius: 10px
            border: 1px solid #700DDA
            padding 9px 0 12px 0
            text-align center
            background-color:white
            //display:flex;
            h3
                color #3023AE
                height: 20px;
                font-size: 14px;
                font-family: HiraMaruPro-W4;
                line-height 21px
                //background-color:cyan
                //margin-left:30px;
            span
                font-size: 12px
                font-family: HiraMaruPro-W4
                color: rgba(85, 85, 85, 1);
                //line-height: 25px;
                //background-color:red;
    .map
        padding 20px 20px
    .manager-avatar
        margin-top 40px
        margin-left 40px
        img
            width 48px
            height 48px
            border-radius 48px
    .manager
        z-index 1
        position fixed
        height 100%
        top 0
        left 0
        right  0
        bottom 0
        display flex
        justify-content center
        align-items center
        background: rgba(0,0,0, 0.8);
        display flex
        flex-direction column
        align-items center

        img
            margin-top -30%
            width 60%
        span
            color white
            width 60%
            margin-top 10px
        /*.slide-enter-active, .slide-leave-active
            transition all .3s

        .slide-enter, .slide-leave-to
            transform translate3d(100%, 0, 0)
            */

</style>