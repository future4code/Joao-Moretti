import axios from 'axios'
import { useEffect, useState } from 'react'


const useRequestData = (url, initialState) => {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        axios
            .get(url)
            .then((res) => setData(res.data.results))
            .catch((err) => console.log(err))
    }, [url])

    return data
}

export default useRequestData