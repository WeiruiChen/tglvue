import request from '../utils/request'
import {base} from "../utils/request"

export const getConsume = () => {return request.get(`${base}/allConsume`)}

export const getYearConsume = () => {return request.get(`${base}/year`)}

export const getMonthConsume = () => {return request.get(`${base}/month`)}

export const getWeekConsume = () => {return request.get(`${base}/week`)}

export const getWinInfo = params => {return request.get(`${base}/winInfo`,{params:params})}

export const getActivityDate = params => {return request.get(`${base}/date`,{params:params})}

export const getActivityInfo = () => {return request.get(`${base}/activityInfo`)}

export const getTime = params => {return request.get(`${base}/time`,{params:params})}

export const getTopWinner = params => {return request.get(`${base}/topWinner`,{params:params})}

export const getShare = () => {return request.get(`${base}/share`)}