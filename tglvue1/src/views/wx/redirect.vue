<template>
    <div class="redirect"></div>
</template>

<script>
    import {getWxUrl} from "../../api/wx";
    import {removeToPath} from "../../utils/auth";

    export default {
        created(){
            removeToPath()
            getWxUrl(this.$route.query.state).then(res=>{
                window.location.href=res.data
            })
        }
    }
</script>

<style scoped>

</style>