import { Popper as MuiPopper, PopperProps as MuiPopperProps } from '@material-ui/core';

export type PopperProps = MuiPopperProps;

const Popper = (props: PopperProps): JSX.Element => {
  return <MuiPopper {...props} />;
};

export default Popper;
