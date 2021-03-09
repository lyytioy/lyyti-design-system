import { Alert as MuiAlert, AlertProps as MuiAlertProps } from '@material-ui/lab';

export interface AlertProps extends MuiAlertProps {
  variant: 'standard' | 'filled' | 'outlined';
  severity: 'success' | 'info' | 'warning' | 'error';
  color: 'success' | 'info' | 'warning' | 'error';
}

const Alert = (props: AlertProps): JSX.Element => {
  return <MuiAlert {...props} />;
};

Alert.defaultProps = {
  children: 'Alert content in here',
  closeText: 'Close',
  variant: 'standard',
  severity: 'success',
  onClose: undefined,
  action: undefined,
  color: undefined,
  icon: undefined,
};

export default Alert;
