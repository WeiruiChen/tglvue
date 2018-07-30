<template>
    <div class="scores">
        <div>
            <h2 class="title">客户综合评价</h2>
            <div class="score">
                <span class="name">环境感受:</span>
                <Star :point="scores[0]"></Star>
            </div>
            <div class="score">
                <span class="name">视觉感受:</span>
                <Star :point="scores[1]"></Star>
            </div>
            <div class="score">
                <span class="name">服务感受:</span>
                <Star :point="scores[2]"></Star>
            </div>
        </div>
    </div>
</template>

<script>
    import Star from '../../base/star/star'
    //import {domain} from "../../const/img"
    export default {
        props:{
            scores:{
                type:Array,
                default:null
            }
        },
        components:{
            Star
        },
        data(){
            return{
                //showManager:false,
                //imgPath:domain,
            }
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
        /*
        .manager-avatar
            margin-top 43px
            margin-left 30px
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
        */
</style>