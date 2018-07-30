<template>
    <div class="notice">
        <img src="./notice.png" alt="" class="icon">
        <span class="text">{{noticeText}}</span>
    </div>
</template>

<script>
    export default {
       props:{
           items:{
               type:Array,
               default:null
           },
           noticeText:{
               type:String,
               default:'暂无新的通知'
           }
       }
    }
</script>

<style scoped lang="stylus">
    @import "../../common/stylus/index.styl"
    .notice
        margin 3px
        background:#ffffff
        margin-bottom -4px
        .icon
            width 22px
            height 22px
            vertical-align middle
            margin 10px 20px 8px 30px
        .text
            width:218px;
            height:24px;
            font-size:14px;
            font-family:PingFangSC-Regular;
            color:rgba(198,164,114,1);
            line-height:20px;
            vertical-align middle
            width:80%;
            white-space:nowrap;
            text-overflow:ellipsis;
            -o-text-overflow:ellipsis;
            overflow:hidden;

</style>