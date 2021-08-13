import React from 'react'
import { useEffect, useState } from "react";
import { ContainerMatch } from './stylesMatch'
import axios from "axios"
import { aluno } from '../Consts/Consts'
// import {BioDiv} from './stylesMatch'
import {TextDiv} from './stylesMatch'
import {ButtonDiv} from './stylesMatch'
import {Image} from './stylesMatch'
import {HeaderDiv} from './stylesMatch'
import {ButtonMatchs} from './stylesMatch'




function FrontPage(props) {
    const [profiles, setProfiles] = useState({})
    

    const getProfiles = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`)
            .then((res) => {
                console.log(res.data.profile)
                setProfiles(res.data.profile)
            })
            .catch((error) => {
                console.log(error.response)
                console.log('deu erro')
            })
    }

    const choosePerson = (choice) => {
        const body = {
            id: profiles.id,
            choice: choice
        }
        const headers = {
            headers: {
                Authorization: 'joao-moretti-lovelace'
            }
        }

        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`, body, headers)
        .then(() => {
        //    console.log('foi')
           getProfiles()

        })
        .catch((error) => {
            console.log(error.response);
        })
    }

    const profileYes = () => {
        choosePerson(true)
    }

    const profileNo = () => {
        choosePerson(false)
    }

     
    useEffect(() => {
        getProfiles()
    }, [])

    // useEffect(() => {
    //     choosePerson()
    // }, [])

    console.log(profiles)
    return (
        <ContainerMatch>
            
            <HeaderDiv>
            <h3>AstroMatch</h3>
            <ButtonMatchs onClick={props.goToMyMatchs}> <img src={'https://image.flaticon.com/icons/png/512/545/545837.png'} alt={'Matchs'}/> </ButtonMatchs>
            
            </HeaderDiv>
            

            <Image src={profiles.photo} alt={profiles.name} />

            <TextDiv>
            <h3>{`${profiles.name}, ${profiles.age}`}</h3>
            <p>{profiles.bio}</p>
            </TextDiv>
           
        

        <ButtonDiv>            
            <button onClick={profileNo}>💔</button>
            <button onClick={profileYes}>❤️</button>
        </ButtonDiv>   
            
        </ContainerMatch>
        
    )
}

export default FrontPage;