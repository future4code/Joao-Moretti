import React from "react"
import { useHistory } from "react-router-dom"
import { usePermissionLogin } from "../../hooks/HookControl"
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TripInfo from "./TripInfo";
import CandidateList from "./CandidateList";
import { ContainerDetails } from "./styles";

function TripDetailsPage() {
    usePermissionLogin()
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

  return (
    <div>
      <Typography variant="h1" align={'center'} gutterBottom >LabeX</Typography>
      <Button variant="outlined" color="default" onClick={goBack}>Voltar</Button>

      <ContainerDetails>      
      <TripInfo/>
      <CandidateList/>
      </ContainerDetails>

    </div>
  )
}

export default TripDetailsPage