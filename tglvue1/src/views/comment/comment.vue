<template>
    <div class="comment">
        <div class="header" v-if="showComment">
            <div class="title">
                <img src="./left.png" class="left" alt="" @click="handleComment">
                <h3>酒后吐真言</h3>
            </div>
            <div class="form" :modal="temp">
                <textarea class="content" v-model="temp.content" placeholder="快来酒后吐真言！">
                </textarea>
                    <button class="send" @click="addComment()">
                        发送
                    </button>
            </div>
        </div>
        <div class="list" >
            <div class="title" :modal="temp">
                <span class="inp">
                    <input type="text" style="height:30px; width:100%; outline-width:0" v-model="temp.content" placeholder="快来酒后吐真言">
                </span>
                <span class="but">
                    <input type="button" value="发送" @click="addComment()" style="height:30px; width: 100%; outline-width:0; background:rgba(248,248,248,1); border:none">
                </span>
            </div>

            <div class="items">
                <scroll>
                <div>

            <div class="item" v-for="(item,index) in list" :key="index">
                <!--用户头像-->
                <img class="avatar" :src="item.avatar" alt="">
                <div class="info">
                    <!--用户姓名-->
                    <span class="name">{{item.userName}}</span>
                    <div class="bottom">
                        <!--时间 & 等级-->
                        <span class="time">{{item.time}}</span>
                        <img src="./level.png" alt="">
                        <span class="time">{{item.levelName}}</span>
                    </div>
                </div>

                <!--内容-->
                <div class="content">
                    {{item.content}}
                </div>

                <div class="buttons">
                    <!--评论-->
                    <div class="comment-button">
                        <img src="./comment.png" alt="">
                        <span>评论</span>
                    </div>
                    <!--点赞-->
                    <div class="love">
                        <img src="./love.png" alt="" @click="isUpVote(item.commentId)">
                        <span>{{item.upvote}}</span>
                    </div>
                </div>

                <div class="space60"></div>

            </div>

                </div>
                </scroll>
            </div>
        </div>
        <router-view ></router-view>
        <order></order>
    </div>
</template>

<script>
    import scroll from '../../base/scroll/scroll'
    import { getCommentInfo, Create, upVote } from "../../api/comment"
    import order from '../../components/order/order'

    export default {
        created(){
            this.getComment()
        },
        data(){
            return{
                list:[{
                    avatar:'http://img4.imgtn.bdimg.com/it/u=16550438,2220103346&fm=27&gp=0.jpg',
                    userName:'ypl',
                    time:'2018-07-05 16:55:58',
                    levelName:'vip1',
                    content:'目前国内甚至世界各地对于区块链的研究还处于积累阶段，区块链的落地应用及知识体系的研究还有广阔的空间，区块链至今经历了区块链1.0：货币、区块链2.0：智能合约、区块链3.0：公正应用的发展阶段，目前市场上关于区块链的项目深受投资者的喜好，一般与区块链挂钩能够实地落地的项目即可获得千万级别的投资。',
                    commentId:'2',
                    upvote:'0'
                },
                {
                    avatar:'http://img5.imgtn.bdimg.com/it/u=4249127266,3691528019&fm=27&gp=0.jpg',
                    userName:'yyypl',
                    time:'2018-07-05 16:55:58',
                    levelName:'vip1',
                    content:'以太坊的白皮书',
                    commentId:'2',
                    upvote:'4'
                },
                {
                    avatar:'http://img1.imgtn.bdimg.com/it/u=586723545,3678636448&fm=27&gp=0.jpg',
                    userName:'ypll',
                    time:'2018-07-05 16:55:58',
                    levelName:'vip1',
                    content:'中本聪的关于比特币的白皮书',
                    commentId:'2',
                    upvote:'4'
                },
                {
                    avatar:'http://img4.imgtn.bdimg.com/it/u=1114585158,1026985006&fm=27&gp=0.jpg',
                    userName:'ypppl',
                    time:'2018-07-05 16:55:58',
                    levelName:'vip1',
                    content:'目前区块链已经进入区块链3.0时代',
                    commentId:'2',
                    upvote:'4'
                },
                {
                    avatar:'http://img4.imgtn.bdimg.com/it/u=1114585158,1026985006&fm=27&gp=0.jpg',
                    userName:'ypppl',
                    time:'2018-07-05 16:55:58',
                    levelName:'vip1',
                    content:'目前区块链已经进入区块链3.0时代',
                    commentId:'2',
                    upvote:'4'
                },
                {
                    avatar:'http://img4.imgtn.bdimg.com/it/u=1114585158,1026985006&fm=27&gp=0.jpg',
                    userName:'ypppl',
                    time:'2018-07-05 16:55:58',
                    levelName:'vip1',
                    content:'目前区块链已经进入区块链3.0时代',
                    commentId:'2',
                    upvote:'4'
                },
                {
                    avatar:'http://img4.imgtn.bdimg.com/it/u=1114585158,1026985006&fm=27&gp=0.jpg',
                    userName:'ypppl',
                    time:'2018-07-05 16:55:58',
                    levelName:'vip1',
                    content:'目前区块链已经进入区块链3.0时代',
                    commentId:'2',
                    upvote:'4'
                }],
                comments:null,
                temp: {
                    content: ''
                },
                showComment:false
            }
        },
        methods:{
            getComment(){
                getCommentInfo().then(res => {
                    this.list = res.data
                })
            },
            handleComment(){
                this.showComment = !this.showComment
            },
            addComment(){
                Create(this.temp).then(res => {
                    this.temp = res.data
                    alert("评论成功!")
                    this.showComment=false
                }).catch(error=>{
                    alert("评论失败 (" + error + ")")
                })
            },
            isUpVote(commentId){
                let params = {"commentId":commentId}
                upVote(params).then(res => {
                    this.comments = res.data
                    //this.updateList(this.list,this.comments,event)
                    this.getComment()
                })
            },
            updateList(list,comments) {
                for(const s of list) {
                    if (this.comments.commentId === s.commentId) {
                        const index = this.list.indexOf(s)
                        this.list.splice(index, 1, comments)
                    }
                }
            }
        },
        components: {
            scroll,order
        }
    }
