import React from 'react'
import { createGlobalStyle } from 'styled-components';
import FrontPage from './components/FrontPage/FrontPage'
import MyMatchs from './components/MyMatchs/MyMatchs';
import { useState } from "react";

 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
    /* background-color: black; */
  }

`

function App() {

  const [renderPage, setRenderPage] = useState("FrontPage")

  const chooseScreen = () => {
    switch(renderPage){
      case 'FrontPage':
        return <FrontPage goToMyMatchs={goToMyMatchs}/>
      case 'MyMatchs':
        return <MyMatchs goToFrontPage={goToFrontPage}/>
      default:
        return <FrontPage goToMyMatchs={goToMyMatchs}/>
    }
 }

  const goToMyMatchs = () => {
    setRenderPage("MyMatchs")
  }

  const goToFrontPage = () => {
    setRenderPage("FrontPage")
  }



  return (
    <div>
       <GlobalStyle/>
      {chooseScreen()}
    </div>
  )
}


export default App;
