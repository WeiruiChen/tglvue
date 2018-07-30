<template>
    <div class="act">
            <div class="hot-title">
                <img src="./huo.png" height="30px" width="30px" class="img_act">
                <span class="acti"><font size="4" color="#700DDA">活动中心</font></span>
                <div class="hot-line-right"></div>
            </div>
        <div class="items">
            <div class="item">
                <div>
                    <img src="./Freedom.jpg" class="content">
                </div>
                <div class="title">
                    <!--<span>规则:{{winners.rule}}</span>-->
                    
                    <font color="#32476B">包厢预订</font>
                    
                    <span>{{year.name}}</span>
                </div>
            </div>


            <div class="item">
                <div>
                    <img src="./Freedom.jpg" class="content">
                </div>
                <div class="title">
                    <!--  <span>规则:{{winners.rule}}</span>  -->
                  
                    <font color="#32476B">房间点单</font>
         
                    <!-- <span>{{year.name}}</span> -->
                </div>
            </div>


            <div class="item">
                <div>
                    <img src="./Freedom.jpg" class="content">
                </div>
                <div class="title">
                    <!--  <span>{{week.info}}</span>  -->
                    <!--  <span>规则:{{winners.rule}}</span>  -->
                    
                    <font color="#32476B">店里环境</font>
                  
                    <!--  <span>{{winners.name}}</span>  -->
                </div>
            </div>


            <div class="item" @click="turn('/game')">
                <div>
                    <img src="./Freedom.jpg" class="content">

                </div>
                <div class="title">
                    <!--  <span>{{winners.info}}</span>  -->
                    <!--  <span>规则:{{winners.rule}}</span>  -->
                   
                    <font color="#32476B">门店动态</font>
                    
                    <!-- <span>{{winners.name}}</span> -->
                </div>
            </div>


        </div>
        <router-view ></router-view>

        

    </div>


<!--
<div class="act">
    <div>
        <img src="./Freedom.jpg" class="circle_img">
    </div>
    <div>
        <img src="./Freedom.jpg" class="circle_img">
    </div>
</div>
-->
 
    
</template>

<script>
    import { getActivityDate } from '../../api/active'
    export default {
        created(){
            this.getWeekActivityList()
            this.getMonthActivityList()
            this.getYearActivityList()
        },
        components:{

        },
        name: "active",
        props:{
            winners:{
            }
        },
        data(){
            return{
                week:{},
                month:{},
                year:{},
            }
        },
        methods:{
            turn(path){
                this.$router.push({
                    path:`${path}`
                })
            },
            getWeekActivityList(){
                let params = {"name":'每周活动'}
                getActivityDate(params).then(res => {
                    this.week = res.data
                })
            },
            getMonthActivityList(){
                let params = {"name":'月度活动'}
                getActivityDate(params).then(res => {
                    this.month = res.data
                })
            },
            getYearActivityList(){
                let params = {"name":'年度活动'}
                getActivityDate(params).then(res => {
                    this.year = res.data
                })
            }
        }
    }
</script>

<style scoped lang="stylus">
    .hot-title
        text-align center
        padding-top 20px
        padding-bottom 30px
        height 18px
        .img_act
            margin-bottom -9px
        .acti
            margin-top -10px
        .hot-line-right
            background #f5f5f5
            margin-top 10px
            width 100%
            height 1px
/*.act{
    display:flex;
    background-color:cyan;
    width:100%;
    height:100px;
}
.circle_img{
    width:35%;
    height:65px;
    border-radius:50%;
    background-color:yellow;
    margin-top:12px;
    margin-left:10px;
}*/
    .act
        background-color:white;
        .act_center
            width:100%;
            height:100px;
            background-color:cyan;
            text-align:center;
            vertical-align:middle;
            line-height:60px;
            span
                font-size:35px;
                color:#700DDA; 
                text-shadow: 0px 0px 2px #686868,
                0px 1px 1px #ddd,
                0px 2px 1px #d6d6d6,
                0px 3px 1px #ccc,
                0px 4px 1px #c5c5c5,
                0px 5px 1px #c1c1c1,
                0px 6px 1px #bbb,
                0px 7px 1px #777,
                0px 8px 3px rgba(100, 100, 100, 0.4),
                0px 9px 5px rgba(100, 100, 100, 0.1),
                0px 10px 7px rgba(100, 100, 100, 0.15),
                0px 11px 9px rgba(100, 100, 100, 0.2),
                0px 12px 11px rgba(100, 100, 100, 0.25),
                0px 13px 15px rgba(100, 100, 100, 0.3);              
        .items
            display flex
            //justify-content space-between
            //flex-wrap wrap
            .item
                width:50%;
                //background-color:yellow;
                .title
                    display:flex
                    //align-items flex-end
                    justify-content center
                    height:25px;
                    //background:cyan;
                    width:80px;
                    margin-left:6px;
                    margin-top:6px;
                    span
                        /*line-height 48px*/
                        background-color:black;
                        font-size:12px;
                        font-family:HiraMaruPro-W4;
                        color:rgba(198,164,114,1);
                        margin-left:15px;
                .content
                    //background:rgba(255,255,255,1);
                    //box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5);
                    //padding 10px 10px
                    //min-height 100px
                    width:50px;
                    height:50px;
                    border-radius:50%;
                    //background-color:white;
                    margin-top:12px;
                    margin-left:21px;
                
                    
</style>