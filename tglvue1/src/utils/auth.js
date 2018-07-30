import Cookies from 'js-cookie'
 const TokenKey = 'User-Token'

 const ToPath = 'To-Path'

export function getToken() {
    return Cookies.get(TokenKey)
}
export function setToken(token) {
    return Cookies.set(TokenKey,token)
}
export function removeToken() {
    return Cookies.remove(TokenKey)
}
export function setToPath(toPath) {
    return Cookies.set(ToPath,toPath)
}
export function getToPath() {
    return Cookies.get(ToPath)
}
export function removeToPath() {
    return Cookies.remove(ToPath)
}