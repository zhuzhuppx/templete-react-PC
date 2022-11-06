import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saveUserInfo } from '../../store/actions/commonAction'
import {GetApplyedPageList} from "../../store/actions/testAction"

const PageOne = (props) => {
    const dispatch = useDispatch()
    const { applyedList } = useSelector(state => state.testReducer)
    
    const handleClick = () => {
        dispatch(saveUserInfo({ name: 'haha', age: 48 }))
        dispatch(GetApplyedPageList({pageIndex: 1, pageSize: 10}))
        console.log(applyedList);
    }

    return (
        <div>
            <button onClick={() => handleClick()}>触发redux</button>
            
        </div>
    )
}
export default PageOne;
