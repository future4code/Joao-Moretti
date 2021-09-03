import React from "react"
import { useHistory } from "react-router-dom"
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


function ListTripsPage() {
  const history = useHistory()

  const goToApplicationForm = () => {
    history.push("/trips/application")
  }

  const goToBack = () => {
    history.goBack()
  }

  return (
    <div>
      <Typography variant="h1" align={'center'} gutterBottom >LabeX</Typography>
      <Button variant="outlined" color="default" onClick={goToBack}>Voltar</Button>
      <Button variant="contained" color="secondary" onClick={goToApplicationForm}>Inscrever-se</Button>
      
      

    </div>
  )
}

export default ListTripsPage