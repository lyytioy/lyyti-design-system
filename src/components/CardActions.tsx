import React, { FunctionComponent } from 'react';
import {CardActions as MuiCardActions, CardActionsProps as MuiCardActionsProps, createStyles, makeStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles<Theme>(theme => createStyles({
  root: {
      padding: '16px'
  },
}))

export interface CardActionsProps extends MuiCardActionsProps {}

const CardActions: FunctionComponent<CardActionsProps> = props => {
    const classes = useStyles();

    return (
        <MuiCardActions {...props} classes={{ root: classes.root }} />
    )
};

export default CardActions;
