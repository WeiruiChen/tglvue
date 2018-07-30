<template>
    <div class="my">
        <scroll>
        <div>
        <!--头像-->
        <div class="header">
            <div class="info">
                <img @click="turn('/userInfo')" class="avatar" :src="user.avatar" height="78" width="78"/>
                <p class="name">{{user.userName}}</p>
                <div class="levelVX">
                    <img src="./zs.png" width="25px" height="25px">
                    <span @click="turn('/post?name=jb')" class="level1">{{user.levelName}}</span>
                </div>
                <div class="growth"><p class="growthp">我的成长值：{{user.points}}</p></div>
        <!--    <div class="growth"><p class="growthp">我的成长值：{{user.points}}</p></div>  -->
                <div class="core"><p class="corep">我的积分：{{user.growth}}</p></div>
        <!--    <div class="core"><p class="corep">我的积分：{{user.growth}}</p></div>  -->
            </div>
            <img src="./qr.png" class="qr" @click="showQrImg" alt="">
        </div>

        <div class="grow_value">
            <p class="grow_value1">
                <span style="color:#700dda;font-size:14px;">{{user.growth}} </span>
                <span style="color:#e6e6e6;font-size:14px;">/{{max}}</span>
            </p>
            <progress v-bind:max="max" v-bind:value="user.growth" ></progress>
            <!-- <progress   max={{max}} value={{growth}} ></progress> -->
            <div class="dengji1">
                <img v-bind:src="vip0" class="dengji" alt="" width="10px" height="10px">
                <img v-bind:src="vip1" class="dengji" alt="" width="10px" height="10px">
                <img v-bind:src="vip2" class="dengji" alt="" width="10px" height="10px">
                <img v-bind:src="vip3" class="dengji" alt="" width="10px" height="10px">
                <img v-bind:src="vip4" class="dengji" alt="" width="10px" height="10px">
                <img v-bind:src="vip5" class="dengji2" alt="" width="17px" height="10px">
            </div>
            <p class="grow_value2">
                距下一等级还需<span style="font-size:18px;">{{surp}}</span>成长值
            </p>
        </div>

         <!--六个功能-->
        

         <div class="menu">
            <div class="item" @click="turn('/pay')">
                <img src="./maidan.png" alt="" class="zs">
                <p class="six_item_font"  @click="turn('/pay')">我要买单</p>
            </div>

            <div class="gap"></div>

            <div class="item" @click="turn('/orderRecord')">
                <img src="./xiaofeijilu.png" alt="" class="zs">
                <p class="six_item_font" @click="turn('/orderRecord')">消费记录</p>
            </div>
            <div class="item" @click="turn('/post?name=fx')">
                <img src="./fenxiang.png" alt="" class="zs">
                <p class="six_item_font" @click="turn('/post?name=fx')">分享模式</p>
            </div>
            <div class="item" @click="turn('/user')">
                <img src="./wodefenxiang.png" alt="" class="zs">
                <p class="six_item_font" @click="turn('/user')">我的分享</p>
            </div>
            <div class="gap"></div>
            <div class="item"  @click="turn('/post?name=hz')">
                <img src="./hezuo.png" alt="" class="zs">
                <p class="six_item_font" @click="turn('/post?name=hz')">我要合作 </p>
            </div>
            <div class="item1">
                <a href="tel:0731-82274665" >
                <img src="./tousu.png" alt="" class="zs">
                <p class="six_item_font">投诉建议</p>
            </a>
            </div>
            <div class="gap1"></div>
         </div>
        </div>
        </scroll>
        <router-view ></router-view>
        <div class="qr-img" @click="showQrImg" v-show="qrImgShow">
            <vue-q-art v-if="config" :config="config"></vue-q-art>
        </div>
        <router-view></router-view>
        <order></order>
        <!--
        <div class="form" :model="temp" id="tan" >
        <div id="light" class="white_content">
            <table style="text-align: center;">
                <div class="zhuce">
                    <div class="zhuce_span"><span style="color: black;font-size: 24px" >注册</span></div>
                    <div class="text">
                        <span>手机号</span>
                        <input type="text" placeholder="请输入手机号" class="input" v-model="temp.phone" required>
                    </div>
                    
                    <div class="text">
                        <span>验证码</span>
                        <input type="text" placeholder="请输入验证码" class="input" style="width:55%">
                        <span @change="disDate" @click="getUserCode">
                            <span :disabled="isDisable" v-if="canClick" class="yzm"><input type="button" v-bind:value="time+'秒后重新获取'"></span>
                            <span :disabled="isDisable" v-if="!canClick" class="yzm"><input type="button" value="获取验证码"></span>
                        </span>
                    </div>
                    
                </div>
                
                <div id="codes" class="inputs">
                    <label for="">
                        <span style="width: 120px">验证:</span>
                    </label>
                    <input style="width: 100px" placeholder="请输入验证码"  type="text" v-model="temp.code">
                    <button style="width: 100px;outline-width:0" class="code" @change="disDate" @click="getUserCode">
                        <span :disabled="isDisable" v-if="canClick">{{time+'秒后重新获取'}}</span>
                        <span :disabled="isDisable" v-if="!canClick">获取验证码</span>
                    </button>
                </div>
            </table>
            <div style="padding-top: 5px;padding-left: 110px; ">
                <button style="width: 90px;" class="qd" @click = "getUpdateUser">提交</button>
            </div>
        </div>
        <div id="fade" class="black_overlay"></div>
        </div>
        -->
    </div>
