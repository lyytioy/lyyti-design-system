import { Snackbar as MuiSnackbar, SnackbarProps as MuiSnackbarProps } from '@material-ui/core';
import Alert from './Alert';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

export interface SnackbarProps extends MuiSnackbarProps {
  severity?: 'success' | 'info' | 'warning' | 'error' | undefined;
  variant?: 'standard' | 'filled' | 'outlined' | undefined;
  direction?: 'right' | 'left' | 'up' | 'down' | undefined;
}

const Snackbar = (props: SnackbarProps): JSX.Element => {
  return (
    <MuiSnackbar
      {...props}
      TransitionComponent={(params: TransitionProps) => (
        <Slide {...params} direction={props.direction} />
      )}>
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
