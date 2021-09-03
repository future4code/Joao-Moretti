import { Button, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { ContainerForm, Form } from './LoginStyles'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Link, useHistory } from 'react-router-dom';
import RedditIcon from '@material-ui/icons/Reddit';
import useForm from '../../hooks/useForm';
import { BASE_URL } from '../../constants/url';
import { users } from '../../services/users';
import { goToFeedPage } from '../../router/coordinator';
import { useUnProtegedPage } from '../../hooks/useUnProtegedPage';

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

}));

export const LoginPage = () => {
  useUnProtegedPage()
  const history = useHistory()
  const classes = useStyles();
  const [form, handleInputChange, clear] = useForm({email: "", password: ""})

    const onSubmitForm = (event) => {
      event.preventDefault()
      users(`${BASE_URL}/users/login`, form, clear, history)
    }



        return (
        <div>

        <ContainerForm >
        <Avatar className={classes.avatar}>

        <RedditIcon />
        </Avatar>
        <Typography variant='h2' >Login</Typography>
          <br/>

        <Form onSubmit={onSubmitForm}>

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
        required
        />

        <br/> <br/>
        <Button variant='contained' color='secondary' type='submit'>Enviar</Button>
        <Link to={'/register'} >
              <p>Não tem uma conta ainda? Cadastra-se</p>
              </Link>

        </Form>

        </ContainerForm>
        </div>
        )
}  