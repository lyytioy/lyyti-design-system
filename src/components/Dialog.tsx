import { MouseEventHandler } from 'react';
import {
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  DialogProps as MuiDialogProps,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Button from './Button';
import { Close } from '../icons';

const useStyles = makeStyles({
  titlePadding: {
    '& h2': { paddingRight: '40px' },
  },
  closeIcon: {
    position: 'absolute',
    right: '24px',
    padding: '4px',
    width: 'min-content',
    minWidth: '32px',
    borderRadius: '50%',
  },
});

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
  const classes = useStyles();
  return (
    <MuiDialog {...props} fullScreen={fullScreen} open={open} onClose={onClose}>
      <MuiDialogTitle className={classes.titlePadding}>
        {dialogTitle}
        <Button
          onClick={onClose as MouseEventHandler<HTMLButtonElement>}
          className={classes.closeIcon}
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
