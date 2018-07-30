<template>
    <transition name="slide">
    <div class="pay">
        <MyHeader :title="title"></MyHeader>
        <div class="content">
        <div class="form">
           <h3>付款金额</h3>
          <div class="inputs">
              <span class="money">￥</span>
              <input @keyup="handleInput"  v-model="number"  type="number" autofocus="autofocus" id="myText">
          </div>
              <hr size="1" width="90%">
        </div>
        <div class="points">
          <span>可用积分{{points}}元,联系驻场经理抵扣</span>
        </div>
        <div class="button">
            <span>付款</span>
        </div>
        </div>
    </div>
    </transition>
</template>

<script>
    import MyHeader from '../../components/header/header'

    window.onload = function() {
        document.getElementById("myText").focus();
    };

    export default {
        components:{
            MyHeader
        },
        data(){
            return {
                title:"我要买单",
                points:0,
                number:''
            }
        },methods:{
            handleInput(){

                let regStrs = [
                    ['^0(\\d+)$', '$1'], //禁止录入整数部分两位以上，但首位为0
                    ['[^\\d\\.]+$', ''], //禁止录入任何非数字和点
                    ['\\.(\\d?)\\.+', '.$1'], //禁止录入两个以上的点
                    ['^(\\d+\\.\\d{2}).+', '$1'] //禁止录入小数点后两位以上
                ]
                for(let i=0; i<regStrs.length; i++){
                    var reg = new RegExp(regStrs[i][0]);
                    this.number = this.number.replace(reg, regStrs[i][1]);
                }
            }
        }
    }
</script>

<style scoped lang="stylus">
    .pay
        background #f5f5f5
        position fixed
        top 0
        left  0
        right 0
        bottom 0
        .content
            padding 0 0
            .form
                overflow hidden
                background white
                height 187px
                margin 0 auto
                h3
                    margin-top 44px
                    margin-left 19px
                    font-size:18px;
                    font-family:PingFangSC-Regular;
                    color:rgba(102,102,102,1);
                    line-height:25px;
                .inputs
                    margin-top 21px
                    display flex
                    align-items center
                    justify-content left
                    .money
                        margin 0 12px 0 28px
                        font-size:24px;
                        font-family:PingFangSC-Regular;
                        color:#700dda;
                        line-height:33px;
                        font-weight: bold
                    input
                        padding-left 20px
                        width:224px;
                        height:43px;
                        background:rgba(255,255,255,1);
                        border-radius:8px;
                        outline none
            .points
                padding-left 20px
                margin-top 21px
                span
                    font-size:14px;
                    font-family:PingFangSC-Regular;
                    color:rgba(102,102,102,1);
                    line-height:20px;
            .button
                text-align center
                float right
                margin-top 30px
                margin-right 44px
                width:84px;
                height:42px;
                background:#700dda;
                box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5);
                border-radius:8px;
                span
                    line-height 42px
                    font-size:18px;
                    font-family:PingFangSC-Regular;
                    color:rgba(255,255,255,1);
    .slide-enter-active, .slide-leave-active
    transition all .3s

    .slide-enter, .slide-leave-to
        transform translate3d(100%, 0, 0)
</style>