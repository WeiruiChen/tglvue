<template>
    

    <div class="chart" >
        
        
        <div class="header">
            <!--  <img class="date" src="./date.png" alt="">  -->
            <center><div class="title" @click="fun($event),toggle()">{{title}}</div></center>
            
            <!--  <img class="more" src="./right.png" alt="">  -->
        </div>

        <div class="line"></div>
        
        <div class="rank1" v-show="isShow1">
           <div class="pic1">
              <img v-bind:src="consumes[0].avatar" class="circle_img"><br/>
              <font style="color:black">{{ consumes[0].userName }}</font>    
           </div>
           <div class="pic2">
               <img v-bind:src="consumes[1].avatar" class="circle_img2"><br/>
               <font style="color:black">{{ consumes[1].userName }}</font>
           </div>
           <div class="pic3">
               <img v-bind:src="consumes[2].avatar" class="circle_img"><br/>
               <font style="color:black">{{ consumes[2].userName }}</font>
           </div>
       </div>

       <scroll>
       <div class="rank2" v-show="isShow2" v-for="(item,index) in consumes" :key="index">
           <div class="rank">
               <img v-bind:src="icon_rank[index].icon" class="icon">
               <img v-bind:src="item.avatar" class="portrait">
               <div class="setFont1">
                   <font>{{item.userName}}</font>
               </div>
               <div class="setFont2">
                   <font>{{item.name}}</font>
               </div>
           </div>
           <div class="line2"></div>
           
       </div>
       </scroll>

        <!--
        <div class="items">
            <div class="item" v-for="(item,index) in consumes" :key="index">
                <img  :src="item.avatar" alt="" class="avatar">
                <span class="name">{{item.userName}}</span>
            </div>
        </div>
        -->


    </div>

  
</template>

<script>
    export default {
        props:{
            consumes:{
                type:Array,
                default:null
            },title:{
                type:String,
                default:"请输入名字"
            }
        },
        name: "chat",
        methods:{      
            toggle(){
                this.isShow1 = !this.isShow1;
                this.isShow2 = !this.isShow2;
            },

            closeAll(){
                this.isShow1= true;
                this.isShow2 = false;
            },
            fun(e){
                if(this.count%2!=0){
                    e.target.style.backgroundColor =  "#700DDA";
                    e.target.style.color =  "white";
                    //alert("哈哈哈");
                }else{
                    e.target.style.backgroundColor =  "white";
                    e.target.style.color =  "#700DDA";
                }
                this.count++;
            }
            
        },
        components:{
        },
        data(){
            return{
                isShow1:true,
                isShow2:false,
                count:1,

                icon_rank:[
                    {
                        icon:'http://pbr2drfuy.bkt.clouddn.com/1.png'
                    },
                    {
                        icon:'http://pbr2drfuy.bkt.clouddn.com/2.png'
                    },
                    {
                        icon:'http://pbr2drfuy.bkt.clouddn.com/3.png'
                    },
                    {
                        icon:'http://pbr2drfuy.bkt.clouddn.com/4.png'
                    },
                    {
                        icon:'http://pbr2drfuy.bkt.clouddn.com/5.png'
                    },
                    {
                        icon:'http://pbr2drfuy.bkt.clouddn.com/6.png'
                    },
                    {
                        icon:'http://pbr2drfuy.bkt.clouddn.com/7.png'
                    },
                    {
                        icon:'http://pbr2drfuy.bkt.clouddn.com/8.png'
                    },
                    {
                        icon:'http://pbr2drfuy.bkt.clouddn.com/9.png'
                    },
                    {
                        icon:'http://pbr2drfuy.bkt.clouddn.com/10.png'
                    },
                ],
            }
        },
    }

</script>

<style scoped lang="stylus">
.rank1{
        width:100%;
        height:110px;
        //background-color:yellow;
        display:flex;
}
.pic1{
    //display:flex;
    width:90px;
    height:120px;
    margin-left:36px;
    //background-color:cyan;
    text-align:center;
}
.pic2{
    width:90px;
    height:120px;
    margin-left:10px;
    //background-color:red;
    text-align:center;
}
.pic3{
    width:90px;
    height:120px;
    margin-left:10px;
    //background-color:yellow;
    text-align:center;
}
.circle_img{
        width:50px;
        height:50px;
        border-radius:50%;
        //margin-left:15px;
        margin-top:30px;
}
.circle_img2{
    width:70px;
    height:70px;
    border-radius:50%;
    //margin-left:5px;
    margin-top:10px;
}
.rank2{
        width:100%;
        //height:180px;
        //background-color:yellow;
    }
.rank{
    display:flex;
    width:100%;
    height:60px;
    //background-color:red;
}
.setFont1{
    color:#AEAEAE;
    size:12;
    //background-color:black;
    height:20px;
    margin-top:25px;
    margin-left:10px;
    width:70px;
}
.setFont2{
    color:#AEAEAE;
    size:10;
    //background-color:black;
    height:20px;
    margin-top:24px;
    margin-left:140px;
}
.portrait{
    width:30px;
    height:30px;
    border-radius:50%;
    margin-top:16px;
    margin-left:5px;
    background-color:cyan;
}
.icon2{
    width:20px;
    height:20px;
    margin-top:16px;
    margin-left:5px;
    //background-color:cyan;
}
.icon{
    width:20px;
    height:20px;
    margin-top:21px;
    margin-left:5px;
    //background-color:cyan;
}
.name{
    background-color:cyan;
    color:black;
}

.order
{
    //position:fixed;
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

.line{
    background-color:#F5F5F5;
    width:90%;
    height:1px;
    margin-top:15px;
    margin-left 5%
}
.line2{
    background-color:#F5F5F5;
    width:90%;
    height:1px;
    margin-left 5%
}
    .chart
        margin-top:10px;
        background-color:white;
        .header
            width:70%;
            height 48px
            position relative
            //background-color:red;
            margin-left:25%;
            display:flex;
            .date
                width:27px;
                height:27px;
                margin  10px 10px 10px 22px
                vertical-align middle
            .title
                font-size:18px;
                font-family:HiraMaruPro-W4;
                color:#700DDA;
                line-height:40px
                border:1px solid #700DDA;
                border-radius:10px;  
                //vertical-align middle
                //background-color:cyan;
                margin-top:10px;
                width:200px;
                height:40px;
            .more
                width:19px;
                height:19px;
                position absolute
                right:121px;
                top 14.5px
        .items
            .item
                padding 0 20px
                display flex
                justify-content space-between
                align-items center
                height:44px;
                background:rgba(255,255,255,1);
                box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5);
                margin-top 13px
                .medal
                    width 30px
                    height 30px
                .avatar
                    width 30px
                    height 30px
                    border-radius 30px
                .name
                    width 25%
                    font-size:18px;
                    font-family:HiraMaruPro-W4;
                    color:rgba(198,164,114,1);
                    line-height:27px;
                .phone
                    font-size:18px;
                    font-family:HiraMaruPro-W4;
                    color:rgba(198,164,114,1);
                    line-height:27px;

</style>