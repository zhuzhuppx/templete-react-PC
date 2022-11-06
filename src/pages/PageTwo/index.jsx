import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const PageTwo = (props) => {
    // const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.commonReducer)
    console.log(userInfo.name)
    return (
        <div>{userInfo.name}</div>
    )
}
export default PageTwo; 
