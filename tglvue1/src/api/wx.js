import request, {base} from '../utils/request'

export const getWxUrl = state => {return request.get(`${base}/wx/dmz/code`,{params:{state:state}})}
