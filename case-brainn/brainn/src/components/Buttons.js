import React from 'react'
import { BASE_URL } from '../constants/url'
import useRequest from '../hooks/useRequest'
import Card from './Card'
import { ButtonContainer } from './styled'

const Buttons = () => {

    const loterias = useRequest(`${BASE_URL}/loterias`)

    return <ButtonContainer>
        
        {loterias && loterias.map((item) => {
            return <Card key={item.id} item={item}/> 
        })}
        
     
      

    </ButtonContainer>

}

export default Buttons