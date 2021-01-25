import React, { FunctionComponent } from 'react';
import { Alert as MuiAlert, AlertProps as MuiAlertProps } from '@material-ui/lab';

export type AlertProps = MuiAlertProps;

const Alert: FunctionComponent<AlertProps> = (props) => {
  return <MuiAlert {...props} />;
};

export default Alert;
