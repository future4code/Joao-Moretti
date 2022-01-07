import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { BASE_URL } from '../constants/url'
import useRequest from '../hooks/useRequest'
import { goToLotofacil, goToLotomania, goToMegaSena, goToQuina, goToSorte, goToTimemania } from '../route/Coordinator'
import { useSwitchCoordinator } from '../route/SwitchCoordinator'
import Card from './Card'
import { ButtonContainer } from './styled'

const Buttons = () => {

    const loterias = useRequest(`${BASE_URL}/loterias`)
    const history = useHistory()


    return <ButtonContainer>
        
        {loterias && loterias.map((item) => {
            return <Card key={item.id} item={item}/> 
        })}
        
     
      

    </ButtonContainer>

}

export default Buttons