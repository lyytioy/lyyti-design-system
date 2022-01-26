import { Alert as MuiAlert } from '@mui/material';
import { AlertProps as MuiAlertProps } from '@mui/material';

export interface AlertBaseProps extends MuiAlertProps {
  color?: 'success' | 'info' | 'warning' | 'error';
  severity: 'success' | 'info' | 'warning' | 'error';
  variant: 'standard' | 'filled' | 'outlined';
}

const AlertBase = ({
  severity = 'success',
  variant = 'standard',
  ...props
}: AlertBaseProps): JSX.Element => {
  return <MuiAlert severity={severity} variant={variant} {...props} />;
};

export default AlertBase;
