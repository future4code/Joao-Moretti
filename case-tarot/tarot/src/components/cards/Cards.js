import { useContext, useState } from "react"
import ReactCardFlip from "react-card-flip"
import styled from "styled-components"
import { ContextTarot } from "../../globals/GlobalContext"
import { BackCard, CardsTarotContainer, CardsTarotGameBack, Div, FrontCard, InputCard, Test } from "./CardsStyles"


const Cards = () => {
    const {URL_BASEIMAGE, URL_BACKIMAGE, tarot, getCards} = useContext(ContextTarot)
    const [flipped, setFlipped] = useState(false)


    const handleClick = (event) => {
        event.preventDefault();
    //     for (let x of tarot.cards) {
    //     if (x === name) {
        setFlipped(!flipped)
    //     }
    // }
      }

    // handleClick = handleClick.bind(this)

    const renderTarotBack = tarot && tarot.cards && tarot.cards.map((cards) => {
        return (<>
           <ReactCardFlip flipDirection="horizontal" isFlipped={flipped}  key={cards.name} >
            {/* <InputCard type="checkbox" id={cards.name}  /> */}
               
               <FrontCard onClick={handleClick} >
                <img src={URL_BACKIMAGE} alt={'Carta virada'}/>
                </FrontCard>

                <BackCard onClick={handleClick} >
                <img src={URL_BASEIMAGE + cards.image} alt={cards.name}/>
                </BackCard>
                
  
            </ReactCardFlip> 
            </>
            
        )
    })

    return (
        
        
        <CardsTarotContainer>
            {renderTarotBack}  
        </CardsTarotContainer>
        
    )
}

export default Cards