</template>

<script>
    import scroll from '../../base/scroll/scroll'
    import { getUser,getUserId,getCode,updatePhone,getPhone  } from '../../api/my'
    import {domain} from "../../const/img"
    import VueQArt from 'vue-qart'
    import {WX_REDIRECT_URI} from "../../const/wx";
    import order from '../../components/order/order'

    export default {
        created(){
            this.getUser()
            this.getUserPhone()
        },
        data(){
            return{
                isvip0:false,
                isvip1:false,
                isvip2:false,
                isvip3:false,
                isvip4:false,
                isvip5:false,
                vip0:'http://pbr2drfuy.bkt.clouddn.com/Vip0.png',
                vip1:'http://pbr2drfuy.bkt.clouddn.com/Vip1%20%288%29.png',
                vip2:'http://pbr2drfuy.bkt.clouddn.com/Vip2%20%282%29.png',
                vip3:'http://pbr2drfuy.bkt.clouddn.com/Vip3%20%282%29.png',
                vip4:'http://pbr2drfuy.bkt.clouddn.com/Vip4%20%282%29.png',
                vip5:'http://pbr2drfuy.bkt.clouddn.com/vip5.png',
                max:2000000,
                surp:0,
                temp:{
                    phone:'',
                    code:''
                },
                user:{},
                userCode:{},
                userPhone:{},
                imgPath:domain,
                qrImgShow:false,
                config: {
                    value: '',
                    imagePath: './examples/assets/logo.png',
                    filter: 'color'
                },
                isDisable:false,
                disabled: false,
                isDisplay:false,
                time:60,
                canClick: false
            }
        },
        methods:{
            level_sele(){
                this.vip0=this.isvip0?'http://pbr2drfuy.bkt.clouddn.com/Vip0.png':'http://pbr2drfuy.bkt.clouddn.com/Vip0%20%281%29.png',
                this.vip1=this.isvip1?'http://pbr2drfuy.bkt.clouddn.com/Vip1%20%288%29.png':'http://pbr2drfuy.bkt.clouddn.com/Vip0%20%281%29.png',
                this.vip2=this.isvip2?'http://pbr2drfuy.bkt.clouddn.com/Vip2%20%282%29.png':'http://pbr2drfuy.bkt.clouddn.com/Vip0%20%281%29.png',
                this.vip3=this.isvip3?'http://pbr2drfuy.bkt.clouddn.com/Vip3%20%282%29.png':'http://pbr2drfuy.bkt.clouddn.com/Vip0%20%281%29.png',
                this.vip4=this.isvip4?'http://pbr2drfuy.bkt.clouddn.com/Vip4%20%282%29.png':'http://pbr2drfuy.bkt.clouddn.com/Vip0%20%281%29.png',
                this.vip5=this.isvip5?'http://pbr2drfuy.bkt.clouddn.com/vip5.png':'http://pbr2drfuy.bkt.clouddn.com/Vip0%20%281%29.png'

            },
            getUser(){
                getUser().then(res => {
                    this.user = res.data;
                    this.surp=this.max-this.user.growth
                }).catch(error=>{
                    console.log(error)
                })
            },
            turn(path){
                this.$router.push({
                    path:`${path}`
                })
            },
            showQrImg(){
                this.config ={
                    value: WX_REDIRECT_URI+"?state="+this.user.userId,
                    imagePath: require('../../static/logo.png'),
                    filter: 'color'
                }
                this.qrImgShow = !this.qrImgShow
            },
            getUserId(){
                getUserId().then(res=>{
                    this.temp=res.data
                })
            },
            disDate(){
                if(!this.isDisable){
                    this.isDisable = 'disabled'
                }else {
                    this.isDisable = false
                }
            }
        },
        getUserCode(){
                console.log(nihao)
                /*if(this.user.phone == this.temp.phone){
                    //alert("当前手机号码不需要验证!验证码不用填写")
                    alert("请输入预定号码!")
                    this.disabled=true
                }else{*/
                    let phone = this.temp.phone
                    let isPhone = /^1[34578]\d{9}$/
                    if(isPhone.test(phone)){
                        let me = this
                        me.canClick = true
                        let interval = window.setInterval(function() {
                            if ((me.time--) <= 0) {
                                me.time = 60
                                me.canClick = false
                                window.clearInterval(interval)
                            }
                        }, 1000)
                        this.disabled=false
                        let params = {"phone":this.temp.phone}
                        getCode(params).then(res => {
                            this.userCode = res.data
                        }).catch(error =>{
                            console.log(error)
                        })
                    }
                    else{
                        alert("您的号码格式不正确或不合法输入！请重新输入：")
                    }

                //}
            },
            getUpdateUser() {
                if(this.temp.phone == ""){
                    alert("请输入手机号码")
                }
                else if(this.temp.code ==""){
                    alert("请(获取)输入验证码")
                }else{
                    updatePhone(this.temp).then(res => {
                        this.temp = res.data
                        alert("注册成功!");
                        this.closeDialog()
                    })
                }

            },
            getUserPhone(){
                getPhone().then(res=>{
                    this.userPhone=res.data
                    if(this.userPhone.phone == null || this.userPhone.phone == ""){
                        this.isDisplay=true
                        document.getElementById('light').style.display='block'
                        document.getElementById('fade').style.display='block'
                    }else{
                        this.isDisplay=false
                        document.getElementById('light').style.display='none'
                        document.getElementById('fade').style.display='none'
                    }
                })
            },
            beginTime(){
                if(this.timeCount===0){
                    window.clearTimeout(this.ct);
                    this.canClick = false;
                }
                this.ct = setTimeout(()=>{
                    this.timeCount=this.timeCount -1
                },1000)
            },
        closeDialog(){
                this.temp=''
            },
            openDialog(){
                document.getElementById('light').style.display='block';
                document.getElementById('fade').style.display='block'
            },
        components:{
            scroll,VueQArt,order
        }
    }
