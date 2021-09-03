import { Card, CardContent, TextField, Button } from "@material-ui/core";
import styled from "styled-components";

export const CardCreate = styled(Card)`
        display: flex;
        margin: auto;
        margin-top: 20px;
        width: 700px;
        max-width: 70vw;
        height: 280px;
`

export const CardContentCreate = styled(CardContent)`
`

export const FormCreate = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 50px;
`

export const ButtonFormCreate = styled(Button)`
    width: 100px;
   

`

export const TitleInput = styled(TextField)`
`

export const BodyInput = styled.textarea`
    width: 550px;
    background-color: #EDEDED;
    border: none;
    outline: none;
    border-radius: 5px;
    height: 100px;
    margin: auto;
    margin-top: 15px;
    font-size: 16px;
    margin-bottom: 5px;
    
`

export const DivTitle = styled.div`
    background-color: #F50057;
    color: white;
    border-radius: 5px;
    padding: 5px;
    text-align: center;
    width: 150px;
    margin: auto;
    position: relative;
    left: 20px;
`