<template>
    <transition name="slide">
        <div class="orderRecord">
            <MyHeader :title="title"></MyHeader>
            <div class="items">
                <Srcoll>
                <div class="line">
                    <span class="title">
                    <font color="black">房费</font>
                    </span>
                    <span class="detail">
                    <font color="black">￥{{ house }}</font>
                    </span>
                </div>
                <div class="line">
                    <span class="title">
                    <font color="black">酒水</font>
                    </span>
                    <span class="detail">
                    <font color="black">￥{{ wine }}</font>
                    </span>
                </div>
                <div class="line">
                    <span class="title">
                    <font color="black">其他</font>
                    </span>
                    <span class="detail">
                    <font color="black">￥{{ other }}</font>
                    </span>
                </div>
                <div class="line">
                    <span class="title">
                    <font color="black">赠送</font>
                    </span>
                    <span class="detail">
                    <font color="black">￥{{ send }}</font>
                    </span>
                </div>
                <div class="line">
                    <span class="title">
                    <font color="black">折扣</font>
                    </span>
                    <span class="detail">
                    <font color="black">￥{{ down }}</font>
                    </span>
                </div>
                <div class="total">
                    <span class="title2">
                    <font color="black">合计</font>
                    </span>
                    <span class="detail2">
                    <font color="black">￥{{ total }}</font>
                    </span>
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
                title: "详细订单",
                house: '500',
                wine: '300',
                other: '100',
                send: '66',
                down: '-12',
                total: '888'
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
        .items
            position fixed
            top 58px
            left 0
            right 0
            bottom 1px
            overflow hidden
            background: #f5f5f5
            .line
                background: white
                border-bottom 1px solid rgba(238,237,237,1)
                height 50px
                font-color black
                display flex
                align-items center
                .title
                    font-size 18px
                    margin-left 15px
                .detail
                    font-size 18px
                    margin-left 220px
                .cost
                    font-size 18px
                    margin-left 210px

        .total
            position relative
            font-size 18px
            height 40px
            background: white
            padding-top 10px
            .title2
                margin-top 10px
                font-size 18px
                margin-left 155px
            .detail2
                margin-top 10px
                font-size 18px
                margin-left 80px
</style>