<template>
    <transition name="slide">
        <div class="order">
            <scorll>
                <div>

                <!---- 头部及logo ---->
                    <div class="header">
                        <img class="logo" src="./logo.png" alt="">
                    </div>

                <!---- 拨打打电话 ---->
                    <div class="phone">
                        <div class="left">
                            <img src="./phone.png" alt="">
                            <a href="tel:0731-82275559">0731-82275559</a>
                        </div>
                        <div class="right">
                            <img src="./phone.png" alt="">
                            <a href="tel:0731-12345678">0731-12345678</a>
                        </div>
                    </div>

                <!---- 预定信息 ---->
                    <div class="form" :model="temp">

                    <!-- 场所 -->
                        <div class="inputs">
                            <label for="">
                                <img src="./house.png" alt="">
                                <span>场所:</span>
                            </label>
                            <span id="showBank" @click="ioss()">
                                <font color="black">66666666</font>
                            </span>
                            <!-- <select size="1"  v-model="temp.sellerId">
                                <option v-for="(item,index) in list" :key="index" :value="item.sellerId">{{item.name}}</option>
                            </select>-->
                        </div>

                    <!-- 电话 -->
                        <div class="inputs">
                            <label for="">
                                <img src="./mobile.png" alt="">
                                <span>电话:</span>
                            </label>
                            <input type="number" v-model="temp.phone" required>
                        </div>

                    <!-- 人数 -->
                        <div class="inputs">
                            <label for="">
                                <img src="./man.png" alt="">
                                <span>人数:</span>
                            </label>
                            <input type="text" v-model="temp.people">
                        </div>

                    <!-- 时间 -->
                        <div class="inputs">
                            <label for="">
                                <img src="./time.png" alt="">
                                <span>时间:</span>
                            </label>
                            <div>
                                <input type="datetime-local" style="width:200px" class="time_input">
                            </div>
                        </div>

                    <!-- 备注 -->
                        <div class="inputs">
                            <label for="">
                                <img src="./write.png" alt="">
                                <span>备注:</span>
                            </label>
                            <input type="text" v-model="temp.info">
                        </div>

                    <!-- 验证 -->
                        <div id="codes" class="inputs">
                            <label for="">
                                <img src="./write.png" alt="">
                                <span style="width: 120px">验证:</span>
                            </label>
                            <input style="width: 100px" placeholder="请输入验证码"  type="text" v-model="temp.code">
                            <button style="width: 100px;outline-width:0" class="code" @change="disDate" @click="getUserCode">
                                <span :disabled="isDisable" v-if="canClick">{{time+'秒后重新获取'}}</span>
                                <span :disabled="isDisable" v-if="!canClick">获取验证码</span>
                            </button>
                        </div>

                    </div>

                <!---- 提交按钮 ---->
                    <div class="button" @click="OrderCreate()">
                        提交
                    </div>

                    <div class="space10"></div>

                </div>
            </scorll>
        </div>

    </transition>
</template>

<script src="iosselect/src/iosSelect.js"></script>
<script>
    import Scorll from '../../base/scroll/scroll'
    import { getSellerName,Create,getPhone,getCode } from '../../api/order'
    import { mapGetters } from 'vuex'

    

    export default {
        data(){
            return{
                time: 60,
                canClick: false,
                list:[{
                    sellerId:'2',
                    name:'bbb',
                },
                {
                    sellerId:'1',
                    name:'aaa',
                },
                {
                    sellerId:'3',
                    name:'ccc',
                }],
                temp: {
                    sellerId:null,
                    info: '',
                    phone:'',
                    people:'',
                    HH:'01',
                    mm:'00',
                    code:''
                },
                isDisable:false,
                user:{},
                userCode:{},
                disabled: false,
                isDisplay:false
            }
        },
        computed:{
            ...mapGetters([
                'seller'
            ])
        },
        components:{
            Scorll
        },
        created() {
            this.getName()
            if(this.seller){
                this.temp.sellerId = this.seller.sellerId
            }
            this.getUserPhone()
        },
        methods:{
            getName(){
                if (!this.list) {
                    getSellerName().then(res => {
                        this.list = res.data
                    })
                }
            },
            getT(){
                alert("ss");
            },
            getUserPhone(){
                getPhone().then(res=>{
                    this.user=res.data
                    let code=document.getElementById("codes")
                    if(this.user.phone == null || this.user.phone == ""){
                        this.isDisplay=true
                        code.style.display=" "
                    }else{
                        this.temp.phone=this.user.phone
                        this.isDisplay=false
                        code.style.display="none"
                    }
                })
            },
            getUserCode(){
                
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
            OrderCreate(){
                if(this.temp.phone != this.user.phone && !this.isDisplay){
                    alert("您将预定号码修改为："+this.temp.phone+" ,请对此号码进行验证!")
                    let code=document.getElementById("codes")
                    this.isDisplay=true
                    code.style.display=""
                }else{
                    Create(this.temp).then(res => {
                        this.temp = res.data
                        alert("预定成功!")
                        this.temp=''
                    }).catch(error=>{
                        alert(error)
                    })
                }

            },
            disDate(){
                if(!this.isDisable){
                    this.isDisable = 'disabled'
                }else {
                    this.isDisable = false
                }
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
        }
    }
</script>

<style scoped lang="stylus">
    .time_input
        background #ffffff
    select
        outline none
        border-radius 4px
    .order
        position fixed
        top 0
        left 0
        right 0
        z-index 1
        background #F8F8F8
        height 100%
        min-height 100%
    /**** 头部及logo ****/
        .header
            display flex
            align-items center
            justify-content center
            height 160px
            // background:rgba(120,120,120,1)
            background #700dda
            border:1px solid rgba(151,151,151,1)
            .logo
                width 134px
                height 113px

    /**** 拨打电话 ****/
        .phone
            display flex
            justify-content center
            position relative
            top -17px
            .left
                width:44%
                height:44px
                background:rgba(255,255,255,1)
                box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5)
                display flex
                justify-content center
                align-items center
                border-radius 10px
                margin-top 0px
                margin-left 1%
                img
                    width:18px
                    height:18px
                a
                    font-size:16px;
                    font-family:HiraMaruPro-W4;
                    color:#C6A472;
                    line-height:20px;
            .right
                width:44%
                height:44px
                margin-left 3%
                background:rgba(255,255,255,1)
                box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5)
                display flex
                justify-content center
                align-items center
                border-radius 10px
                margin-top 0px
                img
                    width:18px
                    height:18px
                a
                    font-size:16px;
                    font-family:HiraMaruPro-W4;
                    color:#C6A472;
                    line-height:20px;

    /**** 预定信息 ****/
        .form
            position relative
            width 100%
            margin 0 auto
            background:rgba(255,255,255,1);
        /*详细信息框*/
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

    /**** 提交按钮 ****/
        .button
            margin 0 auto
            width:331px;
            height:49px;
            // background:rgba(85,85,85,1);
            background #700dda
            // box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5);
            opacity:0.7826000000000001;
            border:1px solid rgba(151,151,151,1);
            font-size:20px;
            font-family:HiraMaruPro-W4;
            color:rgba(255,255,255,1);
            line-height:49px;
            text-align center
            margin-top 18px

    .slide-enter-active, .slide-leave-active
        transition all .3s

    .slide-enter, .slide-leave-to
        transform translate3d(100%, 0, 0)

    .code {
        border-radius: 5px;
        // background-color: #8ebe27;
        background #700dda
        border: none;
        color: #ffffff;
        padding: 8px 8px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 10px;
        margin:0 auto;
    }

    .space10{
        width:10px;
    }

</style>