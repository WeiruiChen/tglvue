import router from '../router'
import {getToken, setToken} from "./auth"
const whiteList = ['/login','/wxLogin','/error','/wxRedirect']
import {setToPath} from './auth'
import {getWxUrl} from "../api/wx";
import isDev from '../utils/dev'
import store from '../store'


router.beforeEach((to,from,next) => {
    //开发环境直接放行
    if(isDev){
        new Promise(resolve => {
            setToken("eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzIiwic3ViIjoie1wiYXZhdGFyXCI6XCJcIixcImNyZWF0ZVRpbWVcIjpudWxsLFwiaXNBY3RpdmF0aW9uXCI6MCxcImxldmVsSWRcIjowLFwibG9naW5OYW1lXCI6XCJcIixcImxvZ2luUHdkXCI6XCJcIixcImxvZ2luVGltZVwiOm51bGwsXCJuYW1lXCI6XCJcIixcIm51bWJlclwiOlwiXCIsXCJvcGVuaWRcIjpcIlwiLFwicGhvbmVcIjpcIlwiLFwicGlkXCI6MCxcInFjQ29kZVwiOlwiXCIsXCJyb2xlXCI6MCxcInNleFwiOlwiXCIsXCJ1bmlvbmlkXCI6XCJcIixcInVwZGF0ZVRpbWVcIjpudWxsLFwidXNlcklkXCI6M30iLCJpYXQiOjE1MzE3MjYxMDQsImV4cCI6MTUzMTczMzMwNH0.zEMlkYb1JyAOVWL57BTUm1VN7r7wIEDijLVqBnf70Vg")
            store.dispatch('Login',getToken())
            resolve('ok')
        }).then(res=>{
            console.log(res)
            next();
        })
        return;
    }
    if(!getToken()){
        //不需要登录
        if(whiteList.indexOf(to.path)!==-1){
            next()
        }else {
            //设置要回调的redirect 回调会刷新不用vuex
            // store.dispatch('setToPath',to.path)
            setToPath(to.path)
            //跳转到微信登录 TODO 暂时先不动
            getWxUrl().then(res=>{
                window.location.href = res.data
            })
            // next()
        }
    }else {
        next();
    }

})
