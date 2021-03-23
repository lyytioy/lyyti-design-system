import { Snackbar as MuiSnackbar, SnackbarProps as MuiSnackbarProps } from '@material-ui/core';
import Alert from './Alert';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import React from 'react';

const TransitionRight = (props: TransitionProps) => {
  return <Slide {...props} direction="right" />;
};

const TransitionLeft = (props: TransitionProps) => {
  return <Slide {...props} direction="left" />;
};

const TransitionUp = (props: TransitionProps) => {
  return <Slide {...props} direction="up" />;
};

const TransitionDown = (props: TransitionProps) => {
  return <Slide {...props} direction="down" />;
};

export interface SnackbarProps extends MuiSnackbarProps {
  severity?: 'success' | 'info' | 'warning' | 'error' | undefined;
  variant?: 'standard' | 'filled' | 'outlined' | undefined;
  direction?: 'right' | 'left' | 'up' | 'down' | undefined;
}

const getTransitionComponentByDirection = (direction: string | undefined) => {
  switch (direction) {
    case 'right':
      return TransitionRight;
    case 'left':
      return TransitionLeft;
    case 'up':
      return TransitionUp;
    case 'down':
      return TransitionDown;
    default:
      return TransitionLeft;
  }
};

const Snackbar = (props: SnackbarProps): JSX.Element => {
  return (
    <MuiSnackbar
      {...props}
      TransitionComponent={getTransitionComponentByDirection(props.direction)}>
      <div>
        <Alert severity={props.severity} variant={props.variant}>
          {props.message}
        </Alert>
      </div>
    </MuiSnackbar>
  );
};

Snackbar.defaultProps = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
  autoHideDuration: 6000,
  message: 'Success message',
  severity: 'success',
  variant: 'standard',
  direction: 'left',
};

export default Snackbar;
