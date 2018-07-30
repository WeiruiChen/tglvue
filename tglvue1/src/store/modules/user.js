import {setToken, removeToken, getToken} from "../../utils/auth";

const user = {
    state: {
        token:getToken(),
        name:'',
        avatar:''
    },
    mutations: {
        SET_TOKEN:(state,token) => {
            state.token = token
        },
        SET_NAME:(state,name) => {
            state.name = name
        },
        SET_AVATAR:(state,avatar) => {
            state.avatar = avatar
        }
    },actions: {
        Login({commit},token){
            setToken(token)
            // commit('SET_TOKEN',token)
        },Logout({commit},token){
            removeToken(token)
            commit('SET_TOKEN','')
        }
    }

}
export default user