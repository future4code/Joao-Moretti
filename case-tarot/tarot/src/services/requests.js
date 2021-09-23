import axios from "axios";

export const getTarot = (setTarot) => {
    
        axios.get('tarot.json')
        .then((res) => {
            setTarot(res.data)
        })
        .catch((error) => {
            console.log(error.response)
        })
}