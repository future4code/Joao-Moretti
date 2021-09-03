import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TripInfoItens from './TripInfoItens';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function TripInfo() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Informações da Viagem
          </Typography>
        </CardContent>
        <TripInfoItens title={'Nome'} info={'Viagem para marte'}/>
        <TripInfoItens title={'Planeta'} info={'Marte'}/>
        <TripInfoItens title={'Data'} info={'23/05/2022'}/>
        <TripInfoItens title={'Descrição'} info={'Vamos colonizar marte'}/>
        <TripInfoItens title={'Duração em dias'} info={'50'}/>
      
    </Card>
  );
}