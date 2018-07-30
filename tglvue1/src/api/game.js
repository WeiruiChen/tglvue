import request from '../utils/request'
import {base,qss} from "../utils/request"

export const create = params => {return request.post(`${base}/add`,qss(params))}

export const WinnerRecord = params => {return request.post(`${base}/isExist`,qss(params))}