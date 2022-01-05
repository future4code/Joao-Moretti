import styled from "styled-components";

export const CardHome = styled.div`
    border: 1px solid black;
    width: 30vw;
    height: 40vh;
    /* position: relative; */
    margin: auto;
    
`
export const TitleContainer = styled.div`

    h3{
        text-align:center;
    }
`

export const ThumbContainer = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;

    img{
        width: 25em;
        
        :hover {
            cursor: pointer;
        }
    }


`

export const DescriptionContainer = styled.div`

    p{
        text-align: center;
        margin-top: 5vh;
    }
`

export const ButtonContainer = styled.div`

`