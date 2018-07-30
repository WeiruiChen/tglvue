const app = {
    state: {
        toPath: ''
    },
    mutations: {
        SET_TO_PATH:(state,toPath)=>{
            state.toPath=toPath
        }
    },actions:{
        setToPath({commit},toPath){
            commit('SET_TO_PATH',toPath)
        }
    }
}
export default app