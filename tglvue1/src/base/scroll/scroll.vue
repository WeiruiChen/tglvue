<template>
    <div  ref="wrapper" class="wrapper">
        <slot></slot>
    </div>
</template>

<script>
    import BS from 'better-scroll'
    export default {
        mounted() {
            this.$nextTick(() => {
                this._initScroll()
            })
        },
        methods: {
            _initScroll() {
                this.scroll = new BS(this.$refs.wrapper,{
                    click:true,
                    probeType:1,
                })
            }
        }
    }
</script>

<style scoped lang="stylus">
    .wrapper
        height 100%
        overflow hidden
</style>