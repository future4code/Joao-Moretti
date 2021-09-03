import React from "react"
import { useHistory } from "react-router-dom"
import { usePermissionLogin } from "../../hooks/HookControl"
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function AdminHomePage() {
    usePermissionLogin()
    const history = useHistory()

    const goBack = () => {
        history.push('/')
    }

    const goToCreateTripPage = () => {
        history.push("/admin/trips/create")
    }

    const goToDetails = () => {
      history.push("/admin/trips/:id")
    }

  return (
    <div>
      <Typography variant="h1" align={'center'} gutterBottom >LabeX</Typography>
      <Button variant="contained" color="secondary" onClick={goToCreateTripPage}>Criar Viagens</Button>
      <Button variant="outlined" color="default" onClick={goBack}>Voltar</Button>

      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button onClick={goToDetails}>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button onClick={goToDetails}>
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </div>
  )
}

export default AdminHomePage