import React from 'react'
import Typography from '@material-ui/core/Typography';

export default function TripInfoItens (props) {
    return(
        <Typography variant="body1">{props.title} : {props.info}</Typography>
    )

}