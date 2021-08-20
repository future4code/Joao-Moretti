import React from "react"
import { useHistory } from "react-router-dom"
import { usePermissionLogin } from "../../hooks/HookControl"

function AdminHomePage() {
    usePermissionLogin()
    const history = useHistory()

    const goBack = () => {
        history.push('/')
    }

    const goToCreateTripPage = () => {
        history.push("/admin/trips/create")
    }

  return (
    <div>
      <h1>LabeX</h1>
      <button onClick={goToCreateTripPage}>Criar Viagens</button>
      <button onClick={goBack}>Voltar</button>
    </div>
  )
}

export default AdminHomePage