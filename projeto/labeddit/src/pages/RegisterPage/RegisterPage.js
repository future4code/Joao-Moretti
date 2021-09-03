import React from 'react'
import { ContainerFormRegister, FormRegister } from './RegisterStyle'
import { Button, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Link, useHistory } from 'react-router-dom';
import RedditIcon from '@material-ui/icons/Reddit';
import useForm from '../../hooks/useForm';
import { users } from '../../services/users';
import { BASE_URL } from '../../constants/url';
import { useUnProtegedPage } from '../../hooks/useUnProtegedPage';

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

export const RegisterPage = () => {
        useUnProtegedPage()
        const history = useHistory()
        const classes = useStyles();
        const [form, handleInputChange, clear] = useForm({username: "", email: "", password: ""})

        const onSubmitForm = (event) => {
          event.preventDefault()
          users(`${BASE_URL}/users/signup`, form, clear, history)
    
        }

        return (
        <div>
        <ContainerFormRegister>
        <Avatar className={classes.avatar}>

        <RedditIcon />
        </Avatar>
        <Typography variant='h2' >Cadastrar</Typography>
          <br/>
        <FormRegister onSubmit={onSubmitForm}>

        <TextField 
        name="username"
        value={form.username}
        onChange={handleInputChange}
        label="Nome de usuário" 
        variant="outlined" 
        type='text'
        required
        />

        <br/>
        <TextField 
        name="email"
        value={form.email}
        onChange={handleInputChange}
        label="Email" 
        variant="outlined" 
        type='email'
        required
        />

        <br/> 
        <TextField 
        name="password"
        value={form.password}
        onChange={handleInputChange}
        label="Senha" 
        variant="outlined" 
        type='password'
        helperText="Senha deve conter no mínimo 8 caracteres"
        required
        />

        <br/> <br/>
        <Button variant='contained' color='secondary' type='submit'>Enviar</Button>
        <Link to={'/login'} >
              <p>Já uma conta? Entrar</p>
              </Link>

        </FormRegister>

        </ContainerFormRegister>
        
        
        </div>)
}  