import request from '../utils/request'
import {base,qss} from "../utils/request"

export const getUser = () => {return request.get(`${base}/userInfo`)}

export const getUserId = () => {return request.get(`${base}/ID`)}

export const getUpdateByUser = params => {return request.post(`${base}/update`,qss(params))}