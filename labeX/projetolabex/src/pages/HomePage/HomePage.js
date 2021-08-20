import React from "react"
import { useHistory } from "react-router-dom";


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
       <h1>LabeX</h1>
      <button onClick={goToListTrips}>Ver Viagens</button>
      <button onClick={goToLoginPage}> Área de Administrador</button>
    </div>
  );
}

export default HomePage