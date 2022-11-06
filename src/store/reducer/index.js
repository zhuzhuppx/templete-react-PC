/**
 * 结合多个reducer 共同导出
 */
import {combineReducers} from 'redux'
import commonReducer from './commonReducer'
import testReducer from './testReducer'

export default combineReducers({commonReducer,testReducer})