</script>

<style scoped lang="stylus">
    .comment
        position fixed
        top 0
        left 0
        right 0
        bottom 60px
        overflow hidden
        .header
            z-index 1
            top 30%
            left 0
            right 0
            position absolute
            overflow hidden //解决margin-top塌陷
            height: 271px;
            background: rgba(198, 164, 114, 1);
            /*opacity: 0.6152000000000001;*/
            .title
                height 24px
                margin-top 22px
                text-align center
                width 100%
                img
                    width: 22px;
                    height: 22px;
                    float left
                    top 1px
                    margin-left 16px
                h3
                    height: 18px;
                    font-size: 18px;
                    font-family: HiraMaruPro-W4;
                    color: rgba(255, 255, 255, 1);
                    line-height: 24px;
            .form
                .content
                    border none
                    font-size: 16px;
                    font-family: PingFangSC-Regular;
                    line-height: 22px;
                    display block;
                    outline none;
                    width: 344px;
                    height: 118px;
                    background: rgba(255, 255, 255, 1);
                    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
                    margin 51px auto 0
                .send
                    width: 79px;
                    height: 31px;
                    background: rgba(255, 255, 255, 1);
                    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
                    border-radius: 8px;
                    float right
                    margin 10px 20px 23px 10px
        .list
            background:rgba(248,248,248,1)
            .title
                height 42px
                display flex
                align-items center
                margin-left 10px
                .inp
                    height 36px
                    width 78%
                    margin-left 2%
                    margin-top 3px
                    float left
                .but
                    width: 15%;
                    height: 36px;
                    margin-top 3px
                    margin-left 3%
            .items
            /*整个评论版块*/
                position fixed
                top 42px
                left 0
                right 0
                bottom 60px
                overflow hidden
                .item
                /*一个评论版块*/
                    background:rgba(255,255,255,1);
                    box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5);
                    position relative
                    .avatar
                    /*头像*/
                        position absolute
                        width:32px;
                        height:32px;
                        border-radius 49px
                        top 12px
                        left 12px
                    .info
                    /*用户名模块*/
                        padding-left 55px
                        padding-top 7px
                        height 29px
                        display flex
                        flex-direction column
                        justify-content center
                        .name
                        /*用户名*/
                            font-size:14px;
                            font-family:HiraMaruPro-W4;
                            color:rgba(102,102,102,1);
                            line-height:24px;
                        .bottom
                        /*时间 & 等级*/
                            margin-top 3px
                            display flex
                            align-items center
                            span
                                font-size:12px;
                                font-family:PingFangSC-Regular;
                                color:rgba(85,85,85,1);
                                line-height:14px;
                            img
                                margin-left 5px
                                width 15px
                                height 15px
                    .content
                    /*评论内容*/
                        width 80%
                        margin-top 18px;
                        margin-left 30px;
                        font-size:15px;
                        color:rgba(102,102,102,1);
                        line-height:17px;
                        padding 0 25px;
                    .buttons
                    /*点赞*/
                        display flex
                        justify-content flex-end
                        margin-top 12px
                        div
                            display flex
                            align-items center
                            margin-right 13px
                            margin-bottom 14px
                            img
                                margin 0 5px
                                width 20px
                                height 20px
                            span
                                font-size:12px;
                                font-family:PingFangSC-Regular;
                                color:rgba(102,102,102,1);
                                line-height:17px;
.space60{
    width:60px;
}
</style>