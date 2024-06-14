import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { handleSnackAlert } from '../../Redux/Slice/SnackAlertSlice/SnackAlertSlice'

const Protected = ({children}) => {
    const auth = useSelector(state=>state?.auth)
    const dispatch = useDispatch()
    if(!auth?.authenticated){
        dispatch(handleSnackAlert({open:true, message:"You're not Authorized, Login first.", severity:"error"}))
            return <Navigate to="/" replace={true} />
    } 
   return  <div>{children}</div>
}

export default Protected