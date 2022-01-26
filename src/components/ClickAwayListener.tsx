import {
  ClickAwayListener as MuiClickAwayListener,
  ClickAwayListenerProps as MuiClickAwayListenerProps,
} from '@mui/material';

export type ClickAwayListenerProps = MuiClickAwayListenerProps;

const ClickAwayListener = (props: ClickAwayListenerProps): JSX.Element => {
  return <MuiClickAwayListener {...props} />;
};

export default ClickAwayListener;
