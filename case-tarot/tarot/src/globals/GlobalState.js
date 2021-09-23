import  { useState } from "react";
import { getTarot } from "../services/requests";
import { ContextTarot } from "./GlobalContext";

const GlobalState = (props) => {
        const [tarot, setTarot] = useState([])

        const getCards = () => {
            getTarot(setTarot)
        }

       const URL_BASEIMAGE = tarot.imagesUrl

       const URL_BACKIMAGE = tarot.imageBackCard


  return (
    <ContextTarot.Provider value={{URL_BASEIMAGE, URL_BACKIMAGE, tarot, getCards}}>
      {props.children}
    </ContextTarot.Provider>
  );
}

export default GlobalState