<template>
    <div class="header">
        <h3>{{title}}</h3>
    </div>
</template>

<script>
    export default {
        props:{
            title:{
                type:String,
                default:'没有标题'
            }
        }
    }
</script>

<style scoped lang="stylus">
    .header
        position relative
        height 58px
        background:#700dda;
        text-align center
    h3
        font-size:22px;
        font-family:PingFangSC-Regular;
        color:rgba(250,250,250,1);
        line-height:58px

</style>
