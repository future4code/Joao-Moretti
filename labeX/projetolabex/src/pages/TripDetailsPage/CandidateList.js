import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CandidateList() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Canditados
          </Typography>
        </CardContent>
        <List dense={true}>
              
                <ListItem>
                  <ListItemText
                    primary="Single-line item"                   
                  />
                  <ListItemSecondaryAction>
                    <IconButton>
                      <ThumbUpIcon />
                    </IconButton>
                    <IconButton>
                      <ThumbDownIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              
            </List>
    </Card>
  );
}