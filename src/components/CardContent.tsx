import React, { FunctionComponent } from 'react';
import {CardContent as MuiCardContent, CardContentProps as MuiCardContentProps, createStyles, makeStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles<Theme>(theme => createStyles({
  root: {
  },
}))

export interface CardContentProps extends MuiCardContentProps {}

const CardContent: FunctionComponent<CardContentProps> = props => {
    const classes = useStyles();

    return (
        <MuiCardContent {...props} classes={{ root: classes.root }} />
    )
};

export default CardContent;
