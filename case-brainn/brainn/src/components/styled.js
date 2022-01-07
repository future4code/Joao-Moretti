import styled from "styled-components";

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 50%;
    
    position: relative;
    left: 77%;
    top: 25%;
    transform: translateY(-0%); 


    
`

export const Button = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,900&display=swap');

    display: flex;
    font-size: 20px;
    color: white;
    background-color: #60FFA4;
    margin: 10px;
    min-width: 110px;
    padding: 16px;
    border: double white;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    align-items: center;
    margin: auto;
  
    :hover{
        width: 120px;
        cursor: pointer;
    }
`