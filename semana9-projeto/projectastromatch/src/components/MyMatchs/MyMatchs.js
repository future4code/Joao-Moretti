import axios from "axios"
import React, { useEffect, useState } from "react"
import {ContainerMatch, HeaderDiv, ButtonClear, ButtonReturn, Peoples, ContainerPeople, ImgMatch} from '../FrontPage/stylesMatch'
import { aluno } from '../Consts/Consts'



function MyMatchs(props) {

    const [matches, setMatches] = useState([])

    const getMatches = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`)
        .then((res) => {
            console.log(res.data)
            setMatches(res.data.matches)
        })
        .catch((error) => {
            console.log(error.response)
            console.log('deu erro')
        })
    }

    useEffect(() => {
        getMatches()
    }, [getMatches])

    const clearMatchs = () => {
        const headers = {
            headers: {
                Authorization: 'joao-moretti-lovelace'
            }
        }
        axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/clear`, headers)
        .then(() => {
            console.log('foi')
        })
        .catch((error)=> {
            console.log(error.response)
        })
    }

    return(
        <ContainerMatch>
            <HeaderDiv>
            <h3>AstroMatch</h3>
            <ButtonClear onClick={clearMatchs}><img src={'https://img-premium.flaticon.com/png/512/2099/premium/2099171.png?token=exp=1628882908~hmac=a6103e43390dff80f32dfa3ae620b903'} alt={'lixeira'}/> </ButtonClear>
            <ButtonReturn onClick={props.goToFrontPage}><img src={'https://img-premium.flaticon.com/png/512/2099/premium/2099190.png?token=exp=1628882610~hmac=d7bc3333ca3356e574a19eb1ab7622ff'} alt={'voltar'}/></ButtonReturn>            
            </HeaderDiv>

            <ContainerPeople>
            {matches.map((pro) => {
                 return <Peoples key={pro.id}>
                     <ImgMatch src={pro.photo} alt={pro.name}/>
                     <p>{pro.name}</p>
                 </Peoples>
             })}
            
            </ContainerPeople>
        </ContainerMatch>
    )
}

export default MyMatchs