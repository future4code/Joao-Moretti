import React from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import {aluno} from "../../consts/consts"
import useForm from "../../hooks/UseForm"

function LoginPage() {
    const history = useHistory()
    const {form, onChange, cleanForm} = useForm({
        email:"", 
        password:""
    })

    const goToBack = () => {
        history.goBack()
    }

    const submitLogin = (event) => {
        event.preventDefault()
        const body = {
            ...form
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/login`, body)
        .then((res) => {
            console.log('Deu certo', res.data.token)
            window.localStorage.setItem('token', res.data.token)
            cleanForm()
            history.push("/adminPage")
        })
        .catch((error) => {
            console.log('Deu errado', error.response)
        })
    }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={submitLogin}>
      <input 
      name={'email'}
      type={'email'}
      value={form.email}
      onChange={onChange}
      placeholder={'E-mail'}
      required
      />

      <input 
      name={'password'}
      type={'password'}
      value={form.password}
      onChange={onChange}
      placeholder={'Senha'}
      required
      />
      <button>Enviar</button>
      </form>

      <br/>
      <button onClick={goToBack}>Voltar</button>
    </div>
  )
}

export default LoginPage