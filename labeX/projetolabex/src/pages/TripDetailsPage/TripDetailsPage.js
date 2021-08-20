import React from "react"
import { useHistory } from "react-router-dom"
import { usePermissionLogin } from "../../hooks/HookControl"

function TripDetailsPage() {
    usePermissionLogin()
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

  return (
    <div>
      <h1>LabeX</h1>
      <button onClick={goBack}>Voltar</button>
    </div>
  )
}

export default TripDetailsPage