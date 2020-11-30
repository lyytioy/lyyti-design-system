import React, { FunctionComponent } from 'react';
import {Switch as MuiSwitch, SwitchProps as MuiSwitchProps, createStyles, makeStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles<Theme>(theme => createStyles({
  root: {
      width: '54px',
      height: '36px',
  },
  switchBase: {
    padding: '10px',
    '&$checked': {
        transform: 'translateX(16px)',
        '$sizeSmall &': {
          transform: 'translate(12px)'
        }
    },
    '$sizeSmall &': {
        padding: '5px',
    }
  },
  track: {
    backgroundColor: theme.palette.grey[200],
    "$disabled$colorPrimary + &": {
      opacity: 0.5,
      backgroundColor: theme.palette.grey[300]
    },
  },
  thumb: {
    width: '16px',
    height: '16px',
    boxShadow: 'none',
    '$sizeSmall &': {
        width: '12px',
        height: '12px'
    }
  },
  sizeSmall: {
      width: '36px',
      height: '22px',
  },
  colorPrimary: {
    color: theme.palette.grey[300],
    '&$disabled': {
        color: theme.palette.grey[100],
    },
    '&$checked:hover': {
      backgroundColor: 'rgba(4, 91, 86, 0.1)'
    }
  },
  checked : {},
  disabled: {}
}))

export interface SwitchProps extends MuiSwitchProps {}

const Switch: FunctionComponent<SwitchProps> = props => {
    const classes = useStyles();

    return (
        <MuiSwitch 
          {...props} 
          classes={{ 
            root: classes.root, 
            switchBase: classes.switchBase, 
            track: classes.track, 
            thumb: classes.thumb, 
            sizeSmall: classes.sizeSmall, 
            colorPrimary: classes.colorPrimary, 
            checked: classes.checked, 
            disabled: classes.disabled }} />
    )
};

export default Switch;