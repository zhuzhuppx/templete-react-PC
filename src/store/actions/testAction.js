import * as type from '../type'
import { get } from '../../utils/fetch.js'
import allUrls from '../../utils/urls'
// 保存用户信息
const GetApplyedPageListAction = (payload) => {
    return {
        type: type.GET_APPLYED_PAGE_LIST,
        payload
    }
}
const GetApplyedPageList = (params = { pageIndex: 1, pageSize: 10 }) => {
    return  dispatch => {
      get(allUrls.dbts.GetApplyedPageList, params).then(({data})=>{
            console.log(data.DataValue.Items);
            dispatch(GetApplyedPageListAction(data.DataValue.Items))
        })
        
    }

}
export { GetApplyedPageList }