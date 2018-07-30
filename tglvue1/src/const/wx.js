const APPID = "wx6dc17bf24c9ef57d"
const SECRET = "557cc662bac69e217b24ab0720578d47"
export const WX_REDIRECT_URI = "http://app.tejile.com/wxRedirect"

export const GET_CODE_URL = () =>{return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APPID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=SCOPE&state=STATE#wechat_redirect`}

export const GET_TOKEN_URL = code => {return `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${APPID}&secret=${SECRET}&code=${code}&grant_type=authorization_code`}

export const GET_INFO_URL = (access_token,openid) => {return ` https://api.weixin.qq.com/sns/userinfo?access_token=${access_token}&openid=${openid}&lang=zh_CN`}
