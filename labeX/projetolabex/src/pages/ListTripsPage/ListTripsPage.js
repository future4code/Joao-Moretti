import React from "react"
import { useHistory } from "react-router-dom"

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
      <h1>LabeX</h1>
      <button onClick={goToBack}>Voltar</button>
      <button onClick={goToApplicationForm}>Inscrever-se</button>
    </div>
  )
}

export default ListTripsPage