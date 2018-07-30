<template>
    <div class="items">
        <div v-for="(item,index) in items" :key="index" class="item" @click="selectItem(item)">
            <img :src="imgPath+getImg(item.img)" alt="" width="100%" height="140px">
            <!-- <img :src="item.img" alt="" width="100%" height="140px">-->
            <h1>{{item.name}}</h1>
            <div class="space"></div>
            <h3>{{item.details}}</h3>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import {domain} from "../../const/img";
    export default {
        data(){
            return {
                imgPath:domain
            }
        },
        props:{
            items:{
                type:Array
            }
        },
        methods:{
            selectItem(item){
                console.log(item)
                this.setSeller(item)
                console.log(this.$store.getters.seller)
                this.$router.push({
                    path:`detail/${item.sellerId}`
                })
            },
            getImg(img){
                return img.split(",")[0]
            },
            ...mapMutations({
                setSeller:'SET_SELLER'
            })
        }

    }
</script>

<style scoped lang="stylus">
    .space
        height: 6px;

    .items
        background #f5f5f5
        margin-top 0px
        overflow hidden
        .item
            height 190px
            background #ffffff
            width 48%
            margin-left 1.4%
            margin-bottom 26px
            text-align center
            float left
            img
                margin-top -14px
                width 100%
            h1
                font-size:14px;
                font-family:HiraMaruPro-W4;
                color:rgba(85,85,85,1);
                line-height:21px;
                margin 9px 0 0 2px
            h3
                font-size:10px;
                font-family:PingFangSC-Semibold;
                color:rgba(140,133,140,1);
                line-height:13px;
</style>