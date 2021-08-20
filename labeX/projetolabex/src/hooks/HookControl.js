import { useEffect } from "react"
import { useHistory } from "react-router-dom"

export const usePermissionLogin = () => {
    const history = useHistory()

    useEffect(() => {

        const token = window.localStorage.getItem('token')

        if(token === null){
            history.push("/login")
        }
    },[history])

}