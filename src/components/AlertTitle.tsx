import {
  AlertTitle as MuiAlertTitle,
  AlertTitleProps as MuiAlertTitleProps,
} from '@material-ui/lab';

export type AlertTitleProps = MuiAlertTitleProps;

const AlertTitle = (props: AlertTitleProps): JSX.Element => {
  return <MuiAlertTitle {...props} />;
};

export default AlertTitle;
