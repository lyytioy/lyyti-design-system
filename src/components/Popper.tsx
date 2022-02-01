import { Popper as MuiPopper, PopperProps as MuiPopperProps } from '@mui/material';

export type PopperProps = MuiPopperProps;

const Popper = (props: PopperProps): JSX.Element => {
  return <MuiPopper {...props} />;
};

export default Popper;
