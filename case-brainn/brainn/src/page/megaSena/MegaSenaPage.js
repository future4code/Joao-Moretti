import React, { useContext, useEffect, useState } from "react"
import Buttons from "../../components/Buttons";
import Number from "../../components/numbersComponent/Number";
import { BASE_URL } from "../../constants/url";
import GlobalStateContext from "../../global/GlobalStateContext";
import { TitleContainer } from "../../global/styledGlobal";
import { useGetConcursos } from "../../hooks/useGetConcursos";
import { Container, MegaSenaContainer, SorteioContainer } from "./styled";

const MegaSenaPage = () => {

  const {loterias, loteriasConcursos} = useContext(GlobalStateContext)
  
  console.log("loterias", loterias)
  console.log("loteriasConcurso", loteriasConcursos)

  const concursoId = loteriasConcursos && loteriasConcursos.find((item) => {
    return  item.loteriaId === 0
  })

  
  console.log("concursoID", concursoId && concursoId.concursoId)

  
  const numbers = useGetConcursos(`${BASE_URL}/concursos/${concursoId && concursoId.concursoId}`, [])
  

  console.log("AQ", numbers)


  return (
    <Container>
      <MegaSenaContainer>

        <Buttons />
        <TitleContainer>
        <img src="https://cdn-icons-png.flaticon.com/512/1442/1442924.png" alt={"trevo"}/>
        <h1> MEGA-SENA </h1>
        </TitleContainer>
        
      </MegaSenaContainer>

      <SorteioContainer>
        {numbers && numbers.map((item) => {
          return <Number item={item}/> 
        })}
      </SorteioContainer>
    </Container>
  );
}

export default MegaSenaPage;