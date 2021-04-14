import { Snackbar as MuiSnackbar, SnackbarProps as MuiSnackbarProps } from '@material-ui/core';
import Alert from 'components/Alert';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

export interface SnackbarProps extends MuiSnackbarProps {
  anchorOrigin: {
    horizontal: 'center' | 'left' | 'right';
    vertical: 'bottom' | 'top';
  };
  autoHideDuration: number;
  color?: 'success' | 'info' | 'warning' | 'error';
  direction: 'right' | 'left' | 'up' | 'down';
  severity: 'success' | 'info' | 'warning' | 'error';
  variant: 'standard' | 'filled' | 'outlined';
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
      {...props}
      anchorOrigin={anchorOrigin}
      autoHideDuration={autoHideDuration}
      TransitionComponent={(params: TransitionProps) => (
        <Slide {...params} direction={direction} />
      )}>
      <div>
        <Alert color={color} severity={severity} variant={variant}>
          {props.message}
        </Alert>
      </div>
    </MuiSnackbar>
  );
};

export default Snackbar;
