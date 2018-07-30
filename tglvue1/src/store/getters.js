const getters = {
    token: state => { return state.user.token},
    toPath:state => {return state.toPath},
    seller:state => {return state.seller}
}
export default getters