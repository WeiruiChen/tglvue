<template>
    <transition name="slide">
        <div class="orderRecord">
            <MyHeader :title="title"></MyHeader>

            <div class="items">
                <Srcoll>

                <!-- 整个订单块 -->
                    <div class="content">

                    <!-- 每一个订单 -->
                        <div class="item" v-for="(item,index) in consumeList" :key="index" @click="turn('/orderDetail')">

                        <!-- 头像 -->
                            <img :src="item.img" alt=""><!-- <img :src="imgPath+getImg(item.img)" alt="" > -->
                        
                        <!-- 地址 -->
                            <div class="c1">
                                <span class="name" style="
                        font-weight: bold">{{item.sellerName}}</span>
                                <span class="time">时间: {{item.payTime}}</span>
                                <span class="pay">金额: ￥{{item.money}}</span>
                                <span class="status">{{item.payStatus === 0 ? '未支付' : '已支付'}}</span>
                            </div>

                        <!-- 支付信息 -->
                        <!--
                            <div class="c2">
                                <span class="time">{{item.payTime}}</span>
                                <span class="status">{{item.payStatus === 0 ? '未支付' : '已支付'}}</span>
                                <span class="pay">￥{{item.money}}</span>
                            </div>
                        -->
                        </div>

                    </div>

                </Srcoll>
            </div>
        </div>
    </transition>
</template>

<script>
    import MyHeader from '../../components/header/header'
    import Srcoll from '../../base/scroll/scroll'
    import { getConsume } from '../../api/orderRecord'
    import {domain} from "../../const/img"

    export default {
        components: {
            MyHeader, Srcoll
        },
        created(){
            this.getConsumeList()
        },
        data(){
            return{
                title: "订单记录",
                consumeList:[{
                    img:'http://img2.imgtn.bdimg.com/it/u=1185382909,4094685263&fm=27&gp=0.jpg',
                    sellerName:'岳麓区湖南师范大学江边二舍608',
                    uContent:'uContent???',
                    payTime:'2018-05-26',
                    payStatus:'111',
                    money:'50'
                },
                {
                    img:'http://img3.imgtn.bdimg.com/it/u=404438310,862537695&fm=27&gp=0.jpg',
                    sellerName:'雷军2',
                    uContent:'uContent???',
                    payTime:'16:06',
                    payStatus:'111',
                    money:'50'
                },
                {
                    img:'http://img3.imgtn.bdimg.com/it/u=404438310,862537695&fm=27&gp=0.jpg',
                    sellerName:'雷军leij',
                    uContent:'uContent???',
                    payTime:'16:06',
                    payStatus:'111',
                    money:'50'
                },
                {
                    img:'http://img3.imgtn.bdimg.com/it/u=404438310,862537695&fm=27&gp=0.jpg',
                    sellerName:'雷军军',
                    uContent:'uContent???',
                    payTime:'16:06',
                    payStatus:'111',
                    money:'50'
                },
                {
                    img:'http://img3.imgtn.bdimg.com/it/u=404438310,862537695&fm=27&gp=0.jpg',
                    sellerName:'雷军爱好',
                    uContent:'uContent???',
                    payTime:'2018-07-23 16:06',
                    payStatus:'111',
                    money:'50'
                },
                {
                    img:'http://img3.imgtn.bdimg.com/it/u=404438310,862537695&fm=27&gp=0.jpg',
                    sellerName:'雷军换行',
                    uContent:'uContent???',
                    payTime:'16:04',
                    payStatus:'0',
                    money:'0'
                }],
                // imgPath:domain
            }
        },
        methods:{
            getConsumeList(){
                getConsume().then(res => {
                    this.consumeList = res.data
                })
            },
            getImg(img){
                return img.split(",")[0]
            },
            turn(path){
                this.$router.push({
                    path:`${path}`
                })
            }
        },
    }
</script>

<style scoped lang="stylus">
/**** scroll外第一层 标题外 ****/
    .orderRecord
        position fixed
        top 0
        left 0
        right 0
        bottom 0px
        z-index 1
        background: white
    /**** scroll外第二层 标题内 scroll外****/
        .items
            position fixed
            top 58px
            left 0
            right 0
            bottom 1px
            overflow hidden
        /**** 每个订单块 scroll内 for循环 ****/
            .item
                height: 100px;
                background: rgba(255, 255, 255, 1);
                box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.5);
                display flex
                justify-content space-between
                /* 头像 */
                img
                    margin-top 16px
                    margin-left 10px
                    width: 68px;
                    height: 68px;
                    background: rgba(216, 216, 216, 1);
                    border-radius: 50px;
                /* 地址 */
                .c1
                    padding 10px 0 0 19px
                    flex 1
                    display flex
                    flex-direction column
                    justify-content flex-start
                    align-items flex-start
                    .name
                        margin-top: 2px
                        font-size: 15px;
                        font-family: PingFangSC-Regular;
                        color: rgba(85, 85, 85, 1);
                        line-height: 23px;
                    .time
                        font-size: 13px;
                        font-family: PingFangSC-Regular;
                        color: #bbb;
                        line-height: 19px;
                        margin-top: 6px
                    .pay
                        font-size: 13px;
                        font-family: PingFangSC-Regular;
                        color: #bbb;
                        line-height: 19px;
                    .status
                        font-size: 16px;
                        font-family: PingFangSC-Regular;
                        color: rgba(85, 85, 85, 1);
                        line-height: 22px;
                        margin-left:70%
                        margin-top: -6px
                /* 支付信息 */
                .c2
                    width 80px
                    display flex
                    flex-direction column
                    justify-content space-around
                    align-items right

    .slide-enter-active, .slide-leave-active
        transition all .3s

    .slide-enter, .slide-leave-to
        transform translate3d(100%, 0, 0)

</style>