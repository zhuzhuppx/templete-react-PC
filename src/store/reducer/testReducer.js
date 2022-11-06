import * as type from '../type'
const testReducer = (state={applyedList:[]}, action) => {
    switch (action.type) {
        case type.GET_APPLYED_PAGE_LIST:
            return { ...state, ...{ applyedList: action.payload } };
        default:
            return state
    }
}
export default testReducer