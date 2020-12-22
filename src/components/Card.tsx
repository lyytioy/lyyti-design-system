import React, { FunctionComponent } from 'react';
import {Card as MuiCard, CardProps as MuiCardProps, createStyles, makeStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles<Theme>(theme => createStyles({
  root: {
    borderRadius: '3px',
    border: '1px solid',
    borderColor: theme.palette.grey[100],
  },
}))

export interface CardProps extends MuiCardProps {}

const Card: FunctionComponent<CardProps> = props => {
    const classes = useStyles();

    return (
        <MuiCard {...props} classes={{ root: classes.root }} />
    )
};

export default Card;
