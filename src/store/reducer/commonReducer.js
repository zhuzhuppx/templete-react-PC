/**
 * 基础信息reducer
 */
import * as type from '../type'
import default_state from '../defaultState'

const commonReducer = (state = default_state, action) => {
    switch (action.type) {
        case type.SAVE_USER_INFO:
            return { ...state, ...{ userInfo: action.payload } };
        case type.SAVE_PUB_DICT:
            return { ...state, ...{ dict: action.payload } }
        default:
            return state
    }
}

export default commonReducer