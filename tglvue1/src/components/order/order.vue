<template>
    <div v-show="canShow">
        <div class="order" @click="turn('/order')" @mousedown="down()" @touchstart="down()"
        @mousemove="move()" @touchmove="move()"
        @mouseup="end()" @touchend="end()" v-if="!isShow" id="moveDiv">
            <img src="./order.png" alt="" width="45px" height="49px">
            <h3>预定</h3>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                canShow: true,

                flags: false,
                position: {
                x: 0,
                y: 0
                },
                nx: '', ny: '', dx: '', dy: '', xPum: '', yPum: '',
            }
        }, methods: {
            turn(path){
                
                this.$router.push({
                    path:`${path}`
                })

            },
            // 实现移动端拖拽
            down(){
                this.flags = true;
                var touch ;
                if(event.touches){
                    touch = event.touches[0];
                }else {
                    touch = event;
                }
                this.position.x = touch.clientX;
                this.position.y = touch.clientY;
                this.dx = moveDiv.offsetLeft;
                this.dy = moveDiv.offsetTop;
            },
            move(){
                if(this.flags){
                    var touch ;
                    if(event.touches){
                        touch = event.touches[0];
                    }else {
                        touch = event;
                    }
                    this.nx = touch.clientX - this.position.x;
                    this.ny = touch.clientY - this.position.y;
                    this.xPum = this.dx+this.nx;
                    this.yPum = this.dy+this.ny;
                    moveDiv.style.left = this.xPum+"px";
                    moveDiv.style.top = this.yPum +"px";
                    //阻止页面的滑动默认事件
                    document.addEventListener("touchmove",function(){
                    event.preventDefault();
                    },false);
                }
            },
            //鼠标释放时候的函数
            end(){
                this.flags = false;
            },
        }, mounted() {

        }
    }
</script>

<style scoped lang="stylus">
    .order
        position fixed
        top 70%
        right 15px
        width 60px
        height 60px
        //background:cyan;
        h3
            color #700DDA
            font-size 14px
            margin-left 10px
            margin-top -4px
            font-weight 900
</style>