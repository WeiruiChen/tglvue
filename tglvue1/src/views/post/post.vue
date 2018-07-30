<template>
    <div class="post">
        <div>
            <!--<img :src="'./'+name+'.jpg'" alt="">-->
            <img :src="imgs[name]" alt="">
            <img :src="imgPath" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name:'',
                imgs:{
                    'fx':require('./fx.jpg'),
                    'cz':require('./cz.jpg'),
                    'jf':require('./jf.jpg'),
                    'hz':require('./hz.jpg'),
                    'jb':require('./jb.jpg')
                }
            }
        },
        created(){
            this.name = this.$route.query.name
        }
    }
</script>

<style scoped lang="stylus">
    .post
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        background white
        div
            width 100%
            img
                width : 100%
</style>