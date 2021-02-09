import React, { FunctionComponent } from 'react';
import {
  ClickAwayListener as MuiClickAwayListener,
  ClickAwayListenerProps as MuiClickAwayListenerProps,
} from '@material-ui/core';

export type ClickAwayListenerProps = MuiClickAwayListenerProps;

const ClickAwayListener: FunctionComponent<ClickAwayListenerProps> = (props) => {
  return <MuiClickAwayListener {...props} />;
};

export default ClickAwayListener;
