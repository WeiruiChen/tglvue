import user from './modules/user'
import app from './modules/app'
import getters from './getters'
import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations'
import state from './state'
Vue.use(Vuex)
const store = new Vuex.Store({
    state,
    mutations,
    modules: {
        user,app
    },
    getters
})

export default store