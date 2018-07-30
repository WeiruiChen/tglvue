<template>
    <div class="stars">

        <span v-for="n in sumPoint" :key="n" :class="{active : n <= point}" class="star">{{n}}</span>

    </div>
</template>

<script>
    export default {
        props:{
            point:{
                type:Number,
                default:1
            },
            sumPoint:{
                type:Number,
                default:5
            }
        }
    }
</script>

<style scoped lang="stylus">
 .stars
     display inline-block
     position relative
     .star
        margin-left 11px
        display inline-block
        width 21px
        height 21px
        text-align center
        &:after
            font-size 20px
            line-height 20px
            content '\2605'
            color #F5F5F5
      .active
        &:after
            color #FBC980

</style>