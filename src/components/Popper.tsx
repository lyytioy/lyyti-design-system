import { FunctionComponent } from 'react';
import { Popper as MuiPopper, PopperProps as MuiPopperProps } from '@material-ui/core';

export type PopperProps = MuiPopperProps;

const Popper: FunctionComponent<PopperProps> = (props) => {
  return <MuiPopper {...props} />;
};

export default Popper;
