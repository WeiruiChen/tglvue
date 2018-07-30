<template>
    <div v-if="hotItems!=null&&hotItems.length>0"  class="hot-recommend">
        <div class="hot-title">
            <div class="hot-line"></div>
            <img src="http://www.51xuediannao.com/uploads/allimg/140105/1-140105134951-50.gif">
            <font size="4" color="#C71585" style="margin-top:3px">&nbsp;&nbsp;火&nbsp;&nbsp;热</font>
            <div class="hot-line-right"></div>
        </div>
        <!--
        <div class="title">
            <img src="./hot.png" class="hot" alt="">
            <img src="./love.png" class="love" alt="">
        </div>
        -->
        <items :items="hotItems"></items>
    </div>
</template>

<script>
    import items from './items'
    export default {
        props: {
            hotItems: {
                type:Array
            }
        },
        components: {
            items
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../common/stylus/variable.styl"
    .hot-title
        display flex
        padding-top 20px
        padding-bottom 12px
        align center
        height 20px
        background-color #ffffff
        text-align center
        .hot-line
            background #f5f5f5
            margin-top 10px
            margin-right 10px
            margin-left 28px
            width 33%
            height 1px
        .hot-line-right
            background #f5f5f5
            margin-top 10px
            margin-right 10px
            margin-left 8px
            width 33%
            height 1px

    .title
        margin 0 8px 18px
        height: 40px;
        background: rgba(85, 85, 85, 1);
        border-radius: 8px;
        border: 1px solid rgba(151, 151, 151, 1)
        .hot
            width 107px
            height 26px
            /*float left*/
            margin 7px 0px 7px 15px
            vertical-align middle
        .text
            color #F1C27C
            /*float left*/
            vertical-align middle
        .love
            float right
            width 26px
            height 26px
            margin 7px 17px

</style>