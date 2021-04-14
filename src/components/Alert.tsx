import { Alert as MuiAlert, AlertProps as MuiAlertProps } from '@material-ui/lab';
import Fade from '@material-ui/core/Fade';

export interface AlertProps extends MuiAlertProps {
  open: boolean;
  color?: 'success' | 'info' | 'warning' | 'error';
  severity: 'success' | 'info' | 'warning' | 'error';
  variant: 'standard' | 'filled' | 'outlined';
}

const Alert = ({
  open,
  severity = 'success',
  variant = 'standard',
  ...props
}: AlertProps): JSX.Element => {
  return (
    <Fade in={open}>
      <MuiAlert severity={severity} variant={variant} {...props} />
    </Fade>
  );
};

export default Alert;