</script>

<style scoped lang="stylus">
    .levelVX
        display fixed
        .level1
            height 20px
            color #C19F6A
            margin-top 20px
    .inputs
        border-bottom 1px solid rgba(238,237,237,1)
        height 40px
        display flex
        align-items flex-end
        justify-content start
        align-items center
        label
            display flex
            align-items center
            margin-left 15px
            width 25%
            span
                font-size:18px
                font-family:PingFangSC-Regular
                color:rgba(198,164,114,1)
                line-height:25px
                margin-left 3px
            img
                width 22px
                height 22px
        input,select
            outline none
            height:22px;
            font-size:16px;
            font-family:HiraMaruPro-W4;
            color:rgba(85,85,85,1);
            line-height:24px;
        select
            margin-bottom 3px
    .zhuce
        width:100%;
        margin-top:20px;
    .zhuce_span
        height 50px
        width 100%
        padding-top 30px
        margin-top -43px
        
    .zhuce .text
    {
        line-height:42px;
        padding:3px 10px;
        border-bottom:1px solid #ddd;
        color:#000000;
        display:block;
        overflow:hidden;
    }
    .zhuce .text span
    {
        width:20%;
        float:left;
        text-align:center;
    }
    .zhuce .text .input
    {
        width:80%;
        height:42px;
        font-family:"Microsoft Yahei", "Calibri";
        border:0;
        float:left;
        text-indent:20px;
        outline-width:0;
    }
    .zhuce .text .yzm
    {
        width:25%;
        text-align:left;
    }
    .zhuce .text .yzm input
    {
        border:0;
        padding:3px;
        font-family:"Microsoft Yahei", "Calibri";
        background-color:#700DDA;
        color:#fff;
        cursor:pointer;
        font-size:12px;
    }
    .my
        position fixed
        top 0
        left 0
        right 0
        bottom 60px
        .header
            height:190px
            background:#700DDA
            border:1px solid rgba(151,151,151,1)
            display flex
            justify-content center
            width:100%
            .qr
                width 42px
                height 42px
                position absolute
                top 18px
                right 18px
         
            .info
                text-align center
                margin-top 20px
                .avatar
                    width:60px
                    height:60px    
                    border-radius:100%;                
                .name
                    margin-top:10px
                    font-size:24px
                    font-family:HiraMaruPro-W4
                    color:rgba(250,250,250,1)
                    line-height:36px
                    width:1000px
                
                .growthp
                    float:right
                    padding-right:10px
                .corep
                    padding-left:10px

                .growth
                    margin-top:10px
                    font-size:14px
                    font-family:HiraMaruPro-W4
                    color:rgba(248,248,248,1)
                    float:left
                    width:50%
                    border-right:1px solid #ffffff
                .core
                    margin-top:10px
                    font-size:14px
                    font-family:HiraMaruPro-W4
                    color:rgba(248,248,248,1)
                    float:left

                .zs
                    width 18px
                    height 18px
                    vertical-align middle
                    margin-right  7px
                .level
                    font-size:14px
                    font-family:PingFangSC-Regular
                    color:rgba(198,164,114,1)
                    line-height:20px
        .account
            width:342px
            height:92px
            margin 0 auto
            position relative
            top -65px
            background:rgba(255,255,255,1)
            box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5)
            border-radius:10px
            display flex
            align-items center
            justify-content center
            .item
                display flex
                flex-direction column
                height 60%
                justify-content space-around
                width 30%
                align-items center
                .name
                    font-size:16px
                    font-family:PingFangSC-Regular
                    color:rgba(169,167,164,1)
                    line-height:22px
                .amount
                    font-size:18px
                    font-family:PingFangSC-Regular
                    color:rgba(85,85,85,1)
                    line-height:25px

            .fls
                width:40%
                height:36px
                background:rgba(255,210,19,1)
                box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5)
                border-radius:15px
                text-align center
                z-index 100
                span
                    font-size:18px
                    font-family:HiraMaruPro-W4
                    color:rgba(255,255,255,1)
                    line-height:36px
            .line
                position absolute
                width 90%
                opacity:0.9
                border:1px solid rgba(209,205,205,1)

        .menu
            padding-top 30px
            background:rgba(244,244,244,1)

            .item
                width 100%
                height 45px
                background:rgba(255,255,255,1)
                box-shadow:0 3px 5px rgba(0,0,0,0.5)
            .six_item_font
                font-size:18px
                font-family:HiraMaruPro-W4
                color:rgba(85,85,85,1)
                padding-left:20px
                padding-top:15px
                float:left
            .gap
                margin-top:0px
                background:rgba(244,244,244,1)
                height:30px
                width:100%

             .item1
                width 100%
                height 45px
                background:rgba(255,255,255,1)
            .gap1
                margin-top:0px
                background:rgba(244,244,244,1)
                height:200px
                width:100%
  

    .grow_value
        height:80px
        width:100%
        margin-top:20px
        padding-left:4%
        .dengji1
            display relative
            margin-top 2px
            margin-bottom -8px
            .dengji
                margin-right 59px
            .dengji2
                width 10px
                height 10px
    .grow_value1{
         text-align:center; 
    }
    .grow_value2{
         margin-top:12px;
         color:black;
         font-size:14px;
    }

    progress {   
        display: inline-block;   
        width: 92%;   
        height: 7px;   
        border: 0px solid #ffffff;   
    }   
    progress::-moz-progress-bar { background: #0064B4; border-radius:15px;}   
    progress::-webkit-progress-bar { background: #e6e6e6; border-radius:15px;}   
    progress::-webkit-progress-value  { background: #700dda;border-radius:15px; }  

    .zs 
        float:left
        margin-top:9px
        margin-left:20px
        height:25px
        width:25px

    .qr-img
        position fixed
        top 0
        left 0
        right  0
        bottom 0
        display flex
        justify-content center
        align-items center
        background: rgba(0,0,0, 0.9);
        img
            width 60%
    .white_content {
        display: relative;
        position: absolute;
        top: 24%;
        left: 5%;
        width: 80%;
        padding: 20px;
        background-color: #ffffff;
        border-radius:10px;
        z-index:1002;
        overflow: auto;
    }
    .code {
        height:30px;
        width:100px;
        background-color: #700DDA;
        color: #ffffff;
        text-align: center;
        text-decoration: none;
        font-size: 14px;
        margin:0 auto;
    }
    .qd {
        outline-width:0;
        border-radius: 20px;
        background-color: #700DDA;
        border: none;
        color: #ffffff;
        padding: 9px 9px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin:6px auto;
    }
    .qx {
        border-radius: 28px;
        background-color: #be5d4f;
        border: none;
        color: #ffffff;
        padding: 10px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin:0 auto;
    }
</style>