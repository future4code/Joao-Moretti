import React from "react"
import { useHistory } from "react-router-dom";

function ApplicationFormPage() {

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return (
    <div>
       <h1>Inscrever</h1>
       <select placeholder={'Escolha uma Viagem'}>
          <option>Teste 5</option>
          <option>Viagem Teste</option>
          <option>Flamarion</option>
          <option>Visitar a ovelha sideral</option>
       </select>

       <input 
       placeholder={'Nome'}
       />
       <input
       placeholder={'Idade'}
       />
       <input 
       placeholder={'Texto de Canditadura'}
       />
       <input 
       placeholder={'Profissão'}
       />

      <input type='country'/>
       <button onClick={goBack}>Voltar</button>
    </div>
  );
}

export default ApplicationFormPage