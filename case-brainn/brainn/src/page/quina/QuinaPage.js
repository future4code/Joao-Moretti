import React, { useContext } from "react"
import Buttons from "../../components/Buttons";
import Number from "../../components/numbersComponent/Number";
import { BASE_URL } from "../../constants/url";
import GlobalStateContext from "../../global/GlobalStateContext";
import { TitleContainer } from "../../global/styledGlobal";
import { useGetConcursos } from "../../hooks/useGetConcursos";
import { Container, QuinaContainer, SorteioContainer } from "./styled";

const QuinaPage = () => {

  const {loteriasConcursos} = useContext(GlobalStateContext)

  const concursoId = loteriasConcursos && loteriasConcursos.find((item) => {
    return  item.loteriaId === 1
  })

  const numbers = useGetConcursos(`${BASE_URL}/concursos/${concursoId && concursoId.concursoId}`, [])
  
  return (
    <Container>
    <QuinaContainer>
        <Buttons />
        <TitleContainer>
        <img src="https://cdn-icons-png.flaticon.com/512/1442/1442924.png" alt={"trevo"}/>
        <h1> QUINA </h1>
        </TitleContainer>
    </QuinaContainer>

    <SorteioContainer>
    {numbers && numbers.map((item) => {
          return <Number item={item}/> 
        })}
    </SorteioContainer>
  </Container>
  );
}

export default QuinaPage;