import React, { FunctionComponent } from 'react';
import {Radio as MuiRadio, RadioProps as MuiRadioProps, createStyles, makeStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles<Theme>(theme => createStyles({
  root: {
      color: theme.palette.grey[200],
      '&$root$root:hover': {
        backgroundColor: '#045b561a'
    }
  },
}))

export interface RadioProps extends MuiRadioProps {}

const Radio: FunctionComponent<RadioProps> = props => {
    const classes = useStyles();

    return (
        <MuiRadio {...props} classes={{ root: classes.root }} />
    )
};

export default Radio;