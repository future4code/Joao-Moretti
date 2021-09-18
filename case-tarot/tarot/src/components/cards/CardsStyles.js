import styled from "styled-components";

export const CardsTarotContainer = styled.div`
    width: 70vw;
    /* border: 1px solid red; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    row-gap: 15px;
    column-gap: 20px;
    justify-items: center;
    margin: auto;

    /* :checked ~ {
      transform: rotateY(180deg);
    }
   */
 

`

export const CardsTarotGameBack = styled.label`
    perspective: 1000px;
    border: 2px solid white;
    border-radius: 2px;
    cursor: pointer;
    /* position: relative;
    width: 100%;
    height: 35vh;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    display: inline-block; */

    /* :active {
    transform: rotateY(180deg);
  } */
    

    /* :checked ~ {
      transform: rotateY(180deg);
    } */

    img{
        /* width: 100%;
        height: 100%; */
        display: flex;
        justify-content: center;
        margin: auto;
        
    }

    /* :hover {
        transform: scale(0.97);
    } */

`

export const FrontCard = styled.div`
  /* position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  */

`

export const BackCard = styled.div`
  /* position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  align-items: center; */


`

export const InputCard = styled.input`
 /* display: none; */


`

// export const Div = styled.label`
 
//  :checked{
//   transform: rotateY(180deg);
//  }

// `