import { MouseEventHandler } from 'react';
import {
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  DialogProps as MuiDialogProps,
} from '@mui/material';
import Button from './Button';
import { Close } from '../icons';

export interface DialogProps extends MuiDialogProps {
  children: JSX.Element | string;
  dialogActions?: JSX.Element | JSX.Element[];
  dialogTitle: JSX.Element | string;
  fullScreen?: boolean;
  onClose: () => void;
  open: boolean;
}

const Dialog = ({
  children,
  dialogActions,
  dialogTitle,
  fullScreen = false,
  onClose,
  open,
  ...props
}: DialogProps): JSX.Element => {
  return (
    <MuiDialog fullScreen={fullScreen} open={open} onClose={onClose} {...props}>
      <MuiDialogTitle sx={{ pr: 8 }}>
        {dialogTitle}
        <Button
          onClick={onClose as MouseEventHandler<HTMLButtonElement>}
          sx={{
            borderRadius: '50%',
            position: 'absolute',
            top: 10,
            right: 8,
          }}
        >
          <Close fontSize="small" />
        </Button>
      </MuiDialogTitle>
      <MuiDialogContent>{children}</MuiDialogContent>
      {dialogActions && <MuiDialogActions>{dialogActions}</MuiDialogActions>}
    </MuiDialog>
  );
};

export default Dialog;
