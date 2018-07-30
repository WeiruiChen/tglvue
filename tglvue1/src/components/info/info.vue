<template>
    <div class="info">
        <h3 class="title">会所简介</h3>
        <div class="content">
           [新华]悦界娱乐 [新华]悦界娱乐 [新华]悦界娱乐 [新华]悦界娱乐 [新华]悦界娱乐 
           [新华]悦界娱乐 [新华]悦界娱乐 [新华]悦界娱乐 [新华]悦界娱乐
           {{text}}
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            text:{
                type:String,
                default:''
            }
        }
    }
</script>

<style scoped lang="stylus">
    .info
        //margin 22px 31px 0 24px
        margin-top:25px;
        margin-left:5%
        //background-color:cyan;
        background-color:white;
        border: 1px solid #700DDA
        border-radius: 10px
        width:90%;
        
        .title
            font-size:14px
            font-family:PingFangSC-Regular
            color:#700DDA;
            line-height:20px
            margin-left:10px;
            margin-top:6px;
            margin-bottom:6px;

        .content
            margin-bottom:6px;
            margin-left:10px;
            font-size:12px
            font-family:HiraMaruPro-W4
            color:rgba(85,85,85,1)
            line-height:18px
            overflow: hidden
            text-overflow: ellipsis
            display: -webkit-box
            -webkit-line-clamp: 3
            -webkit-box-orient: vertical



</style>