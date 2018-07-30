<template>
    <div class="top">
        <div>
            <img src="./QR.png" class="QR">
        </div>
        
        <div class="left"></div>
        <input type="text" class="_search" placeholder="请输入名称">
        <div class="searchIcon">
            <img src="./search_icon.png" class="pic">
        </div>

        <div @click="turn('/comment')">
            <img src="./news.png" class="news">
        </div>
        
        
    </div>
</template>

<script>
    export default {
        methods: {
            turn(path){
                this.$router.push({
                    path:`${path}`
                })
            }
        }
    }
</script>

<style>
.top{
    display:flex;
    width:100%;
    height:45px;
    background-color:#700DDA;
    position:fixed;
    z-index:1;
}
._search{
    margin-top:7px;
    width:42%;
    height:30px;
    border-bottom:30px;
    outline-width:0;
}
.searchIcon{
    width:45px;
    height:30px;
    margin-top:7px;
    margin-left:-1px;
    border-top-right-radius: 1em;
    border-bottom-right-radius: 1em;
    background-color:white;
}
.left{
    margin-left:15px;
    margin-top:7px;
    border-top-left-radius: 1em;
    border-bottom-left-radius: 1em;
    width:60px;
    height:30px;
    background-color:white;
}
.pic{
    margin-top:2px;
    height:25px;
}

.QR{
    margin-left:12px;
    margin-top:10px;
    width:25px;
    height:25px;
}

.news{
    margin-left:14px;
    margin-top:10px;
    width:25px;
    height:25px;
}


</style>