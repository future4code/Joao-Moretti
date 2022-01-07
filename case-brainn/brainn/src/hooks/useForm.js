import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { goToQuina } from "../route/Coordinator";

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)
    const history = useHistory()

    const onChange = (event) => {
        const {value, name} = event.target
        setForm({...form, [form]: value})

        if(form === "quina"){
            goToQuina(history)
        }
    }

    const clear = () => {
        setForm(initialState)
    }

    return {form, onChange, clear}
}

export default useForm