<template>
    <div class="active">
        <scroll>
            <div>
            <act :winners = toDay></act>
            <div class="hot-title">
                <div class="hot-line"></div>
                <img src="./paihangbang.png" height="30px" width="30px" class="img_act">
                <span class="acti"><font size="4" color="#700DDA">排行榜</font></span>
                <div class="hot-line-right"></div>
            </div>
            <chart :title="titles[0]" :consumes = yearList></chart>
            <chart :title="titles[1]" :consumes = monthList></chart>
            <chart :title="titles[2]" :consumes = shareList></chart>
            </div>
        </scroll>
        <router-view></router-view>

    </div>
</template>

<script>
    import chart from '../../components/chart/chart'
    import act from '../../components/act/act'
    import scroll from '../../base/scroll/scroll'
    import order from '../../components/order/order'
    import { getMonthConsume, getWeekConsume, getYearConsume, getActivityDate, getShare } from '../../api/active'

    export default {
        created(){
            this.getYearConsumeList()
            this.getMonthConsumeList()
            this.getWeekConsumeList()
            this.getToDayActivityList()
            this.getShareList()
        },
        data(){
            return{
                list:null,
                yearList:[],
                monthList:[],
                weekList:null,
                winList0:null,
                toDay:{},
                titles:['年榜','月榜','分享榜'],
                shareList: [],
                isShow1:true,
                isShow2:false
            }
        },
        methods:{
            getYearConsumeList(){
                getYearConsume().then(res => {
                    this.yearList = res.data;
                    console.log(3333);
                    console.log(this.yearList)
                })
            },
            getMonthConsumeList(){
                getMonthConsume().then(res => {
                    this.monthList = res.data
                })
            },
            getWeekConsumeList(){
                getWeekConsume().then(res => {
                    this.weekList = res.data
                })
            },
            getToDayActivityList(){
                let params = {"name":'每日活动'}
                getActivityDate(params).then(res => {
                    this.toDay = res.data
                })
            },
            getShareList(){
                getShare().then(res => {
                    this.shareList = res.data
                })
            },
            toggle(){
                this.isShow1 = !this.isShow1;
                this.isShow2 = !this.isShow2;
            },
        },
        components:{
            chart,act,scroll,order
        }
    }
</script>

<style scoped lang="stylus">
.hot-title
    display flex
    text-align center
    margin-top 20px
    padding-bottom 35px
    margin-bottom -15px
    height 30px
    background #ffffff
    .img_act
        margin-top 15px
        margin-bottom -9px
    .acti
        margin-top 23px
        margin-left 3px
    .hot-line
        background #f5f5f5
        margin-top 33px
        margin-right 10px
        margin-left 28px
        width 30%
        height 1px
    .hot-line-right
        background #f5f5f5
        margin-top 33px
        margin-right 10px
        margin-left 8px
        width 30%
        height 1px
.de_rank
    margin-top 0px
.icon
    background-color:#F5F5F5;
    width:100%;
    height:80px;
    img
        width:100%;
        height:90px;
.order
{
    position:fixed;
    top:40%;
    right:0px;
    width:36px;
    height:36px;
    border-radius:50%;
    background-color:cyan;
    text-align:center;
    line-height:37px;
    opacity:0.4;
    //vertical-align:middle;
}
    .active
        position fixed
        top 0
        left 0
        right 0
        bottom 60px
        /*opacity:0.617;*/
        background-color:#F5F5F5;
</style>