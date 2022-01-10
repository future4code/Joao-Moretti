import React from 'react'
import { HeaderContainer } from "./styled"

const Header = (props) => {

  const titleHeader = () =>{
    if(props.title === "home"){
      return <h3>FILMES POPULARES DO DIA</h3>
    }
    else{
      return <h3> DETALHES DO FILME </h3>
    }
  }

  return (
    <HeaderContainer>
        {titleHeader()}
    </HeaderContainer>
  );
}

export default Header