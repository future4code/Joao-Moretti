import { CloseIcon, PopUpContainer, StylePopUp } from "./PopUpStyles"


const PopUp = (props) => {
    return (
        <PopUpContainer>
            <StylePopUp>
                <CloseIcon onClick={props.closePopUp}> X </CloseIcon>
            {props.content}
            </StylePopUp>
        </PopUpContainer>
    )

}

export default PopUp