import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToLoginPage } from '../router/coordinator'
import GlobalContext from './GlobalContext'

export const GlobalState = (props) => {
    const token = localStorage.getItem('token')
    const history = useHistory()
    
    const logout = () => {
        localStorage.removeItem('token')
    }
    
    const buttonHeader = () => {
        if(token){
            logout()
            goToLoginPage(history)

        }
    }

    const functions = {buttonHeader}
        
    

    return (
        <GlobalContext.Provider value={{ functions }}>
            {props.children}
        </GlobalContext.Provider>
    )
}