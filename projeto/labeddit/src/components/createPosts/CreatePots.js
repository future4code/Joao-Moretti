import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { BodyInput, ButtonFormCreate, CardContentCreate, CardCreate, DivTitle, FormCreate, TitleInput } from './CreateStyles';
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom';
import { BASE_URL } from '../../constants/url';
import { users } from '../../services/users';
import axios from 'axios';
import { Typography } from '@material-ui/core';
import { goToFeedPage } from '../../router/coordinator';


export default function CreatePost() {
    const [form, handleInputChange, clear] = useForm({title: "", body: ""})
    const history = useHistory()

    const CreatePosts = () => {
      axios.post(`${BASE_URL}/posts`, form, {
        headers: {
          Authorization: localStorage.getItem('token')
        } })
      .then((res) => {
          alert(res.data)
      })
      .catch((error) => {
        console.log(error.response)
      })

    }

    const onSubmitCreate = (event) => {
      event.preventDefault()
      CreatePosts()
      clear()
      goToFeedPage(history)
    }

  return (
    <CardCreate>
      <CardContentCreate>
        <DivTitle>
      <Typography variant='h5'>Criar um Post</Typography> 
        </DivTitle>
        <FormCreate onSubmit={onSubmitCreate}>
      <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TitleInput 
            name='title'
            value={form.title}
            onChange={handleInputChange}
            label="Titulo" 
            required
            />
          </Grid>
        </Grid>

        <BodyInput
          name='body'
          value={form.body}
          onChange={handleInputChange}
          placeholder="Conte sua historia..."
          variant="outlined"
          required
          />

          <ButtonFormCreate variant='contained' color='secondary' type='submt'>Enviar</ButtonFormCreate>
          </FormCreate>
      </CardContentCreate>
    </CardCreate>
  );
}