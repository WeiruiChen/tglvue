<template>
    <div class="wxlogin">
        <h1 style="color: black">正在登录....</h1>
    </div>
</template>

<script>

    import {getToPath} from "../../utils/auth";

    export default {
        created(){
            let token = this.$route.query.loginToken
            this.$store.dispatch("Login",token)
            var url = "/my"
            if(getToPath()){
                url=getToPath()
            }
            this.$router.push({
                path:url
            })
        }
    }
</script>

<style scoped>

</style>