import {
  ClickAwayListener as MuiClickAwayListener,
  ClickAwayListenerProps as MuiClickAwayListenerProps,
} from '@material-ui/core';

export type ClickAwayListenerProps = MuiClickAwayListenerProps;

const ClickAwayListener = (props: ClickAwayListenerProps): JSX.Element => {
  return <MuiClickAwayListener {...props} />;
};

export default ClickAwayListener;
