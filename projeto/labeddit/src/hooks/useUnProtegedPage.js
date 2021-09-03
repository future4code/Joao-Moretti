import { useLayoutEffect } from "react"
import { useHistory } from "react-router-dom"
import { goToFeedPage } from "../router/coordinator"

export const useUnProtegedPage = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            goToFeedPage(history)
        }

    },[history])
}