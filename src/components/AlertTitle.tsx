import { AlertTitle as MuiAlertTitle } from '@mui/material';
import { AlertTitleProps as MuiAlertTitleProps } from '@mui/material';

export type AlertTitleProps = MuiAlertTitleProps;

const AlertTitle = (props: AlertTitleProps): JSX.Element => {
  return <MuiAlertTitle {...props} />;
};

export default AlertTitle;
