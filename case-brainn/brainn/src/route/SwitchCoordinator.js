import React from "react"
import { useHistory } from "react-router-dom"
import DiaDeSortePage from "../page/diaDeSorte/DiaDeSortePage"
import LotofacilPage from "../page/lotofacil/LotofacilPage"
import LotomaniaPage from "../page/lotomania/LotomaniaPage"
import MegaSenaPage from "../page/megaSena/MegaSenaPage"
import QuinaPage from "../page/quina/QuinaPage"
import TimemaniaPage from "../page/timemania/TimemaniaPage"
import { goToLotofacil, goToLotomania, goToMegaSena, goToQuina, goToSorte, goToTimemania } from "./Coordinator"


export const switchCoordinator = (title, history) => {

    if(title === "mega-sena"){
        goToMegaSena(history)
     }

    if(title === "quina"){
        goToQuina(history)
     }

    if(title === "lotofácil"){
        goToLotofacil(history)
    }

    if(title === "lotomania"){
        goToLotomania(history)
    }

    if(title === "timemania"){
        goToTimemania(history)
    }

    if(title === "dia de sorte"){
        goToSorte(history)
    }
 

        
    
}