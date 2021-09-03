import React from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/url'
import useRequestData from '../../hooks/useRequestData'

export const DetailsPage = () => {
    const params = useParams()
    console.log(params)

    const details = useRequestData({}, `${BASE_URL}/posts/${params.id}/comments`)
    console.log(details)
    return(
        <div>
            detalhes
        </div>
    )

}