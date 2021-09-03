import React from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import {aluno} from "../../consts/consts"
import useForm from "../../hooks/UseForm"
import Button from '@material-ui/core/Button';
import { TextField, Typography } from "@material-ui/core"
import { Form } from "./styles"

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
    <Typography variant="h2">Login</Typography>

      <Form onSubmit={submitLogin}>
      <TextField 
      label="E-mail"
      name={'email'}
      type={'email'}
      value={form.email}
      onChange={onChange}
    //   placeholder={'E-mail'}
      required
      />

      <TextField 
      label="Senha"
      name={'password'}
      type={'password'}
      value={form.password}
      onChange={onChange}
    //   placeholder={'Senha'}
      required
      />
      <Button variant="contained" color="primary">Enviar</Button>
      </Form>

      <br/>
      <Button variant="outlined" color="default" onClick={goToBack}>Voltar</Button>
    </div>
  )
}

export default LoginPage