import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from '../views/home'
import Detail from '../views/detail/detail'
import active from '../views/active/active'
import my from '../views/my/my'
import comment from '../views/comment/comment'
import order from '../views/order/order'
import orderRecord from '../views/orderRecord/orderRecord'
import orderDetail from '../views/orderDetail/orderDetail'
import Voucher from '../views/voucher/voucher'
import User from '../views/user/user'
import Game from '../views/game/game'
import Pay from '../views/pay/pay'
import WxLogin from '../views/wx/login'
import Error from '../views/error'
import WxRedirect from '../views/wx/redirect'
import UserInfo from '../views/userInfo'
import Post from '../views/post/post'

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
            children: [{
                path: '/detail/:id',
                component: Detail
            }]
        }, {
            path: '/act',
            component: active,
            children: [
                {
                    path: '/game',
                    component: Game
                }]
        }, {
            path: '/my',
            component: my,
            children: [{
                path: '/orderRecord',
                component: orderRecord
            },{
                path: '/orderDetail',
                component: orderDetail
            }, {
                path: '/voucher',
                component: Voucher
            }, {
                path: '/user',
                component: User
            }, {
                path: '/pay',
                component: Pay
            },{
                path:'/userInfo',
                component:UserInfo
            },{
                path:'/post',
                component:Post
            }
            ]
        }, {
            path: '/comment',
            component: comment
        }, {
            path: '/order',
            component: order
        }, {
            path: '/wxLogin',
            component: WxLogin
        }, {
            path: '/error',
            component: Error
        }, {
            path: '/wxRedirect',
            component: WxRedirect
        }
    ]
})
