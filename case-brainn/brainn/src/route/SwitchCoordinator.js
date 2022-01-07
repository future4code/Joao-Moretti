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