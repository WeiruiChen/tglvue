import request from '../utils/request'
import {base} from "../utils/request"

export const getConsume = params => {return request.get(`${base}/consume`,{params:params})}