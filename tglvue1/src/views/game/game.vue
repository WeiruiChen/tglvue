<template>
    <transition name="slide">
    <div class="game">
        <MyHeader :title="title"></MyHeader>
        <div class="content">
            <span class="number">{{this.countSort}}</span>
        </div>
       <div class="button">
           <img src="./click.png" alt="" v-if="canClick">
           <span @click="addCount" v-if="canClick">请作死的戳我({{timeCount}}s)</span>
           <span @click="beginGame" v-if="!canClick">点我参与游戏</span>
       </div>

        <div class="list" >
            <Scroll>
            <div class="list-content">

                <span class="time">
                    最近开奖时间：{{activityTime}}
                </span>
                <div class="users">
                  <h3>中奖名单</h3>
                    <div class="users-content">
                        <div class="items">
                            <div class="item" v-for="(item,index) in winnerList" :key="index">
                                <span class="name">{{item.userName}}</span>
                                <span class="phone">{{item.levelName}}</span>
                                <span class="info">{{item.info}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="role">
                    <h3>活动规则</h3>
                    <div class="role-content">
                      <span>
                            {{activityInfo.rule}}
                      </span>
                    </div>
                </div>

            </div>
            </Scroll>
        </div>

    </div>
    </transition>
</template>

<script>
    import MyHeader from '../../components/header/header'
    import Scroll from '../../base/scroll/scroll'
    import {create,WinnerRecord} from "../../api/game";

    import { getTopWinner, getActivityInfo, getTime } from '../../api/active'

    export default {
        created(){
            this.getActiveInfo()
        },
      components:{
          MyHeader,Scroll
      }, data(){
          return {
              title:"抽奖小游戏",
              activityInfo:{},
              winnerList:null,
              activityTime:{},
              countSort:0,
              timeCount:30,
              canClick:false,
              hasClick:false
          }
        },
        methods:{
            getActiveInfo(){
                getActivityInfo().then(res => {
                    this.activityInfo = res.data
                    this.getWinnerList()
                    this.getActivityTime()
                })
            },
            getActivityTime(){
                let params = {"activityId":this.activityInfo.activityId}
                getTime(params).then(res => {
                    this.activityTime = res.data
                })
            },
            getWinnerList(){
                let params = {"activityId":this.activityInfo.activityId, "beginTime":this.activityInfo.beginTime, "endTime":this.activityInfo.endTime}
                getTopWinner(params).then(res => {
                    this.winnerList = res.data
                })
            },
            validateTime() { //验证时间 TODO 判断游戏是否开始
                let nowDate = new Date()
                let st =new Date(this.activityInfo.beginTime)
                let et = new Date(this.activityInfo.endTime)
                if(nowDate.getTime()>=st.getTime()&&nowDate.getTime()<=et.getTime()){
                    return true;
                }
                return false;
            },
            addCount(){//计数
                this.countSort++;
            },
            beginGame(){//开始游戏
                //if(!this.hasClick){
                    let params = {"activityId":this.activityInfo.activityId}
                    WinnerRecord(params).then(res=>{
                        this.hasClick = true
                        if(!this.validateTime()){
                            alert('游戏结束/尚未开始');
                        }else{
                            var str = prompt("输入今日抽奖验证码: ")
                            if(str!=null && ''!=str){
                                let code = this.activityInfo.code
                                if(str == code){
                                    this.canClick=true
                                    this.beginTime();
                                }else{
                                    this.hasClick = false
                                    this.canClick=false
                                    alert("验证码有误!请重新输入：");
                                }
                            }else if(str==""){
                                this.hasClick = false
                                this.canClick=false
                                alert('请输入验证码!');
                            }else{
                                this.hasClick = false
                                this.canClick=false
                                //alert('请输入验证码!');
                            }
                        }
                    }).catch(error=>{
                        alert(error);
                    })
                //}else {
                    //alert("不能重复参与!")
                //}
            },
            beginTime(){//倒计时
                if(this.timeCount===0){
                    window.clearTimeout(this.ct);
                    this.canClick = false;
                    this.endGame();
                }
                this.ct = setTimeout(()=>{
                    this.timeCount=this.timeCount -1
                    this.beginTime()
                },1000)

            },
            endGame(){//游戏结束提交
                var params = {
                    sort:this.countSort
                }
                create(params).then(res=>{
                    alert("游戏结束，等待公布结果!")
                }).catch(error=>{
                    alert("失败!"+error);
                })
            }
        }
    }
</script>

<style scoped lang="stylus">
    .game
        background #EEF0F3
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        .content
            height 168px
            background:rgba(102,102,102,1);
            display flex
            justify-content center
            align-items center
            .number
                font-size:80px;
                font-family:HiraKakuStd-W8;
                color:rgba(255,255,255,1);
                line-height:120px;

        .button
            width:227px;
            height:64px;
            background:rgba(220,199,168,1);
            box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5);
            border-radius:8px;
            margin 0 auto
            display flex
            justify-content center
            align-items center
            margin-top -32px
            img
                width: 35px;
                height 35px;
        .list
            position fixed
            top 275px
            left 0
            right 0
            bottom 0px
            padding 0px 18px
            .list-content
                padding-top 37px
            .time
                font-size:14px;
                font-family:PingFangSC-Regular;
                color:#666666
                line-height:20px;
            .users
                h3
                    margin 7px 0
                    font-size:18px;
                    font-family:PingFangSC-Regular;
                    color:#C6A472
                    line-height:25px;
                .users-content
                    height:103px;
                    background:rgba(242,236,223,1);
                    box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5);
                    border-radius:8px;
                    padding 18px 22px
                    .items
                        .item
                            display flex
                            justify-content space-around
                            align-items center
                            .name,.phone,.info
                                font-size:14px;
                                font-family:PingFangSC-Regular;
                                color:rgba(102,102,102,1);
                                line-height:20px;
            .role
                padding-bottom 10px
                h3
                    margin 7px 0
                    font-size:18px;
                    font-family:PingFangSC-Regular;
                    color:#C6A472
                    line-height:25px;
                .role-content
                    background:rgba(255,255,255,1);
                    box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5);
                    border-radius:8px;
                    padding 12px 21px
                    span
                        font-size:14px;
                        font-family:HiraMaruPro-W4;
                        color:rgba(102,102,102,1);
                        line-height:15px;




    .slide-enter-active, .slide-leave-active
        transition all .3s

    .slide-enter, .slide-leave-to
        transform translate3d(100%, 0, 0)

</style>