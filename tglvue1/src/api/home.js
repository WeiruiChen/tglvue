import request from '../utils/request'
import {base} from "../utils/request";

export const getSliderImgs = () => {console.log(`${base}/banner`); return request.get(`${base}/banner`)}

export const getHotItems = () => {return request.get(`${base}/seller`,{params:{isRecommend:1}})}

export const getWorthItems = () => {return request.get(`${base}/seller`,{params:{isRecommend:0}})}

export const getNotices = () => {return request.get(`${base}/reserve`)}

export const getTopConsume = params => {return request.get(`${base}/topConsume`,{params:params})}