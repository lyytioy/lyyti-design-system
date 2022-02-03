import AlertBase, { AlertBaseProps } from './AlertBase';
import AlertTitle from './AlertTitle';
import Fade from '@mui/material/Fade';
import { ReactNode, SyntheticEvent } from 'react';

export interface AlertProps extends Omit<AlertBaseProps, 'elevation' | 'options' | 'square'> {
  action?: ReactNode;
  onClose?: (event: SyntheticEvent) => void;
  open?: boolean;
  title?: string;
  'data-testid'?: string;
}

const Alert = ({
  action,
  onClose,
  open,
  severity = 'success',
  variant = 'standard',
  title = undefined,
  children,
  ...props
}: AlertProps): JSX.Element => {
  return (
    <Fade in={open}>
      <AlertBase action={action} onClose={onClose} severity={severity} variant={variant} {...props}>
        {title && <AlertTitle>{title}</AlertTitle>}
        {children}
      </AlertBase>
    </Fade>
  );
};

export default Alert;
