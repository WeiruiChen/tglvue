<template>

    <!--<div v-if="users!=null&&users.length>0" class="mvp">-->
    <div class="mvp">
        <h3 class="title">场所消费王</h3>
        <div class="item" v-for="(user,index) in users " :key="index">
            <!--<img :src="user.avatar" class="avatar" alt="">-->
            <img class="avatar" :src="user.avatar"/>
            <span class="index">TOP{{index+1}}</span>
            <span class="name">{{user.userName}}</span>
            <span class="phone">{{user.levelName}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        created(){
        },
        props:{
          users:{
              type:Array,
              default:null
          }
        },
        name: "mvp"
    }
</script>

<style scoped lang="stylus">
    .mvp
        margin-top 25px
        width:95%;
        //background-color:cyan;
        //border: 1px solid #700DDA
        border-radius: 10px
        margin-left:2.5%;
        background-color:#F5F5F5;
        .title
            height:25px
            font-size:18px
            font-family:HiraMaruPro-W4
            color:#700DDA
            line-height:27px
            margin-left 16px
            margin-bottom 10px
        .item
            display flex
            //justify-content space-around
            align-items center
            width:100%;
            height:45px
            background-color:white
            //box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5)
            //border-radius:10px
            margin-bottom 3px
            .avatar
                width 42px
                height 42px
                border-radius 42px
                margin-left:15px;
            .index
                width:20%;
                //height:14px
                font-size:14px
                font-family:HiraMaruPro-W4
                color:#3023AE
                line-height:25px
                margin-left:25px;
                //background-color:yellow;
            .name,.phone
                width:20%;
                //height:14px
                font-size:14px
                font-family:HiraMaruPro-W4
                color:rgba(85,85,85,1)
                line-height:25px
                margin-left:25px;
                //background-color:yellow;


</style>