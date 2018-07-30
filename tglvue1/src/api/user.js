import request from '../utils/request'
import {base} from "../utils/request"

export const getMyPromotion = params => {return request.get(`${base}/myChildren`,{params:params})}

export const getSubordinate = params => {return request.get(`${base}/subordinate`,{params:params})}