import * as type from '../type'

// 保存用户信息
const saveUserInfo = (payload) => {
    return {
        type: type.SAVE_USER_INFO,
        payload
    }
}

export { saveUserInfo }