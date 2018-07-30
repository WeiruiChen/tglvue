<template>
    <div id="app">
        <AppFooter/>
        <router-view></router-view>

    </div>
</template>

<script>
    import AppFooter from './components/footer/Footer'
    export default {
        components:{
            AppFooter
        }
    }
</script>

<style lang="stylus">
    @import "common/stylus/index.styl"
</style>
