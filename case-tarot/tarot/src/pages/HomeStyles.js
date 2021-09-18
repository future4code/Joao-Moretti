import { Button } from "@material-ui/core";
import styled from "styled-components";

export const HomeBody = styled.div`
  
    `

export const CardsTarot = styled.div`
    width: 100%;
    border: 2px solid white;
    border-radius: 2px;
    cursor: pointer;
    


    img{
        width: 10vw;
        height: 95%;
        display: flex;
        justify-content: center;
        margin: auto;
        
    }

    :hover {
        transform: scale(0.97);
    }

    p {
        color: white;
        text-align: center;
    }
`

export const CardsTarotBack = styled.div`
    width: 100%;
    border: 2px solid white;
    border-radius: 2px;
    cursor: pointer;

    :active {
        transform: rotateY(180deg);
    }


    img{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        margin: auto;
        
    }

    :hover {
        transform: scale(0.97);
    }

    p {
        color: white;
        text-align: center;
    }
`

export const CardContainer = styled.div`
    width: 70%;
    /* border: 1px solid red; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    row-gap: 15px;
    column-gap: 20px;
    justify-items: center;
    margin: auto;
    
`

export const ButtonStart = styled(Button)`
    width: 100%;
`
export const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 10vw;
    max-width: 20vw;
    margin: auto;
    padding-bottom: 20px;
`
