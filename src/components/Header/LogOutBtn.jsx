import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { login, logout } from '../../features/authSlice'
import { useNavigate } from 'react-router-dom'
 

function LogOutBtn() {
    const dispatch = useDispatch()
    
    const logoutHandler = () => {
        authService.logout({}).then(() => {
            dispatch(logout())
        })
    }
  return (
    <button onClick={logoutHandler}> LogOutBtn </button>
  )
}

export default LogOutBtn
