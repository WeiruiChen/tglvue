import axios from 'axios'
import store from '../store'
import {getToken} from "./auth"
import qs from 'qs'
import isDev from '../utils/dev'

export const base = isDev?'http://localhost:8080/tgl/front':'http://server.tejile.com/' 

export const qss = params => {return qs.stringify(params)}

const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 15000
})

//请求拦截器 所有的请求带上token
service.interceptors.request.use(config => {
    if(store.getters.token){
        config.headers['userToken'] = getToken()
    }
    return config
},error => {
    //console.log(error) // for debug
    Promise.reject(error)
})

service.interceptors.response.use(response => {
    const res = response.data
    let msg = '未知错误'
    if(res.status!==10000){
        if(res.status===10002){
            store.dispatch('Logout')
            location.reload()// 为了重新实例化vue-router对象 避免bug
        }
        if(res.status>10000){
            msg = res.msg
        }
        return Promise.reject(msg)
    }
    return response.data
},error => {
    return Promise.reject(error)
})
export default service