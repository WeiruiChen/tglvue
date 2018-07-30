import request from '../utils/request'
import {base} from "../utils/request"

export const getVoucher = params => {return request.get(`${base}/voucher`,{params:params})}