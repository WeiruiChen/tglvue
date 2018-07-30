<template>
    <transition name="slide">
    <div class="voucher">
        <MyHeader :title="title"></MyHeader>
        <div class="items">
            <scroll>
                <div class="content">
                    <div class="item" v-for="(item,index) in voucherList" :key="index">
                        <div class="top">
                            <span class="name">福利券</span>
                            <span class="status" v-if="item.isUse === 0">未使用</span>
                            <span class="status" v-else-if="item.isUse === 1">已使用</span>
                            <span class="status" v-else-if="item.isUse === 2">已过期</span>
                        </div>
                        <div class="content">
                            <span>{{item.vContent}}</span>
                        </div>
                        <div class="bottom">
                            <span>到期时间：{{item.time}}</span>
                        </div>
                    </div>
                </div>
            </scroll>
        </div>
    </div>
    </transition>
</template>

<script>
    import MyHeader from '../../components/header/header'
    import Scroll from '../../base/scroll/scroll'
    import { getVoucher } from '../../api/voucher'

    export default {
        created(){
          this.getVoucherList()
        },
        components:{
            MyHeader,Scroll
        },
        data(){
            return {
                title:"福利社",
                voucherList:null
            }
        },
        methods: {
            getVoucherList() {
                getVoucher().then(res => {
                    this.voucherList = res.data
                })
            },
        }
    }
</script>


<style scoped lang="stylus">
    .voucher
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        background: #F7F7F7
        .items
            padding 43px 23px
            position fixed
            top 75px
            left 0
            right 0
            bottom 0
            .item
                display flex
                flex-direction column
                justify-content space-between
                height:111px;
                background:rgba(255,255,255,1);
                box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5);
                .top
                    padding 0 16px 0 22px
                    align-items center
                    justify-content space-between
                    display flex
                    height 35px
                    border-bottom 1px solid rgba(231,229,229,1)
                    .name
                        font-size:18px;
                        font-family:PingFangSC-Regular;
                        color:rgba(85,85,85,1);
                        line-height:25px;
                    .status
                        font-size:13px;
                        font-family:HiraMaruPro-W4;
                        color:rgba(85,85,85,1);
                        line-height:20px;
                .content
                    padding-left 22px
                    font-size:20px;
                    font-family:HiraMaruPro-W4;
                    color:rgba(198,164,114,1);
                    line-height:30px;
                .bottom
                    display flex
                    justify-content flex-end
                    span
                        font-size:12px;
                        font-family:PingFangSC-Regular;
                        color:rgba(154,153,153,1);
                        line-height:17px;
                        padding-right 11px
            .disable
                color:rgba(154,153,153,1);


    .slide-enter-active, .slide-leave-active
        transition all .3s

    .slide-enter, .slide-leave-to
        transform translate3d(100%, 0, 0)
</style>