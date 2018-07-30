<template>
    <transition name="slide">
    <div class="userInfo">
        <MyHeader :title="title"></MyHeader>
        <div class="form" :modal="temp">

            <div class="avatar">
                <span>头像</span>
                <img :src="temp.avatar" alt="" style="margin-right: 15px">
            </div>

            <div class="name">
                <span>昵称</span>
                <input type="text" v-model="temp.name" style="margin-right: 15px">
            </div>

            <div class="name" style="text-align: center">
                <span>性别</span>
                    <span style="margin-right: 15px" v-model="temp.sex">
                    <input type="radio" value="1" name="sex" checked> 男 &nbsp;&nbsp;&nbsp;
                    <input type="radio" value="2" name="sex"> 女
                    </span>
            </div>

            <div class="name" >
                <span>电话</span>
                <input type="text" v-model="temp.phone" style="margin-right: 15px">
            </div>

        </div>
        <div class="button" @click="getUpdateUser()">
            提交
        </div>
    </div>
    </transition>
</template>

<script>
    import MyHeader from '../components/header/header'
    import { getUserId, getUpdateByUser } from '../api/my'

    export default {
        created(){
          this.getUserId()
        },
        components:{
            MyHeader,scroll
        },
        data(){
            return {
                title:'个人资料',
                user:{},
                temp: {
                    name:'',
                    sex:'',
                    phone:'',
                    avatar:'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=d109aa168dcb39dbdec06156e01409a7/2f738bd4b31c8701ad467c1a2b7f9e2f0608ff5e.jpg'
                },
            }
        },
        methods:{
            getUserId(){
                getUserId().then(res=>{
                    this.temp=res.data
                })
            },
            getUpdateUser() {
                getUpdateByUser(this.temp).then(res => {
                    this.temp = res.data
                    alert("修改成功!");
                    this.getUserId()
                })
            }
        },
    }
</script>

<style scoped lang="stylus">
    .slide-enter-active, .slide-leave-active
        transition all .3s

    .slide-enter, .slide-leave-to
        transform translate3d(100%, 0, 0)

    .userInfo
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        background-color #f5f5f5
        .form
            background #FFFFFF
            padding 0 15px
            //margin-top 20px
            padding-bottom 0px
            div
                display flex
                align-items center
                justify-content space-between
                border-bottom 1px solid rgba(223,220,220,1)
                height 54px
                font-color black
                &.avatar
                    height 72px
                    align-items center
                    img
                        width:50px;
                        height:50px;
                        border-radius 50px
                span
                    font-size:18px;
                    font-family:HiraMaruPro-W4;
                    color:rgba(102,102,102,1);
                    line-height:27px;
                    // background-color blue
                input
                    text-align right
                    outline none
                    border none
                    font-size:18px;
                    font-family:PingFangSC-Regular;
                    color:rgba(102,102,102,1);
                    line-height:25px;
                    // background-color red
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
</style>