import { Alert as MuiAlert, AlertProps as MuiAlertProps } from '@material-ui/lab';

export interface AlertProps extends MuiAlertProps {
  color?: 'success' | 'info' | 'warning' | 'error';
  severity: 'success' | 'info' | 'warning' | 'error';
  variant: 'standard' | 'filled' | 'outlined';
}

const Alert = ({
  severity = 'success',
  variant = 'standard',
  ...props
}: AlertProps): JSX.Element => {
  return <MuiAlert severity={severity} variant={variant} {...props} />;
};

export default Alert;
