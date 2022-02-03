import { Snackbar as MuiSnackbar, SnackbarProps as MuiSnackbarProps } from '@mui/material';
import AlertBase from './AlertBase';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { ReactElement } from 'react';

export interface SnackbarProps extends MuiSnackbarProps {
  anchorOrigin?: {
    horizontal: 'center' | 'left' | 'right';
    vertical: 'bottom' | 'top';
  };
  autoHideDuration?: number;
  color?: 'success' | 'info' | 'warning' | 'error';
  direction?: 'right' | 'left' | 'up' | 'down';
  severity?: 'success' | 'info' | 'warning' | 'error';
  variant?: 'standard' | 'filled' | 'outlined';
}

const Snackbar = ({
  anchorOrigin = {
    vertical: 'top',
    horizontal: 'right',
  },
  autoHideDuration = 5000,
  color,
  direction = 'left',
  severity = 'success',
  variant = 'standard',
  ...props
}: SnackbarProps): JSX.Element => {
  return (
    <MuiSnackbar
      anchorOrigin={anchorOrigin}
      autoHideDuration={autoHideDuration}
      TransitionComponent={(params: TransitionProps & { children: ReactElement<any, any> }) => (
        <Slide {...params} direction={direction} />
      )}
    >
      <div>
        <AlertBase color={color} severity={severity} variant={variant}>
          {props.message}
        </AlertBase>
      </div>
    </MuiSnackbar>
  );
};

export default Snackbar;
