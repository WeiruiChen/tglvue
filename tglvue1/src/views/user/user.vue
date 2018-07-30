<template>
    <transition name="slide">
        <div class="user">
            <MyHeader :title="title"></MyHeader>
            <div class="items">
                <Scroll>
                <div>
                    <div class="item" v-for="(item,index) in myPromotionList" :key="index" @click="getSubordinateList(item.userId,item.userName)">
                        <img :src="item.avatar" class="avatar" alt="">
                        <div class="top">
                            <span class="name">{{item.userName}}</span>
                            <span class="phone">{{item.phone}}</span>
                        </div>
                        <div class="bottom">
                            <span>{{item.levelName}}</span>
                            <span>{{item.createTime}}</span>
                        </div>
                    </div>
                </div>
                </Scroll>
            </div>
        </div>
    </transition>
</template>

<script>
    import Scroll from '../../base/scroll/scroll'
    import MyHeader from '../../components/header/header'
    import { getMyPromotion, getSubordinate } from '../../api/user'

    export default {
        created(){
          this.getMyPromotionList()
        },
       components:{
           Scroll,MyHeader
       },
        data(){
           return {
               title:"我的分享",
               myPromotionList:null,
               subordinateList:null,
               canClick:true
           }
        },
        methods:{
            getMyPromotionList(){
                getMyPromotion().then(res=>{
                    this.myPromotionList=res.data
                })
            },
            getSubordinateList(uid,name){

                    if(this.canClick){
                        let params = {'userId':uid}
                        getSubordinate(params).then(res=>{
                            this.title = name + "的分享"
                            this.myPromotionList=res.data
                            this.canClick=false
                        })

                }
            }
        }
    }
</script>

<style scoped lang="stylus">
    .user
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        background: #F7F7F7
        .items
            padding-top 29px
            position fixed
            top 75px
            left 0
            right 0
            bottom 0
            .item
                position relative
                padding-left 87px
                background:rgba(255,255,255,1);
                box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5);
                height 75px
                margin-bottom 20px
                img
                    position absolute
                    left 0
                    margin 13px 19px
                    width:49px;
                    height:49px;
                    border-radius 49px
                .top
                    padding-right 15px
                    height 37.5px
                    display flex
                    justify-content space-between
                    .name,.phone
                        font-size:16px;
                        font-family:HiraMaruPro-W4;
                        color:rgba(102,102,102,1);
                        line-height:37.5px;
                .bottom
                    padding-right 15px
                    height 37.5px
                    display flex
                    justify-content space-between
                    font-size:16px;
                    font-family:PingFangSC-Regular;
                    color:rgba(102,102,102,1);
                    line-height:37.5px;

    .slide-enter-active, .slide-leave-active
        transition all .3s

    .slide-enter, .slide-leave-to
        transform translate3d(100%, 0, 0)
</style>