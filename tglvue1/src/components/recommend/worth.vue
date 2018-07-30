<template>
    <div v-if="worthItems!=null&&worthItems.length>0" class="worth-recommend">
    <!-- <div class="title">
        <img  src="./worth.png" class="worth" alt="">
        <div class="input-group">
        <input type="text" class="name">
        <img class="search" src="./search.png" alt="">
        </div>
    </div> -->
    <div class="hot-title">
            <div class="hot-line"></div>
            <img src="./icons8.png" width="20px" height="18px">
            <span class="acti"><font size="4" color="#700DDA">&nbsp;超值推荐</font></span>
            <div class="hot-line-right"></div>
        </div>
    <items :items="worthItems"></items>
    </div>
</template>

<script>
    import Items from './items'

    export default {

        props:{
            worthItems: {
                type:Array,
            }
        },
        components:{
            Items
        }
    }
</script>

<style scoped lang="stylus">
    .hot-title
        display flex
        padding-top 20px
        padding-bottom 12px
        align center
        height 20px
        background-color #ffffff
        text-align center
        .acti
            margin-top 2px
        .hot-line
            background #f5f5f5
            margin-top 10px
            margin-right 10px
            margin-left 28px
            width 26%
            height 1px
        .hot-line-right
            background #f5f5f5
            margin-top 10px
            margin-right 10px
            margin-left 8px
            width 30%
            height 1px
    .title
        height:40px
        background:rgba(255,255,255,1)
        border-radius:8px
        border:1px solid rgba(187,187,187,1)
        margin 14px 8px 12px 8px
        .worth
            width 102px
            height 26px
            margin 7px 0px 7px 14px
        .input-group
            float right
            .name
                width:148px
                height:24px
                background:rgba(255,255,255,1)
                border-radius:10px
                border:1px solid rgba(198,164,114,1)
                outline none
                margin 8px 0
                -moz-appearance none
                -webkit-appearance none
                font-family:HiraMaruPro-W4
                color:rgba(85,85,85,1);
                font-size 14px
                padding-left 14px
                vertical-align middle
             .search
                width 20px
                height 20px
                margin 10px
                vertical-align middle



</style>