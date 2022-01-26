import AlertBase, { AlertBaseProps } from './AlertBase';
import Fade from '@mui/material/Fade';
import React from 'react';

export interface AlertProps extends AlertBaseProps {
  action?: React.ReactNode;
  onClose?: (event: React.SyntheticEvent) => void;
  open?: boolean;
  'data-testid'?: string;
}

const Alert = ({
  action,
  onClose,
  open,
  severity = 'success',
  variant = 'standard',
  ...props
}: AlertProps): JSX.Element => {
  return (
    <Fade in={open}>
      <AlertBase
        action={action}
        onClose={onClose}
        severity={severity}
        variant={variant}
        {...props}
      />
    </Fade>
  );
};

export default Alert;
