import request from '../utils/request'
import {base,qss} from "../utils/request"

export const getCommentInfo = () => {return request.get(`${base}/commentInfo`)}

export const Create = params => { return request.post(`${base}/comment`, qss(params))}

export const upVote = params => { return request.get(`${base}/upVote`,{params:params})}