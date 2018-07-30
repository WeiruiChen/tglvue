<template>
    <div class="error">
        <h3>{{message}}</h3>
    </div>
</template>

<script>
    export default {
        created(){
          this.message += this.$route.query.msg
        },
        data(){
            return {
                message:'错误!'
            }
        }
    }
</script>

<style scoped lang="stylus">
    .error
        h3
            color black
</style>