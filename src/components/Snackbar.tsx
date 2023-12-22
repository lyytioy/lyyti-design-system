import { Snackbar as MuiSnackbar, SnackbarProps as MuiSnackbarProps } from '@mui/material';
import AlertBase from './AlertBase';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef, ReactElement, Ref } from 'react';

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
  ref?: Ref<HTMLDivElement>;
}

const Snackbar = (
  {
    anchorOrigin = {
      vertical: 'top',
      horizontal: 'right',
    },
    autoHideDuration = 5000,
    color,
    direction = 'left',
    severity = 'success',
    variant = 'standard',
    action,
    ...props
  }: SnackbarProps,
  ref: Ref<HTMLDivElement>
): JSX.Element => {
  return (
    <MuiSnackbar
      ref={ref}
      anchorOrigin={anchorOrigin}
      autoHideDuration={autoHideDuration}
      TransitionComponent={(params: TransitionProps & { children: ReactElement<any, any> }) => (
        <Slide {...params} direction={direction} />
      )}
      {...props}
    >
      <div>
        <AlertBase color={color} severity={severity} variant={variant} action={action}>
          {props.message}
        </AlertBase>
      </div>
    </MuiSnackbar>
  );
};

export default forwardRef(Snackbar);
