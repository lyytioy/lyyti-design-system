import AlertBase, { AlertBaseProps } from 'components/AlertBase';
import Fade from '@material-ui/core/Fade';

export interface AlertProps extends AlertBaseProps {
  open?: boolean;
}

const Alert = ({
  open,
  severity = 'success',
  variant = 'standard',
  ...props
}: AlertProps): JSX.Element => {
  return (
    <Fade in={open}>
      <AlertBase severity={severity} variant={variant} {...props} />
    </Fade>
  );
};

export default Alert;
