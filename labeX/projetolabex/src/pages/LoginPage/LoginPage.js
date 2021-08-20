import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import {aluno} from "../../consts/consts"

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const goToBack = () => {
        history.goBack()
    }

    const submitLogin = () => {
        const body = {
            email: email,
            password: password
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/login`, body)
        .then((res) => {
            console.log('Deu certo', res.data.token)
            window.localStorage.setItem('token', res.data.token)
            history.push("/adminPage")
        })
        .catch((error) => {
            console.log('Deu errado', error.response)
        })
    }

  return (
    <div>
      <h1>Login</h1>
      <input 
      type='email'
      value={email}
      onChange={onChangeEmail}
      placeholder={'E-mail'}
      />

      <input 
      type='password'
      value={password}
      onChange={onChangePassword}
      placeholder={'Senha'}
      />
      <button onClick={submitLogin}>Enviar</button>
      <br/>
      <button onClick={goToBack}>Voltar</button>
    </div>
  )
}

export default LoginPage