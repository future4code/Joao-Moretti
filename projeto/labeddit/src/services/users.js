import axios from "axios"
import { goToFeedPage } from "../router/coordinator"


export const users = (url, body, clear, history) => {

    axios.post(url, body)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      clear()
      goToFeedPage(history)
    })
    .catch((error) => {
      console.log(error.response)
    })
} 