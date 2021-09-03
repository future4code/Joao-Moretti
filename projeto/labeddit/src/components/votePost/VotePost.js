import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../../constants/url'

export const VotePost = () => {

    const createVotes = (props) => {

        const body = {
            direction: 0
        }

        axios.post(`${BASE_URL}/posts/${props.postsId}/votes`, body, {
          headers: {
            Authorization: localStorage.getItem('token')
          } })
          .then((res) => {
            console.log(res)
          })
          .catch((error) => {
            console.log(error.response)
          })
        }

    return(
        <div>
            <button onClick={createVotes}>⬆️</button>
            vote
            <button>⬇️</button>
        </div>
    )
}