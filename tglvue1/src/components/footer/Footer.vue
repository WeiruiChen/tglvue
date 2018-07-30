<template>
    <div class="footer">
        <div class="item"  @click="turn('/home'),funhome(this)">
            <img  v-bind:src="homepath" alt="" >
            <h3 v-show="!ishome" class="color_notchange">首页</h3>
            <h3 v-show="ishome" class="color_change">首页</h3>
        </div>
        <div class="item"  @click="turn('/act'),funac(this)">
            <img v-bind:src="activepath" alt="">
            <h3 v-show="!isactive" class="color_notchange">活动中心</h3>
            <h3 v-show="isactive" class="color_change">活动中心</h3>
        </div>
        <div class="item" @click="turn('/comment'),funco(this)">
            <img v-bind:src="commentpath" alt="">
            <h3 v-show="!iscomment" class="color_notchange">酒后吐真言</h3>
            <h3 v-show="iscomment" class="color_change">酒后吐真言</h3>
        </div>
        <div class="item" @click="turn('/my'),funme(this)">
            <img v-bind:src="mepath" alt="">
            <h3 v-show="!isme" class="color_notchange">我的</h3>
            <h3 v-show="isme" class="color_change">我的</h3>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                ishome:true,
                isactive:false,
                iscomment:false,
                isme:false,
                homepath:"http://pbr2drfuy.bkt.clouddn.com/home_sele.png",
                activepath:"http://pbr2drfuy.bkt.clouddn.com/active.png",
                commentpath:"http://pbr2drfuy.bkt.clouddn.com/comment.png",
                mepath:"http://pbr2drfuy.bkt.clouddn.com/me.png",
            }
        },

        methods:{
            change(){
                this.homepath=this.ishome?"http://pbr2drfuy.bkt.clouddn.com/home_sele.png":"http://pbr2drfuy.bkt.clouddn.com/home.png",
                this.activepath=this.isactive?"http://pbr2drfuy.bkt.clouddn.com/act_sele.png":"http://pbr2drfuy.bkt.clouddn.com/active.png",
                this.commentpath=this.iscomment?"http://pbr2drfuy.bkt.clouddn.com/comment_sele.png":"http://pbr2drfuy.bkt.clouddn.com/comment.png",
                this.mepath=this.isme?"http://pbr2drfuy.bkt.clouddn.com/my_sele.png":"http://pbr2drfuy.bkt.clouddn.com/me.png"
            },
            funhome(){
                this.ishome=true,
                this.isactive=false,
                this.iscomment=false,
                this.isme=false,
                this.change()
            },
            funac(){
                this.ishome=false,
                this.isactive=true,
                this.iscomment=false,
                this.isme=false,
                this.change()
                },
            funco(){
                this.ishome=false,
                this.isactive=false,
                this.iscomment=true,
                this.isme=false,
                this.change()
            },
            funme(){
                this.ishome=false,
                this.isactive=false,
                this.iscomment=false,
                this.isme=true,
                this.change()
            },
            turn(path) {
                this.$router.push({
                    path:`${path}`
                })
            }
        }
    }
</script>

<style scoped lang="stylus">
.color_notchange{
    font-size:14px
    font-family:HiraMaruPro-W4
    color:#700DDA
    line-height:21px
}
.color_change{
    font-size:14px
    font-family:HiraMaruPro-W4
    color:red
    line-height:21px
}

    .footer
        height 60px
        position fixed
        bottom 0
        display flex
        justify-content space-between
        //background:rgba(85,85,85,1);
        background:#ffffff
        //background:blue
        border:1px solid rgba(151,151,151,1)
        width 100%
        .item
            text-align center
            width 25%
            img
                margin 8px 0 3px 0
                width 22px
                height 22px
            /*
            h3
                font-size:14px
                font-family:HiraMaruPro-W4
                color:cyan
                line-height:21px
            */


</style>