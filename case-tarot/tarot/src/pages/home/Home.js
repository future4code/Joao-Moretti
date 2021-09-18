import { useContext, useEffect, useState } from "react";
import Popup from "reactjs-popup";
import Cards from "../../components/cards/Cards";
import PopUp from "../../components/popUp/PopUp";
import { ContextTarot } from "../../globals/GlobalContext";
import { ButtonDiv, ButtonStart, CardContainer, CardsTarot, CardsTarotBack, HomeBody } from "../HomeStyles";


const Home = () => {
    const {URL_BASEIMAGE, URL_BACKIMAGE, tarot, getCards} = useContext(ContextTarot)
    const [upset, setUpset] = useState(true)
    const [popUp, setPopUp] = useState(false)

    useEffect(() => {
        getCards()
    }, [])

    const upsetCard = () => {
        setUpset(!upset)

  //       tarot.cards.sort(()=>  Math.random() - 0.5  )
  // const random = Math.floor(Math.random() * tarotCards.length)
  // const randomCard = tarot.cards[random]
    }

    const openPopUp = () => {
        setPopUp(!popUp)

        
    }

    const renderTarot = tarot && tarot.cards && tarot.cards.map((cards) => {
        return (
           <CardsTarot key={cards.name}>
                <p>{cards.name}</p>
                <img src={URL_BASEIMAGE + cards.image} alt={cards.name}/>
            </CardsTarot> 
        )
    })

    const renderTarotBack = tarot && tarot.cards && tarot.cards.map((cards) => {
      return (
         <CardsTarotBack key={cards.name} onClick={openPopUp}>
              <img src={URL_BACKIMAGE} alt={'Carta virada'}/>

          </CardsTarotBack> 
      )
  })

  return (
    <HomeBody>
      <ButtonDiv>
        <ButtonStart color='secondary' variant='contained' onClick={upsetCard}> {upset ? <p> iniciar </p> : <p> voltar </p>} </ButtonStart>
        </ButtonDiv>
      <CardContainer>
      {upset ? renderTarot : <Cards/> }
      {/* {popUp && <PopUp content={renderTarot}
                  closePopUp={openPopUp}/>} */}
      </CardContainer>



    </HomeBody>
  );
}

export default Home