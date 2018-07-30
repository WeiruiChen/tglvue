import request from '../utils/request'
import {base,qss} from "../utils/request"

export const getSellerName = () => {return request.get(`${base}/sellerName`)}

export const Create = params => { return request.post(`${base}/booking`, qss(params))}

export const getPhone = params => { return request.get(`${base}/getPhone`, {params:params})}

export const getCode = params => { return request.get(`${base}/getCode`, {params:params})}

