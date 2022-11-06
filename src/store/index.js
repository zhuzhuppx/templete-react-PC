import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise'
import thunkMiddleware from 'redux-thunk'
import { GetApplyedPageList } from './actions/testAction'

import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(promiseMiddleware, thunkMiddleware))
)
export default store