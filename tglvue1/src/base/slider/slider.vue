<template>
    <div>
        <div  class="slide" ref="slide">
            <div class="slide-group" ref="slideGroup">
                <slot></slot>
            </div>
            <div class="slide-dot">
                <span :class="{active : currentPageIndex===index }" v-for="(item,index) in dots" :key="index"></span>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import {addClass} from '../../common/js/dom'

    export default {
        name: "slider",
        data() {
            return {
                dots: [],
                currentPageIndex: 0
            }
        },
        props:
            {
                loop: {
                    type: Boolean,
                    default: true
                },
                interval: {
                    type: Number,
                    default: 1000
                }
            }
        ,
        mounted() {
            this.update()
            //监听尺寸
            window.addEventListener('resize',()=>{
                if(!this.slide){
                    return
                }
                clearTimeout(this.time)
                this.resetWidth()
            })
        },
        methods: {
            init() {
                this.initWidth()
                this.initBS()
                this.initDots()
            },
            initWidth(isResize) {
                this.children = this.$refs.slideGroup.children
                let slideWidth = this.$refs.slide.clientWidth
                for (let i = 0; i < this.children.length; i++) {
                    let child = this.children[i]
                    addClass(child, 'slide-item')
                    child.style.width = slideWidth + 'px'
                }
                let sumWidth = slideWidth * this.children.length
                if (this.loop&&!isResize) {
                    sumWidth = slideWidth * (this.children.length + 2)
                }
                this.$refs.slideGroup.style.width = sumWidth + 'px'
            },
            resetWidth(){
                this.initWidth(true)
            },
            initBS() {
                this.slide = new BScroll(this.$refs.slide, {
                    scrollX: true,
                    scrollY: false,
                    momentum: false,
                    snap: {
                        loop: this.loop,
                        threshold: 0.1,
                        speed: 400
                    },
                    bounce: false,
                    stopPropagation: true,
                    click: true
                })

                this.slide.on('scrollEnd', () => {
                    this.currentPageIndex = this.slide.getCurrentPage().pageX
                    this.play();
                })

                this.slide.on('beforeScrollStart', () => {
                    clearTimeout(this.timer)
                })

            },
            initDots() {
                this.dots = new Array(this.children.length)
                if(this.loop){
                    this.dots = new Array(this.children.length-2)
                }
            },
            update() {
                if (this.slide) {
                    this.slide.destroy()
                }
                this.$nextTick(() => {
                    this.init()
                })
            },
            play() {
                clearTimeout(this.timer)
                this.timer = setTimeout(() => {
                    this.slide.next()
                }, this.interval)

            }
        }
    }
</script>

<style scoped lang="stylus">
    .slide
        position relative
        overflow hidden
        .slide-group
            .slide-item
                display inline-block
                height auto
        .slide-dot
            position absolute
            text-align center
            bottom 5px
            left 0
            right 0
            span
                display inline-block
                width 8px
                height 8px
                background darkcyan
                margin  0 5px
                border-radius 10px
                z-index 1
                &.active
                    width 9px
                    height 9px
                    background #ffffff
</style>