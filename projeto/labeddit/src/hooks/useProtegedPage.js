import { useLayoutEffect } from "react"
import { useHistory } from "react-router-dom"
import { goToLoginPage } from "../router/coordinator"

export const useProtegedPage = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if(!token){
            goToLoginPage(history)
        }

    },[history])
}