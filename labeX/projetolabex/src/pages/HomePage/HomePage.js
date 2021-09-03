import React from "react"
import { useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { DivButton } from "./styles";



function HomePage() {

    const history = useHistory()

    const goToListTrips = () => {
      history.push("/trips/list")
    }

    const goToLoginPage = () => {
      history.push("/login")
    }


  return (
    <div>
       <Typography variant="h1" align={'center'} gutterBottom >LabeX</Typography>

       <DivButton>
      <Button variant="contained" color="primary" onClick={goToListTrips}>Ver Viagens</Button>
      <Button variant="outlined" color="secondary" onClick={goToLoginPage}> Área de Administrador</Button>
       </DivButton>
    </div>
  );
}

export default HomePage